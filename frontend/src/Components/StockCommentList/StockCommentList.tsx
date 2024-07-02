import { CommentGet } from "../../Models/Comment";
import { v4 as uuidv4 } from "uuid";
import StockCommentListItem from "./StockCommentListItem/StockCommentListItem";

type Props = {
  comments: CommentGet[];
};

const StockCommentList = ({ comments }: Props) => {
  return (
    <>
      {comments
        ? comments.map((comment) => {
            return <StockCommentListItem key={uuidv4()} comment={comment} />;
          })
        : ""}
    </>
  );
};

export default StockCommentList;
