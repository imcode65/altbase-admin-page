import { FC } from 'react';
import { IIcon } from './IIcon';

const IconScroll: FC<IIcon> = ({ className="", clickHandler=()=>{} }) => {
    return (<svg onClick={clickHandler} className={`h-5 w-5 ${className}`} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" d="M0 0h48v48h-48z"/><path d="M24 11.66l6.34 6.34 2.83-2.83-9.17-9.17-9.17 9.17 2.83 2.83 6.34-6.34zm0 24.68l-6.34-6.34-2.83 2.83 9.17 9.17 9.17-9.17-2.83-2.83-6.34 6.34z"/></svg>)
}

export default IconScroll;