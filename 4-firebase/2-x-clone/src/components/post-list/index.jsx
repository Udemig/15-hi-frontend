import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import Loader from "../loader";
import Post from "./post";

const PostList = () => {
  const [posts, setPosts] = useState(undefined);

  useEffect(() => {
    // kolleksiyonun referansını al
    const collectionRef = collection(db, "tweets");

    // sorgu ayarlarını yap
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    // tweets kolleksiyonuna abone ol
    const unsub = onSnapshot(q, (snapshot) => {
      // state'e gönderlmeden önce geçici olarak tutucağımız dizi
      const temp = [];

      // veritabanından gelen belgelerin verilerine eriş
      snapshot.docs.forEach((doc) => {
        temp.push({ id: doc.id, ...doc.data() });
      });

      // posts state'ini güncelle
      setPosts(temp);
    });

    // bileşen ekrandan ayrılınca aboneliği durdur
    return () => unsub();
  }, []);

  if (posts === undefined) return <Loader designs="my-20" />;

  if (posts.length === 0)
    return (
      <div className="my-40 grid place-items-center">
        <p className="text-zinc-400">Henüz hiç gönderi paylaşılmadı</p>
      </div>
    );

  return posts.map((post) => <Post key={post.id} post={post} />);
};

export default PostList;
