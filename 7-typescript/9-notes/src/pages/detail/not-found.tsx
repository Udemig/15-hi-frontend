import type { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div className="flex items-center justify-center flex-col my-40 gap-10">
      <h1 className="text-4xl">404</h1>
      <h1 className="text-2xl">Aradığınız Not Bulunamadı</h1>
      <Link to="/" className="border px-2 py-1 rounded-sm">
        Notlara Dön
      </Link>
    </div>
  );
};

export default NotFound;
