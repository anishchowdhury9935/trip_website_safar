"use client";
import "../app/css/globals.css";
import styles from "./page.module.css"
import Home from "./components/Home";
export default function root() {
  return (
    <div className={`${styles['home-page-main-container']}`}>
        <Home/>
    </div>
  );
}
