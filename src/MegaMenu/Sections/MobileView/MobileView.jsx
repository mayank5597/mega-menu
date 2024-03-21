import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import styles from "./MobileView.module.css";

const MobileView = (props) => {
  const { data, handleMenuToggle, isMenuOpen } = props;
  return (
    <>
      <div className={styles.wrapper} onClick={handleMenuToggle}>
        Menu
        {isMenuOpen ? (
          <KeyboardArrowUpRoundedIcon />
        ) : (
          <KeyboardArrowDownRoundedIcon />
        )}
      </div>
      {isMenuOpen ? <div className={styles.backDrop}> Menu values</div> : null}
    </>
  );
};

export default MobileView;
