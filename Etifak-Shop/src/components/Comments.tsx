import React, { useState } from "react";
import CommentsCSS from "./Comments.module.css";
import TextOption from "./TextOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import CommentInput from "./CommentInput";
import Comment from "./Comment";

interface CommentsProps {
  productID: string;
}

const Comments: React.FC<CommentsProps> = ({ productID }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const commentString =
    "Lorem ipsum dolor sit amet. Cum excepturi impedit At adipisci accusamus aut consectetur quidem ea obcaecati molestias 33 galisum galisum aut saepe molestiae. Est minus praesentium et internos alias id maiores architecto est adipisci enim id nemo asperiores et quod magni? Ab enim eveniet eos optio maxime qui provident consectetur At amet fuga. In magni optio et galisum dolor et similique velit hic culpa incidunt.";

  const handleOptionClick = (index: number) => {
    setSelectedOption(index === selectedOption ? null : index); // Toggle selection
  };

  const generateStarOptions = (maxStars: number) => {
    return Array.from({ length: maxStars }, (_, i) => (
      <TextOption
        key={i + 1}
        selected={i + 1 === selectedOption}
        onClick={() => handleOptionClick(i + 1)}
      >
        {Array.from({ length: i + 1 }, (_, j) => (
          <FontAwesomeIcon
            key={j}
            className={CommentsCSS.filterStar}
            icon={solidStar}
          />
        ))}
      </TextOption>
    ));
  };

  // Use the generated star options
  const StarOptions = generateStarOptions(5);

  return (
    <div className={CommentsCSS.container}>
      <div>
        <div className={CommentsCSS.filter}>
          <p className={CommentsCSS.title}>Filter by rate</p>
          <div className={CommentsCSS.starContainer}>{StarOptions}</div>
        </div>
      </div>
      <div className={CommentsCSS.comments}>
        <p className={CommentsCSS.Commentitle}>Comments</p>

        <CommentInput></CommentInput>
        <table className={CommentsCSS.commentsTable}>
          <tbody>
            <tr className={CommentsCSS.commentRow}>
              <td>
                <div className={CommentsCSS.borderDiv}></div>
              </td>
            </tr>
            <tr className={CommentsCSS.commentRow}>
              <td>
                <Comment content={commentString} />
              </td>
            </tr>
            <tr className={CommentsCSS.commentRow}>
              <td>
                <div className={CommentsCSS.borderDiv}></div>
              </td>
            </tr>
            <tr className={CommentsCSS.commentRow}>
              <td>
                <Comment content={commentString} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
