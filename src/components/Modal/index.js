import "./_index.scss";

import React from "react";

const index = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default index;
