import api from "../api";

const Form = ({ addTodo }) => {
  // form gönderilince çalışır
  const handleSubmit = (e) => {
    // sayfa yenilenmesi engelle
    e.preventDefault();

    // başlık ve kategori inputlarındaki verilere eriş
    // console.dir: elementin js dom'daki versiyonu console'a yazar
    const title = e.target[0].value;
    const category = e.target[1].value;

    // api'a gönderilecek yeni todo nesnesini hazırla
    const newTodo = {
      title,
      category,
      date: Date.now(),
    };

    // api'a yeni todo oluşturmak için istek at
    api
      .post("/todos", newTodo)
      // api isteği başarılı olursa state'i güncelle
      .then((res) => addTodo(res.data));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Yeni Öğe Ekle</h2>

      <div className="form-group">
        <label>Başlık</label>
        <input type="text" required />
      </div>

      <div className="form-group">
        <label>Kategori</label>
        <select>
          <option value="iş">İş</option>
          <option value="spor">Spor</option>
          <option value="alışveriş">Alışveriş</option>
          <option value="finans">Finans</option>
          <option value="sosyal">Sosyal</option>
          <option value="kişisel gelişim">Kişisel Gelişim</option>
        </select>
      </div>

      <div className="btn-group">
        <button type="submit">Gönder</button>
      </div>
    </form>
  );
};

export default Form;
