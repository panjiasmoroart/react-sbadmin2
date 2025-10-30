import React, { useState, useEffect } from "react";

const CardBasic = ({ title, children }) => {
  const [cardTitle, setCardTitle] = useState("");

  useEffect(() => {
    setCardTitle(title ? title : "Basic Card Example");
  }, [title]);

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">{cardTitle}</h6>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardBasic;
