import { getTranslations } from "next-intl/server";
import { FaLeaf, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const Features = async () => {
  const t = await getTranslations("Features");

  const featureList = [
    {
      icon: <MdLocalShipping />,
      title: t("delivery-title"),
      description: t("delivery-description"),
      color: "bg-blue-100",
    },
    {
      icon: <FaLeaf />,
      title: t("organic-title"),
      description: t("organic-description"),
      color: "bg-green-100",
    },
    {
      icon: <FaMoneyBillWave />,
      title: t("price-title"),
      description: t("price-description"),
      color: "bg-yellow-100",
    },
    {
      icon: <FaShieldAlt />,
      title: t("security-title"),
      description: t("security-description"),
      color: "bg-red-100",
    },
  ];

  return (
    <div className="my-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {featureList.map((feature, key) => (
        <div key={key} className={`flex items-center gap-4 p-4 rounded-lg ${feature.color}`}>
          {feature.icon}

          <div>
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="text-zinc-800">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
