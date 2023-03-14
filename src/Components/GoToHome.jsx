import React from "react";
import { useNavigate } from "react-router-dom";

export const GoToHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="btn btn-success w-50 my-4 fw-bold"
      >
        Go To Home
      </button>
    </div>
  );
};
