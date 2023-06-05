import React, { useState } from 'react';
import styles from "./main.module.css";




function Shame() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>
                <div>
                    <h2 className={styles.h2}>wall of shame</h2>
                    <p className={styles.p}>{count} members</p>
                </div >
                    <div className={styles.flex}>
                    <input type="name" className={styles.input} name="name"/>
                    <input type="excuse" className={styles.secondinput} name="excuse"/>
                    <button onClick={() => setCount(count + 1)} className={styles.button}>create</button>
                </div>
            </div>
            <div className={styles.title}>
                <p className={styles.blackp}>name</p>
                <p className={styles.excuse}>excuse</p>
                <p className={styles.count}>count</p>
            </div>
        </div>
    )
}





export default Shame;