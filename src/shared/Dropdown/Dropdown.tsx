import React from 'react';
import styles from './dropdown.less';

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
};

export default function Dropdown ({button, children}: IDropdownProps){
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    return (
        <div className={styles.container}>
            <div onClick={()=> setIsDropdownOpen(!isDropdownOpen)}>
                {button}
            </div>
            {isDropdownOpen && (
                <div className={styles.listContainer}>
                    {/* ..из-за подъема события, сначала сработает клик на children, а затем
                    ()=>setIsDropdownOpen(false) = закроется сам список.  */}
                    <div className={styles.list} onClick={()=>setIsDropdownOpen(false)}>
                        {children}
                    </div>
                </div>
                
            )}
        </div>
    );
}