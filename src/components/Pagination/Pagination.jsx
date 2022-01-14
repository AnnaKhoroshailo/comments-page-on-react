import "./style.css";
import Button from "../Button";

import { asyncGetComments } from "../../actions";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Pagination(props) {
  const links = useSelector((state) => state.comments.links);
  const currentPage = useSelector((state) => state.comments.current_page);
  const lastPage = useSelector((state) => state.comments.last_page);
  const firstPage = useSelector((state) => state.comments.from);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChangePage(currentPage) {
    if(currentPage !== lastPage+1 && currentPage !== firstPage-1) {
      dispatch(asyncGetComments(currentPage));
      navigate(`/comments/${currentPage}`)
    }
  }
  return (
    <div className="pages">
      {links && links.map((link, i) => {
        if (typeof link.label === 'number') 
          return <Button page active={link.active} handleClick={() => handleChangePage(link.label)} key={i}>{link.label}</Button> 
        else if (link.label.indexOf("Next")!==-1) 
          return <Button arrow handleClick={() => handleChangePage(currentPage+1)} key={i}>{Array.from(new DOMParser().parseFromString(link.label, "text/html").getElementsByTagName("body"))[0].textContent}</Button> 
        else if (link.label.indexOf("Prev")!==-1) 
          return <Button arrow handleClick={() => handleChangePage(currentPage-1)} key={i}>{Array.from(new DOMParser().parseFromString(link.label, "text/html").getElementsByTagName("body"))[0].textContent}</Button> 
        else return <span key={i}>{link.label}</span>
      })}
    </div>
  );
}

export default Pagination;