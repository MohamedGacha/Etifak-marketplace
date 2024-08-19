import React from "react";
import LikeCSS from "./Like.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

interface LikeProps {
  onLike: () => void;
  liked: boolean;
  classNamePos?: string;
}

const Like = ({ onLike, liked, classNamePos }: LikeProps) => {
  return (
    <button
      type="button"
      onClick={onLike}
      className={LikeCSS.likeButton + " " + classNamePos}
    >
      {liked ? (
        <FontAwesomeIcon
          icon={solidHeart}
          className={LikeCSS.solidHeart + " " + LikeCSS.likeIcon}
        />
      ) : (
        <FontAwesomeIcon
          icon={regularHeart}
          className={LikeCSS.regularHeart + " " + LikeCSS.likeIcon}
        />
      )}
    </button>
  );
};

export default Like;
