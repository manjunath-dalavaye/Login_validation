import React, { useState } from "react";
import "./styles.css";

const App: React.FC = () => {
  const [username, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [jobRole, setJobRole] = useState<string>("");
  const [usernameError, setUserNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [jobRoleError, setJobRoleError] = useState<string>("");

  // Function to validate the username
  const validateUserName = (username: string): boolean => {
    let isUserNameValid = true;
    const nameRegex = /^[a-zA-Z0-9]+$/;

    if (username === "") {
      setUserNameError("Username is required");
      isUserNameValid = false;
    } else if (!nameRegex.test(username)) {
      setUserNameError("Username cannot contain special characters");
      isUserNameValid = false;
    } else {
      setUserNameError("");
    }

    return isUserNameValid;
  };

  // Function to validate the email
  const validateEmail = (email: string): boolean => {
    let isEmailValid = true;
    const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,}$/;

    if (email === "") {
      setEmailError("Email cannot be blank");
      isEmailValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Email address is invalid");
      isEmailValid = false;
    } else {
      setEmailError("");
    }

    return isEmailValid;
  };

  // Function to validate the job role
  const validateJobRole = (jobRole: string): boolean => {
    let isJobRoleValid = true;

    if (jobRole === "developer" || jobRole === "tester") {
      setJobRoleError("");
    } else {
      setJobRoleError("Job role must be 'developer' or 'tester'");
      isJobRoleValid = false;
    }

    return isJobRoleValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isUserNameValid = validateUserName(username);
    const isEmailValid = validateEmail(email);
    const isJobRoleValid = validateJobRole(jobRole);

    // these for know the user info in console
    if (isUserNameValid && isEmailValid && isJobRoleValid) {
      console.log(`Username: ${username}`);
      console.log(`Email: ${email}`);
      console.log(`Job Role: ${jobRole}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
          onBlur={() => validateUserName(username)}
        />
        {usernameError && <span className="error">{usernameError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onBlur={() => validateEmail(email)}
        />
        {emailError && <span className="error">{emailError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="jobrole">Job Role:</label>
        <select
          id="jobrole"
          value={jobRole}
          onChange={(event) => setJobRole(event.target.value)}
        >
          <option value="">Select a job role</option>
          <option value="developer">Developer</option>
          <option value="tester">Tester</option>
         </select>
        {jobRoleError && <span className="error">{jobRoleError}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
