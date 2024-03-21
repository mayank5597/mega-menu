import React from "react";
import styles from "./MegaMenu.module.css"; // Importing CSS styles for MegaMenu component
import MobileView from "./Sections/MobileView/MobileView"; // Importing MobileView component
import useMegaMenu from "./hooks/useMegaMenu"; // Importing custom hook for MegaMenu functionality

// Functional component for MegaMenu
const MegaMenu = () => {
  // Destructuring values and functions from the custom hook
  const {
    leftArray,
    centerArray,
    getComponentRender,
    leftPart,
    centerPart,
    handleMenuToggle,
    isMenuOpen,
    rightArray,
    rightPart,
  } = useMegaMenu();

  // Rendering MegaMenu component
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.maxWidthCtn}>
        {/* Rendering left part of the menu */}
        <div className={`${styles.menuWrapper} ${styles.hideOnMobile}`}>
          {leftArray.map((item) => (
            <div key={item}>{getComponentRender(leftPart[item])}</div>
          ))}
        </div>
        {/* Rendering center part of the menu */}
        <div className={`${styles.menuWrapper} ${styles.hideOnMobile}`}>
          {centerArray.map((item) => (
            <div key={item}>{getComponentRender(centerPart[item])}</div>
          ))}
        </div>
        {/* Rendering MobileView for center part of the menu on mobile devices */}
        <div className={`${styles.menuWrapper} ${styles.hideOnDesktop}`}>
          <MobileView
            data={centerPart}
            handleMenuToggle={handleMenuToggle}
            isMenuOpen={isMenuOpen}
          />
        </div>
        {/* Rendering left part of the menu on mobile devices */}
        <div className={`${styles.menuWrapper} ${styles.hideOnDesktop}`}>
          {leftArray.map((item) => (
            <div key={item}>{getComponentRender(leftPart[item])}</div>
          ))}
        </div>
        {/* Rendering right part of the menu */}
        <div className={styles.menuWrapper}>
          {rightArray.map((item) => (
            <div key={item}>{getComponentRender(rightPart[item])}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu; // Exporting MegaMenu component
