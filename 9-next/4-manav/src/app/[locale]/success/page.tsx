import { getOrders } from "@/service/basket-service";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IoIosCheckmark } from "react-icons/io";

const Success: FC = async () => {
  const t = await getTranslations("Success");
  const { orders } = await getOrders();
  const order = orders.at(-1);

  console.log(order);

  return (
    <div className="h-[80vh]">
      <div className="h-2/5 bg-green-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <IoIosCheckmark className="text-[100px]" />
          <p className="font-semibold text-4xl">{t("title")}</p>
        </div>
      </div>

      <div className="h-3/5 p-10 text-black flex flex-col justify-center">
        <div>
          <ul>
            {order?.items.map((item, key) => (
              <li
                key={key}
                className="flex items-center justify-between py-2 px-5 border rounded-md border-zinc-300 shadow-lg mb-5"
              >
                <div className="flex gap-2 items-center">
                  <Image src={item.product.photo} alt={item.product.name} width={60} height={60} />
                  <h5 className="font-semibold">{item.product.name}</h5>
                </div>

                <p className="text-green-700">
                  {item.price}₺ x {item.quantity} {item.product.unit}
                </p>
              </li>
            ))}
          </ul>

          <p className="text-end my-5">
            {t("total-price")}: {order?.total_amount}₺
          </p>
        </div>

        <div className="text-center my-5 flex gap-5 justify-center">
          <Link
            href="/orders"
            className="border shadow py-2 px-5 rounded-lg hover:shadow-lg hover:bg-gray-100"
          >
            {t("my-orders")}
          </Link>
          <Link
            href="/"
            className="border shadow py-2 px-5 rounded-lg hover:shadow-lg hover:bg-gray-100"
          >
            {t("home")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
