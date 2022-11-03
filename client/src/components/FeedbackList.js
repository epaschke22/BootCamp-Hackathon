import React from "react";

// import Feedback from "./Feedback";

const FeedbackList = (props) => {
  return (
    <div id="feedback-list" className="card bg-light">
      <h4 className="card-header">List of Feedback/Questions</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Body_Text</th>
            <th>Reply_Text</th>
          </tr>
        </thead>
        <tbody>
          {/* {this.props.allfeedback.map((feedback) => (
            <Feedback
              key={feedback.id}
              feedback={feedback}
              selectedId={this.props.appState.selectedId}
              onClick={() => this.props.onFeedbackClick(feedback)}
            />
          ))} */}
        </tbody>
      </table>
      <hr></hr>
      <p style={{ paddingLeft: "10px" }}>
        <input
          style={{ width: "fit-content" }}
          className="btn btn-primary"
          type={"button"}
          //   onClick={this.props.handleNewFeedbackClick}
          value="New Feedback"
        />
      </p>
    </div>
  );
};

export default FeedbackList;
