import React from "react";
import "./Footer.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul>
          <li>No &copy; copyright issues.</li>
          <li>Feel free to copy. If you need any help, ping me ! </li>
          <li className="flexbetween">
            <a href="https://www.linkedin.com/in/pranay-singhania/" target="_blank">
              <LinkedInIcon />
              &nbsp;
            </a>
            <a href="https://github.com/Pranay-Singhania" target="_blank">
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
