import { MoveLeft, Pencil, Trash } from "lucide-react";
import type { FC } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux";
import NotFound from "./not-found";
import ReactMarkdown from "react-markdown";
import { deleteNote } from "../../redux/noteSlice";
import { toast } from "react-toastify";

const Detail: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // url'den id parametresini al
  const { id } = useParams<{ id: string }>();

  // store'dan note'ları al
  const { notes } = useAppSelector((store) => store.noteReducer);

  // id'ye göre note'u bul
  const note = notes.find((note) => note.id == id);

  // eğer not buluamadıysa
  if (!note) return <NotFound />;

  // not silme fonksiyon
  const handleDelete = () => {
    dispatch(deleteNote(note.id));
    navigate("/");
    toast.warning("Not kaldırıldı");
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Üst Kısım */}
      <div className="flex justify-between sm:items-center gap-4 animate-fade-in">
        <div className="flex items-center">
          <Link
            to="/"
            className="p-2 rounded-full text-text-secondary hover:text-text-primary transition-all duration-300"
          >
            <MoveLeft className="size-6" />
          </Link>

          <h1 className="text-2xl font-bold text-text-primary">Not Detayı</h1>
        </div>

        <div className="flex gap-3">
          <Link
            to={`/edit/${id}`}
            className="flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover transition"
          >
            <Pencil className="size-4 mr-1.5" />
            Düzenle
          </Link>

          <button
            onClick={handleDelete}
            className="flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-white bg-error hover:bg-error/80 transition-all duration-300"
          >
            <Trash className="size-4 mr-1.5" />
            Sil
          </button>
        </div>
      </div>

      {/* İçerik */}
      <div className="card p-6 sm:p-8 animate-slide-up">
        {/* Başlık */}
        <h1 className="text-3xl font-bold mb-6 text-text-primary">{note.title}</h1>

        {/* Etiketler */}
        {note.tags.map((tag, index) => (
          <div key={index} className="bg-primary text-white inline-flex rounded-full text-sm py-1 px-3 me-3">
            {tag}
          </div>
        ))}
      </div>

      {/* İçerik */}
      <div className="border-t border-border pt-3 mt-6 prose">
        <ReactMarkdown>{note.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Detail;
