import React from "react";
import styles from "./footer.module.scss";

interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Dog Flow</p>
    </footer>
  );
};

export default Footer;
