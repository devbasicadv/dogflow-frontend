import React from "react";
import styles from "../assets/styles/mainLayout.module.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.container}>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
