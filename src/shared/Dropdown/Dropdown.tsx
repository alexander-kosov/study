import React from 'react';
import styles from './dropdown.less';

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?:() => void;
    onClose?: () => void;
};

const NOOP = () => {}//чтобы onOpen и onClose срабатывали всегда, чтобы TS не выдавал ошибку в случае отсутствия этих функций

export default function Dropdown ({button, children, isOpen, onClose=NOOP, onOpen=NOOP}: IDropdownProps){
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    React.useEffect(() => isDropdownOpen? onOpen() : onClose() , [isDropdownOpen]);

    const handleOpen = () => {
        if(isOpen === undefined){
            // если isOpen не передается, хотим, чтобы список работал автоматически
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    return (
        <div className={styles.container}>
            <div onClick={handleOpen}>
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