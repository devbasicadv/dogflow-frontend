import React, { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface ISidebarItem {
  text: string;
  path: string;
  icon?: any;
}

interface ISidebar {
  open: boolean;
  setOpen: (state: boolean) => void;
  items: ISidebarItem[];
}

const Sidebar: React.FC<ISidebar> = ({ open, setOpen, items }) => {
  const navigate = useNavigate();
  const [sidebarWidth, setSidebarWidth] = useState("300px");

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setSidebarWidth(rootStyles.getPropertyValue("--sidebar-width"));
  }, []);

  
  const openPage = (path: string) => {
    navigate(path);
    setOpen(false);
  }

  return (
    <div className={styles.sidebar}>
      <Drawer
        variant="temporary"
        sx={{
          [`& .MuiDrawer-paper`]: {
            width: sidebarWidth,
            boxSizing: "border-box",
            transition: "width 0.3s ease",
          },
        }}
        className={styles.sidebar}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className={styles.container}>
          <List>
            {items.map((item, index) => (
              <ListItemButton className={styles.button} key={index} onClick={() => openPage(item.path)}>
                {item.icon && <ListItemIcon className={styles.icon}>{item.icon}</ListItemIcon>}
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
