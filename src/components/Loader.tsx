import React from "react";

import styles from "../styles/loader.module.css";

const Loader: React.FC = () => {
    return <section className={styles["container"]}>
        <div className={styles["square"]}></div>
        <div className={styles["infinite-scroll"]}></div>
    </section>
}

export default Loader;