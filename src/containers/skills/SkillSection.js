import React from "react";
import { skills } from "../../portfolio";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import "./Skills.css";

function GetSkillSvg(props) {
  if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  // return <DesignImg theme={props.theme} />;
}

function SkillSection(props) {
  const theme = props.theme;
  return (
    <>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div className="skills-main-div" key={index}>
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>

              <div className="skills-text-div">
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
                <div>
                  {skill.skills.map((skillSentence, key) => {
                    return (
                      <p
                        key={key}
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="skills-main-div" key={index}>
              <div className="skills-text-div">
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
                <div>
                  {skill.skills.map((skillSentence, key) => {
                    return (
                      <p
                        key={key}
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default SkillSection;
