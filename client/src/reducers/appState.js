const initial = { selectedUserId: "1", selectedUser: {} };

const appState = (state = initial, action, data) => {
  switch (action.type) {
    case "SELECT_USER": {
      let user_copy = Object.assign({}, action.user);
      return Object.assign(
        {},
        { selectedUserId: action.user.id },
        { selectedUser: user_copy }
      );
    }
    case "SELECT_EVENT": {
      let event_copy = Object.assign({}, action.event);
      return Object.assign(
        {},
        { selectedEventId: action.event.id },
        { selectedEvent: event_copy }
      );
    }
    default:
      return state;
  }
};

export default appState;
