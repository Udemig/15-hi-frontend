import type { FC } from "react";
import type { Note } from "../../types";
import Card from "./card";

interface Props {
  notes: Note[];
}

const List: FC<Props> = ({ notes }) => {
  return notes.length === 0 ? (
    <div className="flex flex-col items-center my-40">
      <h1 className="text-xl font-bold text-primary">Notlarınız bulunamadı</h1>
      <p className="text-text-secondary mb-6">Notunuzu ekleyerek başlayın ve fikirlenizi kaydedin</p>
    </div>
  ) : (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <Card key={note.id} note={note} />
      ))}
    </div>
  );
};

export default List;
