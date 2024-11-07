import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleDelete}>delete</button>
          </article>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
