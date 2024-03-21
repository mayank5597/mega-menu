import React from "react";
// Importing components
import TextLink from "../Components/TextLink/TextLink";
import CustomMenuItem from "../Components/CustomMenuItem/CustomMenuItem";
import Serachable from "../Components/Searchable/Serachable";
// Importing constants
import { DUMMY_DATA } from "../MegaMenu.constants";
// Importing styles
import styles from "../MegaMenu.module.css";

// Custom hook for managing the mega menu
const useMegaMenu = () => {
  // Destructuring left, center, and right parts of the menu from DUMMY_DATA
  const { leftPart, centerPart, rightPart } = DUMMY_DATA;

  // Extracting keys from each part to arrays
  const leftArray = Object.keys(leftPart);
  const centerArray = Object.keys(centerPart);
  const rightArray = Object.keys(rightPart);

  // States
  const [getHoverId, setHoverId] = React.useState(); // State to track hovered item
  const [isMenuOpen, setIsMenuOpen] = React.useState(false); // State to track menu open/close

  // Function to toggle menu open/close
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle opening menu on hover
  const toggleMenuOpen = (hoverId) => {
    setHoverId(hoverId);
  };

  // Function to handle closing menu
  const toggleMenuClose = () => {
    setHoverId(null);
  };

  // Function to render components based on their type
  const getComponentRender = (data) => {
    const { type, value, bold, icon, id } = data;

    if (type === "text") {
      return (
        // Rendering TextLink component for type "text"
        <TextLink
          name={value}
          className={styles.text} // Applying text styles
          style={{ fontWeight: bold ? "bold" : "" }} // Applying fontWeight if bold is true
        />
      );
    }
    if (type === "menuItem") {
      return (
        // Rendering CustomMenuItem component for type "menuItem"
        <CustomMenuItem
          data={data}
          toggleMenuOpen={toggleMenuOpen}
          toggleMenuClose={toggleMenuClose}
          isOpen={getHoverId === id} // Checking if current item is hovered
        />
      );
    }
    if (type === "search") {
      return (
        // Rendering Searchable component for type "search"
        <Serachable icon={icon} />
      );
    }
  };

  // Returning values and functions for external use
  return {
    leftArray,
    centerArray,
    rightArray,
    getComponentRender,
    leftPart,
    centerPart,
    rightPart,
    handleMenuToggle,
    isMenuOpen,
  };
};

export default useMegaMenu;
