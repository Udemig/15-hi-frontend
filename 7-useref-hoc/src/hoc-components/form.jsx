import Field from "./field";

const Form = () => {
  return (
    <div>
      <h3>Örnek-5: HOC - Form Kullanımı</h3>

      <form>
        <h3>HOC Kullanmadan</h3>

        <div>
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
          <span className="form-text">uyarı mesajı</span>
        </div>

        <div>
          <label className="form-label">Kategori</label>
          <select className="form-control">
            <option>1</option>
            <option>2</option>
          </select>
          <span className="form-text">uyarı mesajı</span>
        </div>

        <div>
          <label className="form-label">Açıklama</label>
          <textarea className="form-control" />
          <span className="form-text">uyarı mesajı</span>
        </div>
      </form>

      <hr />

      <h3>HOC Kullanarak</h3>

      <Field label="Email">
        <input type="email" className="form-control" />
      </Field>

      <Field label="Kategori">
        <select className="form-control">
          <option>1</option>
          <option>2</option>
        </select>
      </Field>

      <Field label="Açıklama">
        <textarea className="form-control"></textarea>
      </Field>
    </div>
  );
};

export default Form;
