import { useLogout, useProfile } from "../../service/auth";

const UserInfo = () => {
  const { user } = useProfile();
  const { isPending, mutate } = useLogout();

  // todo: modal

  return (
    <div className="flex justify-end items-center gap-3">
      <button>
        <img src="/Search.png" alt="search" className="size-5 md:size-6" />
      </button>

      <button>
        <img src="/User.png" alt="user" className="size-5 md:size-6" />
      </button>
    </div>
  );
};

export default UserInfo;
