import { useEffect, useState } from "react";

const UserList = () => {
  // api'dan gelen kullanıcılar verisi
  const [users, setUsers] = useState(null);
  // api isteği yükleniyor mu statei
  const [isLoading, setIsLoading] = useState(true);
  // api'dan gelen hatanın statei
  const [error, setError] = useState(null);

  // bileşenin ekrana basılma anını izle
  useEffect(() => {
    // api isteğini atma anından hemen önce isLoading state'ini true yap
    setIsLoading(true);

    // api isteğini at
    fetch("https://dummyjson.com/users")
      // json formatındaki veriyi js formatına çevir
      .then((res) => res.json())
      // kullanıcı verisini state'e aktar
      .then((data) => setUsers(data.users))
      // hata geldiğinde hata mesajını state'e aktar
      .catch((err) => setError(err.message))
      // yüklenme bitince loading isLoading state'ini false yap
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>Kullanıcı Listesi</h2>

      {/*
       * Yüklenme devam ediyorsa: loader bas
       * API'dan hata geldiyse: hata mesajını bas
       * API'dan veri geldiyse: kullanıcıları ekrana bas
       */}
      {isLoading ? (
        <h2>Yükleniyor...</h2>
      ) : error ? (
        <h2>Hata! {error}</h2>
      ) : (
        users?.map((user) => (
          <div>
            <img src={user.image} width={50} />
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <h5>{user.email}</h5>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
