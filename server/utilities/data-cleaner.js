import User from "../models/user.js";

const dataCleaner = {
  cleanUser: (user) => {
    return {
      id: user.USER_ID,
      name: user.USER_NAME,
      manager_id: user.MANAGER_ID,
      is_manager: user.IS_MANAGER,
      password: user.PASSWORD,
      email: user.EMAIL,
    };
  },

  cleanUsers: (users) => {
    var results = [];
    for (const i in users) {
      results.push(dataCleaner.cleanUser(users[i]));
    }
    return results;
  },

  cleanFeedback: (feedback) => {
    return {
      id: feedback.FEEDBACK_ID,
      manager_id: feedback.MANAGER_ID,
      body_text: feedback.BODY_TEXT,
      reply_text: feedback.REPLY_TEXT,
    };
  },

  cleanAllFeedback: (feedback) => {
    var results = [];
    for (const i in feedback) {
      results.push(dataCleaner.cleanFeedback(feedback[i]));
    }
    return results;
  },
};

export default dataCleaner;
