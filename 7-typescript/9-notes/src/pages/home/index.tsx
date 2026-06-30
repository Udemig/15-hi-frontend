import { useState, type FC } from "react";
import { useAppSelector } from "../../redux";
import List from "../../components/home/list";
import Total from "../../components/home/total";
import Filter from "../../components/home/filter";

const Home: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const { notes } = useAppSelector((store) => store.noteReducer);

  // seçili title ve etiketlere göre notları filtrele
  const filtredNotes = notes.filter((note) => {
    // başlık filtrelemesi
    const input = title.trim().toLowerCase();
    const titleFilter = note.title.toLowerCase().includes(input);

    // etiket filtrelemesi
    const tagsFilter = tags.every((t) => note.tags.includes(t));

    return titleFilter && tagsFilter;
  });

  return (
    <div>
      <Filter setTitle={setTitle} setTags={setTags} />

      <List notes={filtredNotes} />

      <Total resultCount={filtredNotes.length} totalCount={notes.length} />
    </div>
  );
};

export default Home;
