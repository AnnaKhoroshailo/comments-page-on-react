import "./style.css";
import Button from "../Button";

import { asyncAddComment } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

import { useFormik } from "formik";
import * as Yup from "yup";

function Form() {
  const currentPage = useSelector((state) => state.comments.current_page);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      text: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().typeError("Must be a string").required("Required!"),
      text: Yup.string().typeError("Must be a string").required("Required!"),
    }),
    onSubmit: (values, {resetForm}) => {
      resetForm({values: ""});
      dispatch(asyncAddComment(currentPage, values));
    },
  });
  return (
    <form className="adding-form" onSubmit={formik.handleSubmit}>
      <div>
        <input  
          placeholder="Name"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          className="adding-form__field"
        />
        {formik.errors.name && formik.touched.name && (
          <p className="adding-form__error">{formik.errors.name}</p>
        )}
      </div>
      <div>
        <textarea  
          placeholder="Write a review"
          type="text"
          name="text"
          value={formik.values.text}
          onChange={formik.handleChange}
          className="adding-form__field adding-form__field--comment"
        />
        {formik.errors.text && formik.touched.text && (
          <p className="adding-form__error">{formik.errors.text}</p>
        )}
      </div>
      <Button submit>Post</Button>
    </form>
  );
}

export default Form;