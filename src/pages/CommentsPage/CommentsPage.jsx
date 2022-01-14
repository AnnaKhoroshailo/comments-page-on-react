import './App.css';
import Comment from "./components/Comment";
import { asyncGetComments } from "./actions";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const comments = useSelector((state) => state.comments);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetComments(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="container">
      {comments.map((comment, i) => (
        <Comment name={comment.name} text={comment.text} date={comment.updated_at} key={i} />
      ))}
    </div>
  );
}

export default App;
