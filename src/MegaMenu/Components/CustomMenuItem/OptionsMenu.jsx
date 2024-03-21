import React from "react";
import styles from "./MenuItem.module.css"; // Importing CSS styles for OptionsMenu component

// Functional component for rendering options menu
const OptionsMenu = ({
  isOpen,
  toggleMenuOpen,
  id,
  toggleMenuClose,
  optionsArr,
  options,
}) => {
  // Function to render options based on the main option object
  const renderMethod = (mainOptionObj) => {
    // Iterating through the properties of the mainOptionObj
    for (const optionValue in mainOptionObj) {
      if (Object.hasOwnProperty.call(mainOptionObj, optionValue)) {
        const optionsTitle = mainOptionObj.title; // Title of the options
        const options_value = mainOptionObj.options_value; // Array of options values

        // Returning JSX for rendering options menu
        return (
          <div>
            {/* Rendering options title if available */}
            {optionsTitle && (
              <div key={optionValue} className={styles.optionsTitle}>
                {optionsTitle}
              </div>
            )}
            {/* Rendering options values */}
            <div
              className={
                optionsArr.length > 1
                  ? styles.bigOptionsWrapper
                  : styles.optionsWrapper
              }
            >
              {options_value.map((option, index) => (
                <li key={index}>{option.value}</li> // Rendering option value
              ))}
            </div>
          </div>
        );
      }
    }
  };

  // Rendering OptionsMenu component
  return (
    <>
      {/* Rendering options menu only if isOpen state is true */}
      {isOpen && (
        <ul
          className={
            optionsArr.length > 1
              ? styles.bigDropdownOptions
              : styles.dropdownOptions
          }
          onMouseEnter={() => toggleMenuOpen(id)} // Handling mouse enter event
          onMouseLeave={toggleMenuClose} // Handling mouse leave event
        >
          {/* Mapping over optionsArr to render options */}
          {optionsArr.map((itemName) => {
            const mainOptionObj = options[itemName];
            return renderMethod(mainOptionObj);
          })}
        </ul>
      )}
    </>
  );
};

export default OptionsMenu;
