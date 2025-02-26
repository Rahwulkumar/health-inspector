import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <section id = "team"className="team">
      <h2>Meet Our Team</h2>
      <p>We are a group of passionate professionals committed to making ingredient transparency accessible to everyone.</p>
      
      <div className="team-container">
        <div className="team-member">
          <h3>Alwin Jaison</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <h3>Rahul Kumar</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-member">
          <h3>Rajesh Kanna Sir</h3>
          <p>Nutrition Expert</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
