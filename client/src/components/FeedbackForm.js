import React, { useState, useEffect } from "react";

const FeedbackForm = (props) => {
  //   const [feedbackText, setFeedbackText] =useState();
  const [feedbackText, setFeedbackText] = useState("");
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
    e.preventDefault();
    console.log(e);
    let data = { body_text: feedbackText, manager_id: props.currentManagerId };
    let body = JSON.stringify(data);
    let headers = new Headers({ "Content-Type": "application/json" });
    let myInit = { method: "POST", body: body, headers: headers, mode: "cors" };

    let saveClick = fetch("/api/feedback", myInit);
    saveClick.then((response) => {
      return response.text();
    });
    // .then(function (text) {
    //   let response = JSON.parse(text);
    //   console.log(response);
    // });
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
                <>
                  <tr>
                    <td>Submit your feedback/questions:</td>
                  </tr>
                  <tr>
                    <td>
                      <textarea
                        style={{ height: "150px", width: "250px" }}
                        name="body_text"
                        placeholder="Please be constructive and nice."
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type={"button"}
                        className="btn btn-primary"
                        value="Submit"
                        onClick={(e) =>
                          handleFeedbackSubmitClick(e, feedbackText)
                        }
                      />
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  <tr>
                    <td>Reply to feedback or questions:</td>
                  </tr>
                  <tr>
                    <td>
                      <textarea
                        style={{ height: "150px", width: "250px" }}
                        name="reply_text"
                        placeholder="Please be constructive and nice."
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type={"button"}
                        className="btn btn-primary"
                        value="Submit"
                        onClick={(e) =>
                          handleFeedbackReplyClick(e, feedbackText)
                        }
                      />
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
