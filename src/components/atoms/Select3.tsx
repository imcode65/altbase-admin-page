import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import IconScroll from 'components/icons/IconScroll';

interface ISelect2 {
    list?: string[] | number[];
    label?: string;
    id?: string;
    value?: string;
    onChangeHandler?: (x: string) => void;
}

const Select2: FC<ISelect2> = ({ list=[], label="", id=uuidv4(), value="", onChangeHandler=()=>{} }) => {
    return (
        <div className='flex flex-col'>
            <label className='mr-2 font-bold text-black w-full text-sm' htmlFor={id}>{label}</label>
            <div className='relative h-full w-full'>
                <select
                    className='border border-color-13 pl-3 pr-6 py-1 rounded appearance-none outline-none relative h-full w-full'
                    id={id}
                    value={value}
                    onChange={e => onChangeHandler(e.target.value)}
                >
                { 
                    list.map((item, id) => (
                        <option key={id} value={ item }>{ item }</option>
                    )) 
                }
                </select>
                <IconScroll className='absolute right-1 top-1/2 transform -translate-y-1/2' />
            </div>
        </div>
    )
}

export default Select2;