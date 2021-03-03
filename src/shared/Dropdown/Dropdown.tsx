import React from 'react';
import ReactDOM from 'react-dom';
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

    const [isDropdownCoord, setIsDropdownCoord] = React.useState<{top: string, left: string}>({top: '0', left: '0'})

    const containerRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(()=>{
	    
        let head = containerRef.current?.getBoundingClientRect();
        let headBottom = head?.bottom;
        let headRight = head?.right;
        setIsDropdownCoord({top: headBottom+'px', left:headRight+'px'});
	},[isDropdownOpen]);



    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    React.useEffect(() => isDropdownOpen? onOpen() : onClose() , [isDropdownOpen]);

    const handleOpen = () => {
        if(isOpen === undefined){
            // если isOpen не передается, хотим, чтобы список работал автоматически
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    const node = document.querySelector('#modal_root');
	if(!node) return null;
    const drop = ReactDOM.createPortal((
        <>
        {isDropdownOpen && (
            <div className={styles.listContainer} style={isDropdownCoord} >
                <div className={styles.list} onClick={()=>setIsDropdownOpen(false)}>
                    {children}
                </div>
            </div>
            
        )}  
        </>    		
	), node);
    
    return (
        <div className={styles.container} ref={containerRef}>
            <div onClick={handleOpen}>
                {button}
            </div>
            {isDropdownOpen && drop}
        </div>
    );

    










}