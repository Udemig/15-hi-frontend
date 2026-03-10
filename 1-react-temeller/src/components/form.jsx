function Form() {
  // form gönderilince çalışır
  const formGönderilince = (e) => {
    e.preventDefault();
    alert("ürün listeye eklendi");
  };

  // eskiden
  // const form = document.querySelector("form");
  // form.addEventListener("submit", handleSubmit);

  return (
    <form onSubmit={formGönderilince}>
      <label>Ürün İsmi</label>
      <input type="text" onChange={() => {}} />

      <button onClick={() => {}}>Gönder</button>
    </form>
  );
}

export default Form;
