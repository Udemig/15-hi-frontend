import type { FC, MouseEvent, ChangeEvent, SubmitEvent } from "react";

const Form: FC = () => {
  // butona tıklandığında
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  // input değiştiğinde
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // form gönderilince
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Gönder</button>
    </form>
  );
};

export default Form;
