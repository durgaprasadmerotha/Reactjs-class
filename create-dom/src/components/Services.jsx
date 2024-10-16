import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/");
    // navigate(-1);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="px-4 py-2 rounded bg-black text-white"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Services;
