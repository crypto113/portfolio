import React from "react";
import SkillSection from "./SkillSection";
import "./Skills.css";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
          <h1 className="skills-header" style={{ color: theme.text }}>
            Here's what I do
          </h1>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
