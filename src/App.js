import './App.css';
import Comment from "./components/Comment";
import Pagination from "./components/Pagination";
import Button from "./components/Button";
import Form from "./components/Form";

import { asyncGetComments } from "./actions";
import { asyncMoreComments } from "./actions";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const comments = useSelector((state) => state.comments.data);
  const currentPage = useSelector((state) => state.comments.current_page);
  const lastPage = useSelector((state) => state.comments.last_page);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!comments) dispatch(asyncGetComments(currentPage));
  }, [comments, dispatch, currentPage]);

  function handleShowMore(currentPage) {
    dispatch(asyncMoreComments(currentPage));
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Comments</h1>
        <Form />
        {comments && comments.map((comment, i) => (
          <Comment name={comment.name} text={comment.text} date={comment.updated_at} key={i} />
        ))}
        <div className="nav">
          <Button disabled={currentPage===lastPage} handleClick={() => handleShowMore(currentPage+1)}>Read more</Button>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
