import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="http://linkden.com" target="_blank" rel="noopener noreferrer">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="http://linkden.com" target="_blank" rel="noopener noreferrer">
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
