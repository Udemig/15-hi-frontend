import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import Loader from "../loader";

const Protected = () => {
  // 1. kullanıcı oturumunun state'ini tut
  const [user, setUser] = useState(undefined); // undefined - null - object

  // 2. kullanıcı oturum verisini al
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUser(user));

    // bileşen ekrandan ayrılırsa oturum verisine aboneliği durdur
    return () => unsub();
  }, []);

  // 3. kullanıcı verisi yükleniyorsa loader bas
  if (user === undefined) return <Loader />;

  // 4. kullanıcı oturumu kapalıysa: login sayfasına yönlendir
  // replace: yönlendirme yapılmadan önceki sayfayı tarayıcı geçmişinden siler
  if (user === null) return <Navigate to="/login" replace />;

  // 5. kullanıcı oturumu açıksa: alt route'un elementini ekrana bas
  // context: alt route'lara kullanıcı verisini prop olarak gönderdik
  return <Outlet context={user} />;
};

export default Protected;
