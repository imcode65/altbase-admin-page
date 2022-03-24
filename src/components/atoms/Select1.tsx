import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import IconScroll from 'components/icons/IconScroll';

interface ISelect1 {
    list?: string[] | number[];
    label?: string;
    id?: string;
}

const Select1: FC<ISelect1> = ({ list=[], label="", id=uuidv4() }) => {
    return (
        <div className='flex items-center'>
            <label className='mr-2' htmlFor={id}>{label}</label>
            <div className='relative'>
                <select className='border border-color-13 pl-3 pr-6 py-1 rounded appearance-none outline-none relative' id={id}>
                { list.map((item, id) => (
                    <option key={id} value={ item }>{ item }</option>
                )) }
                </select>
                <IconScroll className='absolute right-1 top-1/2 transform -translate-y-1/2' />
            </div>
        </div>
    )
}

export default Select1;