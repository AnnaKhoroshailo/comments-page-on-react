import "./style.css";
function Button(props) {
  let btnClass = "btn";
  if (props.disabled) btnClass += " btn--disabled";
  if (props.active) btnClass += " btn--active";
  if (props.page) btnClass += " btn--page";
  if (props.arrow) btnClass += " btn--arrow";
  return (
    <button
      type={props.submit ? "submit" : "button"}
      className={btnClass}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
}

export default Button;