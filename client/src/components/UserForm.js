import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateUserFormObject } from "../actions";
import { updateUserFormUsage } from "../actions";
import { addUser, selectUser } from "../actions";
import RestAPI from "../rest";
import { deleteUser } from "../actions";
let restapi = null;

const UserForm = ({
  user,
  usage,
  handleChange,
  handleUserEditClick,
  handleEditCancelClick,
  handleUserSaveClick,
  handleUserDeleteClick,
}) => (
  <div id="user-form" className="card bg-light" hidden={usage === "none"}>
    <div>
      <div className="card-header">
        <h4>Add or Edit a User</h4>
      </div>
      <form>
        <table className="table">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type={"text"}
                  name={"name"}
                  onChange={handleChange}
                  placeholder={"User name"}
                  value={user.name}
                  disabled={usage === "none" || usage === "view"}
                />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  type={"text"}
                  name={"email"}
                  onChange={handleChange}
                  placeholder={"Email"}
                  value={user.email}
                  disabled={usage === "none" || usage === "view"}
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  type={"text"}
                  name={"password"}
                  onChange={handleChange}
                  placeholder={"password"}
                  value={user.password}
                  disabled={usage === "none" || usage === "view"}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input
          type={"button"}
          value="Delete"
          onClick={(e) => handleUserDeleteClick(e, user)}
          hidden={usage === "none" || usage === "view" || usage === "add"}
        />
        <input
          type={"button"}
          value="Save"
          onClick={(e) => handleUserSaveClick(e, user)}
          hidden={usage === "none" || usage === "view"}
        />
        <input
          type={"button"}
          value="Cancel"
          onClick={(e) => handleEditCancelClick(e, user)}
          hidden={usage === "none" || usage === "view"}
        />
        <input
          type={"button"}
          value="Edit"
          onClick={(e) => handleUserEditClick(e, user)}
          hidden={usage === "none" || usage === "edit" || usage === "add"}
        />
      </form>
    </div>
  </div>
);

UserForm.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  restapi = new RestAPI(state.login.token);
  return {
    user: state.formState.user,
    usage: state.formState.usage,
    appState: state.appState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      const field_name = e.currentTarget.name;
      const field_value = e.currentTarget.value;
      dispatch(updateUserFormObject(field_name, field_value));
    },
    handleUserEditClick: (event, user, usage) => {
      console.log("in UserForm.handleUserEditClick");
      dispatch(updateUserFormUsage("edit", user));
    },
    handleEditCancelClick: (event, user, usage) => {
      console.log("in UserForm.handleEditCancelClick");
      if (usage === "add") {
        dispatch(updateUserFormUsage("none"));
      } else if (usage === "edit") {
        dispatch(updateUserFormUsage("view", user));
      }
    },
    handleUserSaveClick: (event, user, usage) => {
      console.log("in UserForm.handleUserSaveClick");
      dispatch(addUser(user));
      if (usage === "add") {
        dispatch(selectUser(user));
      }
      dispatch(updateUserFormUsage("none"));
      restapi.postUser(dispatch, user);
    },
    handleUserDeleteClick: (event, user) => {
      console.log("in UserForm.handleUserDeleteClick");
      console.log("user: " + JSON.stringify(user));
      dispatch(deleteUser(user));
      dispatch(updateUserFormUsage("none"));
      restapi.deleteUSer(dispatch, user);
    },
  };
};

const VisibleUserForm = connect(mapStateToProps, mapDispatchToProps)(UserForm);

export default VisibleUserForm;
