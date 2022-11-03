import User from "../models/user.js";

const dataCleaner = {
  cleanUser: (user) => {
    return {
      id: user.CUSTOMER_ID,
      name: user.CUSTOMER_NAME,
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
      id: feedback.EVENT_ID,
      code: feedback.EVENT_CODE,
      title: feedback.TITLE,
      description: feedback.DESCRIPTION,
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
