import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import User from "./User";
import { selectUser, updateUserFormUsage, getUsers } from "../actions";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    console.log("in EventList: " + JSON.stringify(this.props.events));
  }

  componentDidMount() {
    if (!this.props.fetched) {
      this.props.fetchRules(this.props.fetched);
    }
    console.log("mount it!");
  }

  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };

  render() {
    return (
      <div id="user-list" className="card bg-light">
        <h4 className="card-header">List of Users</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => (
              <User
                key={user.id}
                user={user}
                selectedId={this.props.appState.selectedId}
                onClick={() => this.props.onUserClick(user)}
              />
            ))}
          </tbody>
        </table>
        <hr></hr>
        <p style={{ paddingLeft: "10px" }}>
          <input
            style={{ width: "fit-content" }}
            className="btn btn-primary"
            type={"button"}
            onClick={this.props.handleNewUserClick}
            value="New User"
          />
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    appState: state.appState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRules: (fetched) => {
      console.log("in UserList.fetchRules:");
      dispatch(getUsers(dispatch));
      fetched = true;
    },
    onUserClick: (user) => {
      console.log("in UserList.onUserClick:" + JSON.stringify(user));
      dispatch(selectUser(user));
      dispatch(updateUserFormUsage("view", user));
    },
    handleNewUserClick: () => {
      console.log("in UserList.handleNewUserClick:");
      dispatch(updateUserFormUsage("add"));
      dispatch(selectUser(-1));
    },
  };
};

const VisibleUserList = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default VisibleUserList;
