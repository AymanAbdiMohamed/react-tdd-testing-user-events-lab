import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (interest) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm Ayman</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />

      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <fieldset>
            <legend>Select your interests:</legend>
            <label>
              <input
                type="checkbox"
                checked={interests.includes("Coding")}
                onChange={() => handleCheckboxChange("Coding")}
              />
              Coding
            </label>
            <label>
              <input
                type="checkbox"
                checked={interests.includes("Design")}
                onChange={() => handleCheckboxChange("Design")}
              />
              Design
            </label>
            <label>
              <input
                type="checkbox"
                checked={interests.includes("Music")}
                onChange={() => handleCheckboxChange("Music")}
              />
              Music
            </label>
          </fieldset>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Thank you for subscribing!</p>
      )}
    </main>
  );
}

export default App;
