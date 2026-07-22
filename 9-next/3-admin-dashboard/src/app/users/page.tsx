import UserModal from "@/components/modal/UserModal";
import UserTable from "@/components/table/UserTable";
import { FC, Suspense } from "react";
import Loading from "../loading";

interface Props {
  searchParams: Promise<{
    userId?: string;
  }>;
}

const Users: FC<Props> = async ({ searchParams }) => {
  const { userId } = await searchParams;

  return (
    <div className="page">
      <div>
        <h1 className="title">Kullanıcılar</h1>
        <p className="text-zinc-500">Kayıtlı kullanıcıları yönetin</p>
      </div>

      <Suspense fallback={<Loading />}>
        <UserTable />
      </Suspense>

      <UserModal userId={userId} />
    </div>
  );
};

export default Users;
