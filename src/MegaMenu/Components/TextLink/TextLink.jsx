import React from "react";

const TextLink = ({ name, link, className, style }) => {
  return (
    <a className={className} href={link} style={style}>
      {name}
    </a>
  );
};

export default TextLink;
