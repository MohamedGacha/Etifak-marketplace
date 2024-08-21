import React, { useState } from "react";
import CommentInputCSS from "./CommentInput.module.css";
import userAvatar from "../assets/user_avatar.jpg";
import StarRating from "./StarRating";

const CommentInput = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setComment("");
  };

  return (
    <div className={CommentInputCSS.container}>
      <div className={CommentInputCSS.profileDiv}>
        <img
          src={userAvatar}
          alt="User Avatar"
          className={CommentInputCSS.profileImage}
        />
        <span className={CommentInputCSS.youText}>You</span>
      </div>
      <div className={CommentInputCSS.textfieldDiv}>
        <textarea
          placeholder="Type your comment here."
          className={"form-control " + CommentInputCSS.textareaFixedSize}
          aria-label="With textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div className={CommentInputCSS.submitDiv}>
        <StarRating className={CommentInputCSS.rating}>{2}</StarRating>
        <input
          className={"btn btn-primary " + CommentInputCSS.submitBtn}
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CommentInput;
