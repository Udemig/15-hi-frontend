import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center my-20">
      <Loader2 className="text-blue animate-spin size-7" />
    </div>
  );
};

export default Loader;
