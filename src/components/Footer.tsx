import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="icon-wrap flex row">
        <a href="https://www.linkedin.com/in/123sunil/">
          <div className="flex icon">
            <i className="mdi mdi-linkedin"></i>
          </div>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100005628792861">
          <div className="flex icon">
            <i className="mdi mdi-facebook"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/_om_rudra_/">
          <div className="flex icon">
            <i className="mdi mdi-instagram"></i>
          </div>
        </a>
        <a href="https://github.com/SunilKuYadav">
          <div className="flex icon">
            <i className="mdi mdi-github"></i>
          </div>
        </a>
      </div>
      <div className="info-box">
        <div className="footnote">
          SUNIL KUMAR YADAV{" "}
          <span className="highlight">
            &copy;2022-{new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
