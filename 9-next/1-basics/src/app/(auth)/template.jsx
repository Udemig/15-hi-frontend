"use client";
import Link from "next/link";
import { useState } from "react";

// Layout'lar HOC formatındadır
// Layout'lar bulunduğu klasördeki sayfları children propu olarak alır
const Template = ({ children }) => {
  const [name, setName] = useState("");

  return (
    <div className="flex gap-5">
      <aside className="border border-zinc-500 flex flex-col gap-5 p-4 rounded-md">
        <h1>Selam, {name}</h1>

        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md w-40"
        />

        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </aside>

      {children}
    </div>
  );
};

export default Template;
