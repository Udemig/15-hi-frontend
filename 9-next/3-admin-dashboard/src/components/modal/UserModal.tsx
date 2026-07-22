import { getUser } from "@/utils/service";
import Link from "next/link";
import { FC } from "react";
import { CgClose } from "react-icons/cg";

interface Props {
  userId?: string;
}

const UserModal: FC<Props> = async ({ userId }) => {
  if (!userId) return;

  // kullanıcı detayını al
  const user = await getUser(userId);

  // ekrana basılacak olan bilgileri dizi içerisinde tanımla
  const fields = [
    { label: "Eposta", value: user.email },
    { label: "Telefon", value: user.phone },
    { label: "Ülke", value: user.address.country },
    { label: "Şehir", value: user.address.city },
    { label: "Adres", value: user.address.street },
    { label: "Posta Kodu", value: user.address.postal_code },
    { label: "Sipariş Sayısı", value: user.orders.length },
  ];

  return (
    <div className="fixed bg-black/40 backdrop-blur-sm inset-0 grid place-items-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col">
        {/* Üst Bar */}
        <div className="flex justify-between items-center p-4 border-b border-zinc-100">
          <h3 className="font-semibold text-zinc-700">Kullanıcı Detayı</h3>

          <Link
            href="/users"
            className="size-9 grid place-items-center rounded-lg hover:bg-zinc-100 text-zinc-500 transition"
          >
            <CgClose className="text-lg" />
          </Link>
        </div>

        <div className="overflow-y-auto p-6 flex flex-col gap-6">
          {/* Kullanıcı Adı */}
          <div className="text-center">
            <div className="size-15 mx-auto rounded-full bg-blue-100 text-blue-600 grid place-items-center text-2xl font-bold mb-3 uppercase">
              {user.name.split(" ")[0].charAt(0)}
              {user.name.split(" ")[1].charAt(0)}
            </div>

            <h1 className="text-2xl font-bold tracking-tight">{user.name}</h1>
          </div>

          {/* Bilgiler */}
          <div className="bg-zinc-50 p-4 flex flex-col gap-2.5 rounded-xl">
            {fields.map((field, key) => (
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-zinc-500">{field.label}</span>
                <span className="font-medium text-zinc-900 text-right">{field.value}</span>
              </div>
            ))}
          </div>

          {/* Siparişler */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-700 mb-3">Siparişler</h4>

            <div className="grid grid-cols-3 text-xs uppercase tracking-wider text-zinc-500 font-semibold px-3 mb-2">
              <span className="text-left">Ürün ID</span>
              <span className="text-center">adet</span>
              <span className="text-right">Toplam</span>
            </div>

            <div>
              {user.orders.map((order, key) => (
                <div
                  key={key}
                  className="bg-zinc-50 hover:bg-zinc-100 transition p-3 rounded-lg grid grid-cols-3 text-sm"
                >
                  <span className="text-left font-mono text-zinc-600">#{order.product_id}</span>
                  <span className="text-center font-medium">{order.quantity}</span>
                  <span className="text-right font-semibold tabular-nums">
                    {order.total_price} TL
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
