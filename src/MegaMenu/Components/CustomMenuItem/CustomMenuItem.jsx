import React from "react";
import styles from "./MenuItem.module.css"; // Importing CSS styles for MenuItem component
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"; // Importing down arrow icon
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded"; // Importing up arrow icon
import OptionsMenu from "./OptionsMenu"; // Importing OptionsMenu component

// Functional component for CustomMenuItem
const CustomMenuItem = ({ data, toggleMenuOpen, toggleMenuClose, isOpen }) => {
  // Destructuring properties from data object
  const { value, icon: Icon, id, options } = data;

  // Creating an array of option keys
  const optionsArr = Object.keys(options);

  // Rendering CustomMenuItem component
  return (
    <>
      <div
        className={isOpen ? styles.activeDropdownMenu : styles.dropdownMenu} // Conditional class based on isOpen state
        onMouseEnter={() => toggleMenuOpen(id)} // Event handler for mouse enter
        onMouseLeave={toggleMenuClose} // Event handler for mouse leave
      >
        <div className={styles.dropdownTrigger}>
          {/* Rendering value or icon based on availability */}
          {value ? value : <Icon className={styles.profileIcon} />}
          {/* Rendering arrow icon based on isOpen state */}
          {value ? (
            isOpen ? (
              <KeyboardArrowUpRoundedIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )
          ) : null}
        </div>
      </div>
      {/* Rendering OptionsMenu component */}
      <OptionsMenu
        isOpen={isOpen}
        toggleMenuOpen={toggleMenuOpen}
        id={id}
        toggleMenuClose={toggleMenuClose}
        optionsArr={optionsArr}
        options={options}
      />
    </>
  );
};

export default CustomMenuItem; // Exporting CustomMenuItem component
