import React, { ReactNode } from "react";

import styles from '../styles/page.module.css';
import Navigation from "../components/Navigation";

const PageTemplate: React.FC<{children: ReactNode}> = (props) => {
    return (
        <div className={styles['page-template_wrapper']}>
            <div className={styles['page-navigation']}>
                <Navigation/>
            </div>
            <div className={styles['main-content']}>
                {props.children}
            </div>
        </div>
    )
}

export default PageTemplate;