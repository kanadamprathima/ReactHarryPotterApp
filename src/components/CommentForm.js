// There's a form with inputs for name and comment
// Submitting the form displays the name and comment on the screen
// Submitting a second comment also works
import { useState } from "react";
const CommentForm = (props) => {
  const [name, setName] = useState(" ");
  const [comment, setComment] = useState(" ");
  const [submit, setSubmit] = useState(" ");
  //   const DisplayComment = () => {
  //     return (
  //       <div className="container">
  //         {name} <p>{comment}</p>
  //       </div>
  //     );
  //   };
  return (
    <div>
      <form>
        <h1>Comment section</h1>
        <label>
          Name
          <input
            type="text"
            value={name}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Comment
          <input
            type="text"
            value={comment}
            placeholder="add your comments here"
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <br />
      </form>
      <button onClick={() => props.addcomment(name, comment)}>add</button>
    </div>
  );
};
export default CommentForm;
