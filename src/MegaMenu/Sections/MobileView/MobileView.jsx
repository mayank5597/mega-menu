import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import styles from "./MobileView.module.css";

const MobileView = (props) => {
  const { data, handleMenuToggle, isMenuOpen } = props;
  const dataKeys = Object.keys(data);
  const [selectedId, setSelectedId] = useState();

  const renderList = (list) => {
    const dataObj = data[list];
    const optionObject = dataObj.options;
    const optionObjectKeys = Object.keys(dataObj.options);
    return optionObjectKeys.map((key, index) => {
      const element = optionObject[key];
      return (
        <div className={styles.listWrapper} key={element.title + index}>
          {element.title && (
            <div className={styles.listTitle}>{element.title}</div>
          )}
          {element.options_value.map((item, index) => (
            <div key={item + index} className={styles.listTextWrapper}>
              {item.value}
            </div>
          ))}
        </div>
      );
    });
  };
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
      {isMenuOpen ? (
        <div className={styles.backDrop}>
          {dataKeys.map((item, index) => (
            <div key={data[item].id + index}>
              <div
                className={
                  data[item].id === selectedId
                    ? styles.activeMenuItemText
                    : styles.menuItemText
                }
                onClick={() => {
                  if (data[item].id === selectedId) {
                    setSelectedId();
                  } else setSelectedId(data[item].id);
                }}
              >
                {data[item].value}
                {data[item].type === "menuItem" ? (
                  selectedId === data[item].id ? (
                    <KeyboardArrowUpRoundedIcon />
                  ) : (
                    <KeyboardArrowDownRoundedIcon />
                  )
                ) : null}
              </div>
              {selectedId === data[item].id && renderList(item)}
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default MobileView;
