"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="text-center my-20 flex flex-col gap-20 items-center">
      <h1>Hata: {error.message}</h1>
      <button onClick={reset}>Tekrar Dene</button>
    </div>
  );
};

export default Error;
