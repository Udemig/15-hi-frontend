import { SquareCheck, SquareX } from "lucide-react";
import type { FC } from "react";

interface Props {
  availabilty: boolean;
}

const Status: FC<Props> = ({ availabilty }) => {
  return (
    <div className={`border border-zinc-200 p-1 rounded-md ${availabilty ? "bg-green-100" : "bg-red-100"}`}>
      {availabilty ? (
        <SquareCheck className="text-green-500 size-5 md:size-6" />
      ) : (
        <SquareX className="text-red-500 size-5 md:size-6" />
      )}
    </div>
  );
};

export default Status;
