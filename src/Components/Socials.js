import React from "react";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = ({ currentColor }) => {
  return (
    <div className="socials">
      <a
        id="tweet-quote"
        href="https://twitter.com/intent/tweet"
        style={{ backgroundColor: currentColor }}
      >
        <FontAwesomeIcon className="socialIcon" icon={faTwitter} />
      </a>
      <a
        href="https://www.tumblr.com/widgets/share/tool"
        id="tumbler-quote"
        style={{ backgroundColor: currentColor }}
      >
        <FontAwesomeIcon className="socialIcon" icon={faTumblr} />
      </a>
    </div>
  );
};

export default Socials;
