import React from "react";
import PropTypes from "prop-types";
import Header from "./Components/Header";
import ImageList from "./Components/TodoList";

FeatureImage.propTypes = {};

function FeatureImage(props) {
  const albumLists = [
    { id: 1, name: "Chicago", thumbnailUrl: "./img/chicago.jpg" },
    { id: 2, name: "Map", thumbnailUrl: "./img/chicago.jpg" },
    { id: 3, name: "Member", thumbnailUrl: "./img/chicago.jpg" },
    { id: 4, name: "place1", thumbnailUrl: "./img/chicago.jpg" },
    { id: 5, name: "place2", thumbnailUrl: "./img/chicago.jpg" },
    { id: 6, name: "place3", thumbnailUrl: "./img/chicago.jpg" },
  ];

  const headInformation = [
    { id: 1, name: "Home" },
    { id: 2, name: "Band" },
    { id: 3, name: "Tour" },
    { id: 4, name: "Contact" },
    { id: 5, name: "More" },
];
  return <div>
    <Header header = {headInformation}></Header>
    <ImageList albumList = {albumLists}></ImageList>
  </div>;
}

export default FeatureImage;
