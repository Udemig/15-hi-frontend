import { CardItem, InputItem, NavItem, OptionItem } from "@/types";
import { TiHome } from "react-icons/ti";
import { FaUsers, FaHeart, FaBox, FaChartArea, FaDiceD6, FaCog } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import icon1 from "@/assets/images/icon-1.webp";
import icon2 from "@/assets/images/icon-2.webp";
import icon3 from "@/assets/images/icon-3.webp";
import icon4 from "@/assets/images/icon-4.png";

export const links: NavItem[] = [
  {
    icon: <TiHome />,
    name: "Anasayfa",
    url: "/",
  },
  {
    icon: <FaDiceD6 />,
    name: "Ürünler",
    url: "/products",
  },
  {
    icon: <FaUsers />,
    name: "Kullanıcılar",
    url: "/users",
  },
  {
    icon: <IoIosPricetags />,
    name: "Siparişler",
    url: "/orders",
  },
  {
    icon: <FaChartArea />,
    name: "Grafikler",
  },
  {
    icon: <FaHeart />,
    name: "Favoriler",
  },
  {
    icon: <FaBox />,
    name: "Envanter",
  },
  {
    icon: <FaCog />,
    name: "Ayarlar",
  },
];

export const cards: CardItem[] = [
  { icon: icon1, label: "Toplam Kullanıcı", value: 1675 },
  { icon: icon2, label: "Toplam Sipariş", value: 312 },
  { icon: icon3, label: "Toplam Satış", value: "$73.486.236" },
  { icon: icon4, label: "Toplam Ürün", value: 1453 },
];

export const inputs: InputItem[] = [
  { label: "Ürün Adı", name: "name", type: "text" },
  { label: "Marka", name: "brand", type: "text" },
  { label: "Fiyat (₺)", name: "price", type: "number", step: 0.01, min: 0, max: 100000 },
  { label: "Stock (adet)", name: "stock", type: "number", step: 1, min: 0, max: 100000 },
  { label: "Rating (1-5)", name: "rating", type: "number", step: 0.1, min: 1, max: 5 },
  { label: "Yorum Sayısı", name: "reviews_count", type: "number", step: 1, min: 0, max: 100000 },
];

export const categories: OptionItem[] = [
  { label: "Kategori Seçiniz", value: "" },
  { label: "Elektronik", value: "Electronics" },
  { label: "Giyim", value: "Clothing" },
  { label: "Ayakkabı", value: "Shoes" },
  { label: "Aksesuar", value: "Accessories" },
  { label: "Ev", value: "Home" },
  { label: "Kitap", value: "Books" },
];
