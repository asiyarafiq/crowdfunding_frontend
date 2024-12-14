import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postAddProjectPage from "../api/postAddProjectPage.js";

function AddProjectPageForm() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    defaultvalue: true,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      credentials.title &&
      credentials.description &&
      credentials.goal &&
      credentials.image &&
      credentials.defaultvalue
    ) {
      postAddProjectPage(
        credentials.title,
        credentials.description,
        credentials.goal,
        credentials.image,
        credentials.defaultvalue
      ).then((response) => {
        navigate("/");
      });
    }
  };
  return (
    <form>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          placeholder="Enter title"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          placeholder="Enter Description"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="goal">Goal: </label>
        <input
          type="int"
          id="goal"
          placeholder="EnterGoal Value"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image: </label>
        <input
          type="urlfield"
          id="image"
          placeholder="Enter Image Link"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="defaultvalue">Defaultvalue: </label>
        <input
          type="true"
          id="defaultvalue"
          placeholder="true"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        AddProjectPage
      </button>
    </form>
  );
}

export default AddProjectPageForm;
