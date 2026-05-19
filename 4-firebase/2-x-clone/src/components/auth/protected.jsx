import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import PageLoader from "../loader/page-loader";
import { toast } from "react-toastify";

const Protected = () => {
  // oturumu açık kullanıcı state'i
  const [user, setUser] = useState(undefined); // undefined | null | {...}

  // oturum verisine abone ol
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (activeUser) => setUser(activeUser));

    return () => unsub();
  }, []);

  // veri yüklenene kadar loader bas
  if (user === undefined) return <PageLoader />;

  // kullanıcı oturumu kapalıysa veya email doğrulanmamışsa login yönlendir
  if (user === null || user?.emailVerified === false) {
    if (user?.emailVerified === false) toast.info("Lütfen mailinizi doğrulayın");

    // auth sayfasına yönlendir
    return <Navigate to="/" replace />;
  }

  // oturum açıksa sayfayı göster
  return <Outlet context={user} />;
};

export default Protected;
