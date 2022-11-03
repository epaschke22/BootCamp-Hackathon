/* Login Actions */
export const updateLoginFormObject = (field_name, field_value) => {
  return {
    type: "UPDATE_LOGIN_FORM_OBJECT",
    field_name: field_name,
    field_value: field_value,
  };
};

export const setRegistrationMode = () => {
  return {
    type: "SET_REGISTRATION_MODE",
  };
};

export const registerUser = (dispatch, username, password, email) => {
  return {
    type: "REGISTER_USER",
    dispatch,
    username,
    password,
    email,
  };
};

export const loginToApp = (
  dispatch,
  username,
  password,
  loginstate,
  userId
) => {
  return {
    type: "LOGIN_TO_APP",
    dispatch,
    username,
    password,
    loginstate,
    userId,
  };
};

export const logOut = (dispatch) => {
  return {
    type: "LOG_OUT",
    dispatch,
  };
};

export const loginSucceeded = () => {
  return {
    type: "LOGIN_SUCCESS",
  };
};

export const loginFailed = () => {
  return {
    type: "LOGIN_FAILED",
  };
};

/* Feedback ACTIONS */
export const applyFeedbackUpdate = (feedback) => {
  return {
    type: "APPLY_FEEDBACK_UPDATE",
    feedback,
  };
};

export const selectFeedback = (feedback) => {
  return {
    type: "SELECT_FEEDBACK",
    feedback,
  };
};

export const addFeedback = (feedback) => {
  return {
    type: "ADD_FEEDBACK",
    feedback,
  };
};

export const getFeedback = (dispatch) => {
  return {
    type: "GET_FEEDBACK",
    dispatch,
  };
};

export const deleteFeedback = (feedback) => {
  return {
    type: "DELETE_FEEDBACK",
    feedback,
  };
};

export const addFeedbackInit = (feedback) => {
  return {
    type: "ADD_FEEDBACK_INIT",
    feedback,
  };
};

export const updateFeedbackFormObject = (field_name, field_value) => {
  return {
    type: "UPDATE_FEEDBACK_FORM_OBJECT",
    field_name: field_name,
    field_value: field_value,
  };
};

// accepted values for usage: 'view', 'add', 'update'
export const updateFeedbackFormUsage = (usage, feedback) => {
  return {
    type: "UPDATE_FEEDBACK_FORM_USAGE",
    usage: usage,
    event: feedback,
  };
};

/* User ACTIONS */
export const applyUsersUpdate = (users) => {
  return {
    type: "APPLY_USERS_UPDATE",
    users,
  };
};

export const selectUser = (user) => {
  return {
    type: "SELECT_USER",
    user,
  };
};

export const addUser = (user) => {
  return {
    type: "ADD_USER",
    user,
  };
};

export const getUsers = (dispatch) => {
  return {
    type: "GET_USERS",
    dispatch,
  };
};

export const deleteUser = (user) => {
  return {
    type: "DELETE_USER",
    user,
  };
};

export const addUserInit = (user) => {
  return {
    type: "ADD_USER_INIT",
    user,
  };
};

export const updateUserFormObject = (field_name, field_value) => {
  return {
    type: "UPDATE_USER_FORM_OBJECT",
    field_name: field_name,
    field_value: field_value,
  };
};

// accepted values for usage: 'view', 'add', 'update'
export const updateUserFormUsage = (usage, user) => {
  return {
    type: "UPDATE_USER_FORM_USAGE",
    usage: usage,
    user: user,
  };
};
