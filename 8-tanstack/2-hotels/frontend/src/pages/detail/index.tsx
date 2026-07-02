import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetPlace } from "../../service/hooks";
import { ArrowLeft } from "lucide-react";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Images from "../../components/detail/images";
import Info from "../../components/detail/info";
import DeleteButton from "../../components/detail/delete-button";

const Detail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, data, refetch } = useGetPlace(id);

  return (
    <div>
      <div className="flex mb-5">
        <Link to="/" className="border border-zinc-200 p-2 rounded-md hover:bg-zinc-200">
          <ArrowLeft />
        </Link>
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error.message} refetch={refetch} />
      ) : (
        data && (
          <>
            <Images image={data.image_url} />
            <Info place={data} />
            <DeleteButton id={data.id} />
          </>
        )
      )}
    </div>
  );
};

export default Detail;
