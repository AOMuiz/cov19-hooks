import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [author, setAuthor] = useState("mario");

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label htmlFor="">Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Blog Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>

        <button>Add blog</button>
      </form>
    </div>
  );
};

export default Create;
