import React from "react";
import PropTypes from "prop-types";
import './styles.css'

Header.propTypes = {
  header: PropTypes.array,
};

Header.defaultProps = {
  header: [],
};

function Header(props) {
  const { header } = props;
  return (
    <div id="header">
      <ul id="nav">
        {header.map((element) => (
          <li key={element.id}><a>{element.name}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
