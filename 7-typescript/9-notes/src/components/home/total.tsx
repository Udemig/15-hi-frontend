import type { FC } from "react";

interface Props {
  resultCount: number;
  totalCount: number;
}

const Total: FC<Props> = ({ resultCount, totalCount }) => {
  return (
    <div className="mt-8 text-text-secondary text-sm flex  justify-between">
      <div>
        <span className="text-text-primary">{resultCount}</span>
        <span> not gösteriliyor toplam </span>
        <span className="text-text-primary">({totalCount})</span>
      </div>
    </div>
  );
};

export default Total;
