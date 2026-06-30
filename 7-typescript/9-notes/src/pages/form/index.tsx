import { useEffect, useState, type FC, type SubmitEvent } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { MDE_OPTIONS, SELECT_STYLES } from "../../utils/constants";
import ReactSelect from "react-select/creatable";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Check, X } from "lucide-react";
import type { NoteValues } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux";
import { addNote, updateNote } from "../../redux/noteSlice";
import { toast } from "react-toastify";

const Form: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // url'den id parametresine eriş
  const { id } = useParams<{ id: string }>();

  // not verilerini store'dan al
  const { notes } = useAppSelector((store) => store.noteReducer);

  // notların benzersiz etiketlerinden bir dizi oluştur
  const uniqueTags = [...new Set(notes.map((note) => note.tags).flat())];

  // düzenleme modundaysak not bilgilerini state'e aktar
  useEffect(() => {
    if (id) {
      const found = notes.find((note) => note.id == id);
      if (!found) return;
      setTitle(found.title);
      setContent(found.content);
      setSelectedTags(found.tags);
    } else {
      setTitle("");
      setContent("");
      setSelectedTags([]);
    }
  }, [notes, id]);

  // form gönderilince çalışır
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // form verisini nesne formatına getir
    const values: NoteValues = {
      title,
      content,
      tags: selectedTags,
    };

    // yeni not oluşturulacağını slice'a haber ver
    if (id) {
      dispatch(updateNote({ id, noteValue: values }));
    } else {
      dispatch(addNote(values));
    }

    // anasayfaya yönlendirme & bildirim
    navigate("/");
    toast.success("Not oluşturuldu");
  };

  return (
    <div>
      {/* Sayfa Başlığı */}
      <div>
        <h1 className="text-2xl font-bold text-text-primary">{id ? "Notu Düzenle" : "Not Oluştur"}</h1>
        <p className="text-text-secondary">Fikirlerinizi ve notlarınızı kaydedin</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="card p-6 sm:p-8 animate-slide-up mt-6">
        {/* Başlık */}
        <div>
          <label htmlFor="title" className="label">
            Başlık
          </label>
          <input
            type="text"
            id="title"
            placeholder="Not başlığı giriniz"
            className="w-full px-4 py-2.5 bg-card border border-border rounded-md text-text-primary focus:ring-2 focus:ring-primary/30 transition placeholder:text-text-secondary"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* İçerik */}
        <div className="my-6">
          <label htmlFor="content" className="label">
            İçerik
          </label>

          <SimpleMDE
            id="content"
            className="w-full markdown-editor bg-transparent"
            options={MDE_OPTIONS}
            value={content}
            onChange={(value) => setContent(value)}
          />
        </div>

        {/* Etiketler */}
        <div>
          <label htmlFor="tags" className="label">
            Etiketler
          </label>

          <ReactSelect
            isMulti
            required
            styles={SELECT_STYLES}
            placeholder="Etiket Seçiniz"
            options={uniqueTags.map((t) => ({ label: t, value: t }))}
            value={selectedTags.map((t) => ({ label: t, value: t }))}
            onChange={(tags) => setSelectedTags(tags.map((t) => t.value))}
          />
        </div>

        {/* Butonlar */}
        <div className="flex flex-col md:flex-row gap-3 pt-4 border-t border-border">
          <Link to="/" className="form-button">
            <X className="size-4 mr-1.5" />
            İptal
          </Link>

          <button type="submit" className="form-button bg-primary hover:bg-primary-hover">
            <Check className="size-4 mr-1.5" />
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
