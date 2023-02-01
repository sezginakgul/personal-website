import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/14504381/pexels-photo-14504381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Having 4+ years experienced in IT and 1+ an expert front-end
          developer, interested in writing codes, skilled at developing complex
          solutions, creating responsive designs, possessing strong creative
          thinking skills, high energy and integrity.
          <br />
          Ability to create algorithms effectively, and interact positively and
          communicate appropriately with team members. Quickly grasp new
          technologies and concepts to develop innovative and creative solutions
          to problems.
          <br />
          Always eager to learn various technologies, tools and libraries.
          Especially interested in the
          <b>Frontend / Web Development, HTML, CSS, JS, React</b>. Excited to
          learn new things and improve, lifetime student.
        </p>
      </div>
    </div>
  );
};

export default About;
