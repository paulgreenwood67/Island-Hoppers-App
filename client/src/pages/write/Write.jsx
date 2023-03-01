import { useContext, useEffect, useState } from "react";
import "./write.css";
import { Context } from "../../context/Context";
import axios from "axios";

// setting the useStates
export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [categories, setCategories] = useState([]);
  const [category,setCategory] = useState("");

  // useEffect getting the island name on load for the section form.
  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/categories");
     setCategories(res.data)
    };
    getCategories();
  }, []);

  //function to handle the island selection
  const handleCat = (e) => {
    setCategory(e.target.value)
  }

  // function to handle the submission of a new post
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      category
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);

      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
      <div className="writeWrapper">
        {file && (
          <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            
            <input
              type="text"
              className="writeInput"
              placeholder="Title of your Hop"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="formGroup selectDiv">
            <textarea
              className="textInput"
              type="text"
              placeholder="Tell us about your adventures..."
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <label htmlFor="fileInput">
              <i className="addImage">Add image</i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <p className="forget">( Don't forget to select an island! )</p>
            <select onChange={handleCat} className="selectCat">
            <option>Islands</option>
              {categories.map((cat) => (
                <option key={cat._id}>{cat.name}</option>
              ))}
            </select>
          </div>
          <button className="writeBtn" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
