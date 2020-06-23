import React, { useState } from 'react';
import styles from './Tabs.module.css';

function Tabs( {items} ) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <div className={styles.headers}>
                {items.map((item, i) => {
                    return (
                        <div
                         key={i}
                         className={styles.header + (i == activeIndex ?
                         ' ' + styles.active : '')}
                         onClick={() => setActiveIndex(i)}
                         >
                        {item.label}</div>
                    )
                })}
            </div>
            <div className={styles.content}>{items[activeIndex]
            .content}</div>
        </div>
    )
}
export default Tabs;