import { useEffect, useRef, useState } from "react";
import { onSnapshot, collection, query, where, orderBy } from "firebase/firestore";
import { auth, db } from "../../firebase";
import Message from "./message";
import Arrow from "./arrow";

const Messages = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);

  const lastMessageRef = useRef();
  const prevMessageLength = useRef(0);
  const audioRef = useRef(new Audio("/notification.mp3"));

  // veritabanınaki mesajları anlık olarak al
  useEffect(() => {
    // kolleksiyonun referansını al
    const collectionRef = collection(db, "messages");

    // sorgu ayarlarını yap
    const q = query(collectionRef, where("room", "==", room), orderBy("createdAt", "asc"));

    // messages kolleksiyonundaki verilere abone ol
    const unsub = onSnapshot(q, (snapshot) => {
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

  // her yeni mesaj gelince çalışır
  useEffect(() => {
    if (messages.length < 1) return;

    // gönderilen son mesaja eriş
    const lastMessage = messages.at(-1);

    if (lastMessage.author.id === auth.currentUser.uid) {
      // son mesajı aktif kullanıcı attıysa en aşağı kaydır
      scrollToBottom();
    } else if (isAtBottom) {
      // son mesajı başkası attıysa ve kullanıcım sayfanın alt kısmındaysa son mesaja odaklan
      scrollToBottom();
    }

    // kullanıcı yukardayken yeni mesaj geldiyse
    if (messages.length > prevMessageLength.current && !isAtBottom) {
      // son mesajı başka kullanıcı attıysa okunmamış sayısını 1 arttır
      if (lastMessage.author.id !== auth.currentUser.uid) {
        setUnreadCount((prev) => prev + 1);
      }
    }

    // toplam mesak sayısını tuttuğumuz referansı güncelle
    prevMessageLength.current = messages.length;

    // bildirimi oynat
    playSound();
  }, [messages]);

  // sayfadaki son mesaja kaydır
  const scrollToBottom = () => {
    lastMessageRef.current.scrollIntoView();
    setUnreadCount(0);
  };

  // scrollbar kaydırılınca çalışır
  const handleScroll = (e) => {
    // clientHeight: container'ın kullanıcı ekranındaki yüksekliği ()
    // scrollTop: kullanıcı yukarıdan aşağıya kaç px kaydırdı
    // scrollHeight: tüm scrollanabilir alanın yüksekliği (gizli kısımlar dahil)
    const { clientHeight, scrollTop, scrollHeight } = e.target;

    // kullanıcı sayanın en alt kısmına yakın mı
    setIsAtBottom(clientHeight + scrollTop >= scrollHeight - 250);
  };

  // bildirim sesi oynat
  const playSound = async () => {
    await audioRef.current.play();
  };

  return (
    <main
      onScroll={handleScroll}
      className="flex-1 p-3 flex flex-col w-full overflow-y-auto overflow-x-hidden relative gap-3"
    >
      {messages.length < 1 ? (
        <div className="h-full grid place-items-center text-zinc-400">
          <p>Sohbete ilk mesajı gönderin</p>
        </div>
      ) : (
        messages.map((item, key) => <Message item={item} key={key} />)
      )}

      <div ref={lastMessageRef} />

      <Arrow isAtBottom={isAtBottom} unreadCount={unreadCount} scrollToBottom={scrollToBottom} />
    </main>
  );
};

export default Messages;
