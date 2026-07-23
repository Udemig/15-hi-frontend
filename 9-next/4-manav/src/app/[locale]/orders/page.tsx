import { Link } from "@/i18n/navigation";
import { getOrders } from "@/service/basket-service";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FC } from "react";
import { FaPhone, FaStore, FaTruck } from "react-icons/fa";

const Orders: FC = async () => {
  const { orders } = await getOrders();
  const t = await getTranslations("Orders");

  if (orders.length === 0) {
    return (
      <div className="page my-60 text-center">
        <h1 className="text-2xl text-center mb-5">{t("not-found")}</h1>

        <Link href="/" className="border border-zinc-400 rounded-lg py-2 px-6 hover:underline">
          {t("back-home")}
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="text-2xl font-bold mb-6">{t("title")}</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white border border-gray-200 shadow-md overflow-hidden rounded-lg"
          >
            <div className="p-6">
              {/* Ürün Listesi */}
              <div className="space-y-4 mb-4">
                {order.items.map((item, key) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-16 relative rounded-lg overflow-hidden border border-gray-200">
                        <Image
                          src={item.product.photo}
                          alt={item.product.name}
                          width={64}
                          height={64}
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
                        <p className="text-sm text-gray-600">
                          {item.price}₺ x {item.quantity} {item.product.unit}
                        </p>
                      </div>
                    </div>

                    <p className="font-medium text-gray-800">{item.quantity * item.price}₺</p>
                  </div>
                ))}
              </div>

              {/* Toplam */}
              <div className="flex justify-end items-center gap-2 py-4 border-b border-gray-200 pb-4">
                <span className="text-gray-600">{t("total")}</span>
                <h5 className="text-xl font-bold text-green-600">{order.total_amount}₺</h5>
              </div>

              {/* Müşteri & Teslimat Bilgileri */}
              <div className="grid md:grid-cols-2 gap-4 py-5 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-green-600" />
                  <div>
                    <h5 className="text-sm text-gray-500">{t("customer")}</h5>
                    <p>{order.customer_name}</p>
                    <p className="text-sm text-gray-700">{order.customer_phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {order.is_delivery ? (
                    <FaTruck className="text-green-500" />
                  ) : (
                    <FaStore className="text-green-600" />
                  )}

                  <div>
                    <h5 className="text-sm text-gray-500">
                      {order.is_delivery ? t("delivery-address") : t("store-pickup")}
                    </h5>
                    <p>{order.customer_name}</p>
                    {order.is_delivery && (
                      <p className="text-sm text-gray-700">{order.delivery_address}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
