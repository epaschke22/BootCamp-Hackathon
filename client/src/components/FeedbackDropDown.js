import React from "react";
import PropTypes from "prop-types";

const FeedbackDropDown = ({
  allfeedback,
  selectedFeedbackId,
  onSelectedFeedback,
  usage,
}) => {
  return (
    <select
      name={"feedback_id"}
      value={selectedFeedbackId}
      onChange={onSelectedFeedback}
      disabled={usage === "none" || usage === "view"}
    >
      <option key={-1} value={-1}>
        select
      </option>
      {allfeedback.map((feedback) => (
        <option key={feedback.id} value={feedback.id}>
          {feedback.title}
        </option>
      ))}
    </select>
  );
};

FeedbackDropDown.propTypes = {
  allfeedback: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FeedbackDropDown;
