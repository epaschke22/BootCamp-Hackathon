import React from "react";
import PropTypes from "prop-types";

const User = ({ onClick, selectedId, user }) => {
  return (
    <tr
      className={user.id === selectedId ? "selected" : ""}
      onClick={(e) => onClick(e, user.id)}
    >
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  );
};

User.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedId: PropTypes.number,
  user: PropTypes.object.isRequired,
};

export default User;
