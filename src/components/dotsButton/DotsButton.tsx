import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./dotsButton.module.scss";

interface IDotsButtonItem {
  text: string;
  error?: boolean;
  action: () => void;
}

interface IDotsButton {
  items: IDotsButtonItem[];
}

const DotsButton: React.FC<IDotsButton> = ({ items }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon className={styles.icon} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {items.map((item, index) => (
          <MenuItem key={index} onClick={item.action} className={item.error ? styles.menuItemError : ""}>
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DotsButton;
