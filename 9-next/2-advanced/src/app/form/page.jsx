// Server Action
// Bit fonksiyonun server action olması için async yaparız ve "use server" tanımı kullanırız
// Server action'lar formData'yı parametre olarak alır
// Server action'lar içerisinde istersek doğrudan backend kodları yazabiliriz
const handleSubmitAction = async (formData) => {
  "use server";

  const email = formData.get("email");
  const password = formData.get("password");

  // api isteği atılır..
  console.log(email, password);
};

const Form = () => {
  return (
    <form action={handleSubmitAction} className="p-10 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <label>Email</label>
        <input name="email" type="email" className="border rounded p-1" />
      </div>

      <div className="flex flex-col gap-5">
        <label>Şifre</label>
        <input name="password" type="password" className="border rounded p-1" />
      </div>

      <button type="submit" className="cursor-pointer">
        Gönder
      </button>
    </form>
  );
};

export default Form;
