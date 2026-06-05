const Card = ({ label, value }) => {
  return (
    <div className="p-6 border border-gray-200 text-black shadow-md hover:shadow-lg rounded-2xl bg-linear-to-br from-white to-gray-50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
      <p className="text-sm font-bold mb-3 capitalize text-gray-600 group-hover:text-pink-600 transition-all duration-300">
        {label.replaceAll("_", " ")}
      </p>

      <p className="text-xl font-semibold bg-linear-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
        {value.toLocaleString()}
      </p>
    </div>
  );
};

export default Card;
