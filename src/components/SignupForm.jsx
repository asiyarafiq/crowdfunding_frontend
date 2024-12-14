import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postSignup from "../api/post-Signup";
import LoginForm from "./LoginForm";
import postLogin from "../api/post-login";
function SignupForm() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
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
    if (credentials.username && credentials.password) {
      postSignup(
        credentials.username,
        credentials.password,
        credentials.email,
        credentials.firstname,
        credentials.lastname
      )
        .then((response) => {
          postLogin(username, password, email, firstname, lastname);
        })
        .then((response) => {
          navigate("/");
        });
    }
  };
  return (
    <form>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="firstname">First Name: </label>
        <input
          type="text"
          id="firstname"
          placeholder="Enterfirst name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name: </label>
        <input
          type="text"
          id="lastname"
          placeholder="Enterlast name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          placeholder="EnterEmail"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Signup
      </button>
    </form>
  );
}

export default SignupForm;
