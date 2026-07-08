import { useState } from "react";
import { useLogout, useProfile } from "../../service/auth";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const { user } = useProfile();
  const { isPending, mutate } = useLogout();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-end items-center gap-3">
      <button>
        <img src="/Search.png" alt="search" className="size-5 md:size-6" />
      </button>

      <button className="relative" onClick={() => setIsOpen(!isOpen)}>
        <img src="/User.png" alt="user" className="size-5 md:size-6" />

        {isOpen && user && (
          <div className="absolute top-13 -left-27 xl:-left-25 bg-white shadow-lg rounded-md z-50 overflow-hidden border border-zinc-200">
            <div className="font-semibold header-item">
              <span>{user.firstName}</span>
              <span className="ps-2">{user.lastName}</span>
            </div>

            {user?.role === "admin" && (
              <div className="header-item">
                <Link to="/admin/dashboard">Admin Paneli</Link>
              </div>
            )}

            <button disabled={isPending} onClick={() => mutate()} className="header-item">
              Çıkış Yap
            </button>
          </div>
        )}
      </button>
    </div>
  );
};

export default UserInfo;
