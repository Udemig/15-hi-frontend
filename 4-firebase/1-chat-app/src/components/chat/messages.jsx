import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";

const Messages = ({ room }) => {
  const [messages, setMessages] = useState([]);

  // veritabanınaki mesajları anlık olarak al
  useEffect(() => {
    // kolleksiyonun referansını al
    const collectionRef = collection(db, "messages");

    // messages kolleksiyonundaki verilere abone ol
    const unsub = onSnapshot(collectionRef, (snapshot) => {
      // mesajların geçici olarak tutulduğu dizi
      const temp = [];

      // her belgenin içerisindeki dataya erişip diziye aktaran döngü
      snapshot.docs.forEach((doc) => temp.push(doc.data()));

      // mesajları state'e aktar
      setMessages(temp);
    });

    // bileşen ekrandan ayrılınca aboneliği durdur
    return () => unsub();
  }, []);

  return (
    <div className="flex-1 p-3">
      <div className="h-full grid place-items-center text-zinc-400">
        <p>Sohbete ilk mesajı gönderin</p>
      </div>
    </div>
  );
};

export default Messages;
