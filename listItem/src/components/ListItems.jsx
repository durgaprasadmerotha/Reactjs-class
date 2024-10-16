import { useLocation, useNavigate, useParams } from "react-router-dom";

const ListItems = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  return (
    <div>
      <h1>{params.i}</h1>
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 rounded-md bg-black text-white"
      >
        Back
      </button>
    </div>
  );
};

export default ListItems;
