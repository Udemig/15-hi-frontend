const Button = () => {
  const kirmiziMi = true;
  const iconvarMi = true;

  return (
    <button
      style={{
        background: kirmiziMi ? "red" : "blue",
      }}
    >
      Bana Tıkla
      {iconvarMi ? "X" : "göster"}
      {iconvarMi && "X"}
    </button>
  );
};

export default Button;
