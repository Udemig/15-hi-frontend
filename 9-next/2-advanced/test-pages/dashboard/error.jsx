"use client";

const Errror = ({ error, reset }) => {
  return (
    <div className="box text-red-500">
      <p>Hata: {error.message}</p>
    </div>
  );
};

export default Errror;
