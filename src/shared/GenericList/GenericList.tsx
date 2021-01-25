import React from 'react';

interface IItem {
    text: string;
    id: string;
    onClick: (id: string)=> void;
    className?: string;
    As?: 'a'|'li'|'button'|'div';
    href?:string;
}

interface IMyListProps {
    list: IItem[];
}

export function MyList({list}: IMyListProps) {
    return (
        <ul>
            {list.map((item:IItem)=>(
                <li onClick={()=>item.onClick(item.id)} key={item.id}>{item.text} ({item.id})</li>
            ))}
        </ul>
    )
};

interface IGenericListProps {
    list: IItem[];
}

const noop = ()=> {};//функция, которая ничего не делает, чтобы onClick={()=> onClick(id)} запускать без проверок на существование функции

export function GenericList({ list }: IGenericListProps) {
   return (
       <>
        {list.map(({As='div', text, onClick, className,id, href})=>(
            <As
                className={className}
                onClick={()=> onClick(id)}
                key={id}
                href={href}
            >
                {text}
            </As>
        ))}
       </>
   ) 
}