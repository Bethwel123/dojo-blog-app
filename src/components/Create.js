import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    // console.log(blog);
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div>
      <div className="create">
        <h2>Add a New Blog</h2>
        <form>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <textarea
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></textarea>
          <select>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          {!isPending && <button onClick={handleSubmit}>Add Blog</button>}
          {isPending && <button>Adding Blog...</button>}
          <p>{title}</p>
          <p>{body}</p>
          <p>{author}</p>
        </form>
      </div>
    </div>
  );
};

export default Create;
