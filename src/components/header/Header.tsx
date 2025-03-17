import React, { useState } from "react";
import styles from "./header.module.scss";
import Sidebar, { ISidebarItem } from "../sidebar/Sidebar";
import { Home, Settings, Info, AccountCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PetsIcon from '@mui/icons-material/Pets';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import EuroIcon from '@mui/icons-material/Euro';
import ThermostatIcon from '@mui/icons-material/Thermostat';

interface IHeader {}

const sidebarItems: ISidebarItem[] = [
  { text: "Dashboard", path: "/", icon: <Home /> },
  { text: "Tesserati", path: "/members", icon: <PetsIcon /> },
  { text: "Appuntamenti", path: "/", icon: <CalendarMonthIcon /> },
  { text: "Personale", path: "/", icon: <PeopleIcon /> },
  { text: "Finanze", path: "/", icon: <EuroIcon /> },
  { text: "Meteo", path: "/", icon: <ThermostatIcon /> },
  { text: "Profilo", path: "/", icon: <AccountCircle /> },
  { text: "Impostazioni", path: "/", icon: <Settings /> },
  { text: "Info", path: "/", icon: <Info /> },
];

const Header: React.FC<IHeader> = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.containerButton}>
        <IconButton
          className={styles.button}
          onClick={() => setOpenSidebar(true)}
          aria-label="apri menù"
        >
          <MenuIcon />
        </IconButton>
      </div>

      <Sidebar
        open={openSidebar}
        setOpen={(state) => setOpenSidebar(state)}
        items={sidebarItems}
      />
    </header>
  );
};

export default Header;
