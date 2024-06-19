import React from "react";

const About = () => {
  return (
    <div className="aboutpage">
      <h1>About Our Money Calculator</h1>
      <p>
        This app allows users to calculate amounts using different denominations
        of currency. It features input fields for denominations like 2000, 500,
        200, 100, 50, 20, and 10 rupee notes, dynamically updating the total
        amount as quantities are adjusted. Users can save their calculations
        with timestamps to a history list and delete entries as needed. The app
        employs a straightforward and responsive design suitable for managing
        currency calculations effectively.
      </p>
    </div>
  );
};

export default About;
