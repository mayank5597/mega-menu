import React from "react";
import styles from "./Searchable.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// Functional component for Searchable
const Searchable = ({ icon: Icon }) => {
  // State to manage modal open/close
  const [isModalOpen, setModalOpen] = React.useState(false);

  // Function to handle click on search icon
  const handleSearchClick = () => {
    setModalOpen(true); // Opening the modal
  };

  // Function to handle modal close
  const handleModalClose = () => {
    setModalOpen(false); // Closing the modal
  };

  // Rendering Searchable component
  return (
    <>
      <div className={styles.wrapper}>
        {/* Rendering search icon or close icon based on modal state */}
        {isModalOpen ? (
          <CloseRoundedIcon
            className={styles.searchIcon}
            onClick={handleModalClose}
          />
        ) : (
          <Icon className={styles.searchIcon} onClick={handleSearchClick} />
        )}
      </div>
      {/* Rendering modal content if modal is open */}
      {isModalOpen && (
        <div onClick={handleModalClose} className={styles.modalWrapper}>
          <h2>Searchable Modal</h2>
        </div>
      )}
    </>
  );
};

export default Searchable; // Exporting Searchable component
