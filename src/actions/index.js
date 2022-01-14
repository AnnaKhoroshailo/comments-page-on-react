import { API } from "../constants/api.js";
import swal from 'sweetalert';

export const asyncGetComments = (currentPage) => (dispatсh) => {
  fetch(`${API}?page=${currentPage}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    dispatсh({ type: "FETCH_LIST_COMMENTS", payload: data });
  });
};

export const asyncAddComment = (currentPage, comment) => (dispatсh) => {
  fetch(`${API}`, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
  .then((response) => {
    return response.json();
  })
  .then(() => {
    swal("Success!", "Your comment added succesfully!", "success");
    dispatсh(asyncGetComments(currentPage));
  });
};

export const asyncMoreComments = (currentPage) => (dispatсh) => {
  fetch(`${API}?page=${currentPage}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    dispatсh({ type: "MORE_COMMENTS", payload: data });
  });
};
  