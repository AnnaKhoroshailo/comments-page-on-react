import "./style.css";
function Comment({ name, text, date }) {
  let days = Math.floor(Math.abs(new Date().getTime() - new Date(date).getTime()) / (1000 * 3600 * 24));
  return (
    <div className="comment">
      <div className="comment__header">
        <div className="comment__name">{name}</div>
        <div>{days ? `${days} Days ago`: "Today"}</div>
      </div>
      <div className="comment__text">{text}</div>
    </div>
  );
}

export default Comment;