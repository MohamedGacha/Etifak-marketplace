import React from "react";
import CommentInputCSS from "./CommentInput.module.css";
import CommentCSS from "./Comment.module.css";
import userAvatar from "../assets/user_avatar.jpg";
import StarRating from "./StarRating";

interface CommentCSSProps {
  userName?: string;
  date?: string;
  content?: string;
  role?: string;
}

const Comment = ({ userName, date, content, role }: CommentCSSProps) => {
  return (
    <div className={CommentCSS.container}>
      <div className={CommentCSS.commentHeader}>
        <div className={CommentCSS.avatarDiv}>
          <img
            src={userAvatar}
            alt="User Avatar"
            className={CommentInputCSS.profileImage}
          />
        </div>
        <div className={CommentCSS.userInfo}>
          <span className={CommentCSS.matiere}>Matiere</span>
          <span className={CommentCSS.name}>Jane Doe</span>
        </div>
        <div className={CommentCSS.ratingDiv}>
          <StarRating>{5}</StarRating>
        </div>
      </div>
      <div className={CommentCSS.commentBody}>{content}</div>
      <div className={CommentCSS.commentfooter}>
        <div className={CommentCSS.date}>07/22/2024</div>
      </div>
    </div>
  );
};

export default Comment;
