"use client";

import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("selam");

  return (
    <div className="page">
      <h1>Contact</h1>

      <span className="bg-red-500 text-base  font-bold p-2 rounded-md">Client Component</span>

      <button onClick={() => alert("Tıklandı")}>Tıkla</button>
    </div>
  );
};

export default Contact;
