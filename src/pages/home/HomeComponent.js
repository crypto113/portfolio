import React from "react";
import Header from "../../components/header/Header";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import { greeting } from "../../portfolio";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";

import "./HomeComponent.css";

function Home(props) {
  const theme = props.theme;
  const history = useHistory();
  
  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="home-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="greeting-main">
        <div className="greeting-mian-div">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p className="greeting-text-p subTitle" style={{ color: theme.secondaryText }}>
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle1}
                <br />
                {greeting.subTitle2}
                <br />
                {greeting.subTitle3}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button {...styles} className="button" onClick={() => { history.push("/contact"); }}>
                  Contact Me
                  </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
      <Skills theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
