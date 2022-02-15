import React from "react";
import "./Certifications.css";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

function Certifications(props) {
  const theme = props.theme;
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert, key) => {
          return <CertificationCard key={key} certificate={cert} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Certifications;
