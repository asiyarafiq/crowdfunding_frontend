import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import postpledge from "../api/post-pledge.js";

// import AddPledgePageForm from "../api/post-login.js";
import { useAuth } from "../hooks/use-auth.js";
function AddPledgePageForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [credentials, setCredentials] = useState({
    amount: "",
    comment: "",
    anonymous: "off",
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
    if (credentials.amount && credentials.comment) {
      postpledge(
        credentials.amount,
        credentials.comment,
        credentials.anonymous,
        id
      ).then((response) => {
        window.localStorage.setItem("token", response.token);

        navigate("/");
      });
    }
  };
  return (
    <form>
      <div>
        <label htmlFor="amount">amount:</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comment">comment:</label>
        <input
          type="text"
          id="comment"
          placeholder="Enter comments"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="anonymous">anonymous:</label>
        <input
          type="checkbox"
          id="anonymous"
          placeholder="True/False"
          onChange={handleChange}
        />
      </div>

      <button type="submit" onClick={handleSubmit}>
        createpledge
      </button>
    </form>
  );
}

export default AddPledgePageForm;
