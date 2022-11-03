import React from "react";

const Feedback = ({ onClick, selectedId, feedback }) => {
  return (
    <tr
      className={feedback.id === selectedId ? "selected" : ""}
      onClick={(e) => onClick(e, feedback.id)}
    >
      <td>{feedback.body_text}</td>
      <td>{feedback.reply_text}</td>
    </tr>
  );
};

export default Feedback;
