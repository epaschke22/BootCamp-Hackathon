import RestAPI from "../rest";

const initial = [
  {
    id: 10,
    name: "Brian",
    manager_id: 100,
    is_manager: false,
    email: "brian@a.com",
  },
  {
    id: 11,
    name: "Scott",
    manager_id: 100,
    is_manager: false,
    email: "scott@a.com",
  },
  {
    id: 12,
    name: "Jeff",
    manager_id: 101,
    is_manager: false,
    email: "jeff@a.com",
  },
];

const users = (state = initial, action, data) => {
  switch (action.type) {
    case "ADD_USER": {
      console.log("in reducer user.ADD_USER");
      let otherusers = state.filter((user) => {
        if (user.id === action.user.id) {
          return false;
        } else {
          return true;
        }
      });
      let newstate = [...otherusers, Object.assign({}, action.user)];
      console.log(
        "in reducer user.ADD_USER, newstate: " + JSON.stringify(newstate)
      );
      return newstate;
    }

    case "DELETE_USER": {
      console.log("in reducer users.DELETE_USER");
      let otherusers = state.filter((user) => {
        if (user.id === action.user.id) {
          return false;
        } else {
          return true;
        }
      });
      let newstate = [...otherusers];
      console.log(
        "in reducer users.DELETE_USER, newstate: " + JSON.stringify(newstate)
      );
      return newstate;
    }

    case "APPLY_USERS_UPDATE": {
      console.log("in reducer users.APPLY_USERS_UPDATE", action.users);
      let newstate = [...action.users];
      return newstate;
    }

    case "GET_USERS": {
      console.log("in reducer users.GET_USERS", state);
      new RestAPI().getUsers(action.dispatch);
      return state;
    }

    default:
      console.log("in reducer user.default");
      return state;
  }
};

export default users;
