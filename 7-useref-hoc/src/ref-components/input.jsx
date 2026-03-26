import { useRef } from "react";

const Input = () => {
  // useRef kurulum
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.style.background = "crimson";
  };

  const handleClear = () => {
    inputRef.current.value = "";
    inputRef.current.style.background = "white";
  };

  return (
    <div>
      <h3>Örnek-1: Input</h3>
      <p>
        <b>Açıklama:</b> useRef ile input elementine direkt erişim sağlayıp focus yapıp stilini değiştirdik
      </p>

      <input ref={inputRef} type="text" className="form-control" />

      <button onClick={handleFocus} className="btn btn-primary mt-4">
        Odaklan
      </button>

      <button onClick={handleClear} className="btn btn-secondary mt-4 ms-4">
        Temizle
      </button>
    </div>
  );
};

export default Input;
