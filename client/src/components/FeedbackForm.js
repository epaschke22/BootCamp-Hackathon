import React, { useState, useEffect } from "react";

const FeedbackForm = (props) => {
  const [user, setUser] = useState();
  //   const [feedbackText, setFeedbackText] =useState();
  let feedbackText = "";
  /* USER REQUESTS */

  //   useEffect(() => {
  //     var myInit = { method: "GET", mode: "cors" };

  //     let promise = fetch(`/api/users/${userId}`, myInit);
  //     promise
  //       .then((response) => {
  //         return response.text();
  //       })
  //       .then(function (text) {
  //         console.log("getUsers Request successful: ", text);
  //         let response = JSON.parse(text);
  //         setUser(response);
  //       });
  //   }, [userId]);

  function handleFeedbackSubmitClick(e, feedback) {
    console.log(e);
    let myInit = { method: "POST", mode: "cors" };
    let data = { comment: e.form.comment };
    let saveClick = fetch(``, myInit, data);
    saveClick
      .then((response) => {
        return response.text();
      })
      .then(function (text) {
        let response = JSON.parse(text);
      });
  }
  function handleFeedbackReplyClick(e, feedback) {
    console.log(e);
    let myInit = { method: "POST", mode: "cors" };
    let data = { comment: e.form.comment };
    let saveClick = fetch(``, myInit, data);
    saveClick
      .then((response) => {
        return response.text();
      })
      .then(function (text) {
        let response = JSON.parse(text);
      });
  }

  return (
    <div id="feedback-form" className="card bg-light">
      <div>
        <h4 className="card-header">Add Feedback or Questions</h4>
        <form>
          <table className="table">
            <tbody>
              {!props.isManager ? (
                <tr>
                  <td>Submit your feedback/questions:</td>
                  <td>
                    <input
                      type={"text"}
                      name={"body_text"}
                      //   onChange={handleChange}
                      placeholder={"Please be constructive and nice."}
                      //   value={feedbackText}
                    />
                  </td>
                  <td>
                    <input
                      type={"button"}
                      value="Submit"
                      onClick={(e) =>
                        handleFeedbackSubmitClick(e, feedbackText)
                      }
                    />
                  </td>
                </tr>
              ) : (
                <tr>
                  <td>Reply to feedback or questions:</td>
                  <td>
                    <input
                      type={"text"}
                      name={"reply_text"}
                      //   onChange={handleChange}
                      placeholder={"Please be constructive and nice."}
                      //   value={feedbackText}
                    />
                  </td>
                  <td>
                    <input
                      type={"button"}
                      value="Submit"
                      onClick={(e) => handleFeedbackReplyClick(e, feedbackText)}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
