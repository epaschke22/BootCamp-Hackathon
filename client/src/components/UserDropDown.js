import React from "react";
import PropTypes from "prop-types";

const UserDropDown = ({ users, selectedUserId, onSelectedUser, usage }) => {
  return (
    <select
      name={"user_id"}
      value={selectedUserId}
      onChange={onSelectedUser}
      disabled={usage === "none" || usage === "view"}
    >
      <option key={-1} value={-1}>
        select
      </option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

UserDropDown.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserDropDown;
