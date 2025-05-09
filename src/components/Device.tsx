import React, { ReactNode } from "react";

import Button from "./Button";
import styles from "../styles/song.module.css";

const Device: React.FC<{
    className?: string
    device_id: string
    children?: ReactNode
    track_uri: string
    updateCaller: () => void
}> = (props) => {
    
    const handleClick = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/transfer-device/", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    device_id: [props.device_id],
                    track_uri: props.track_uri
                }),
                credentials: "include",
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            await response.json();
            
            props.updateCaller();
        } catch (error) {
            console.error("Error during device transfer:", error);
        }
    };

    return <Button clickHandler={handleClick} className={styles['device_btn']}>{props.children}</Button>
};

export default Device;
