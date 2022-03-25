import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import IconScroll from 'components/icons/IconScroll';

interface ISelect2 {
    list?: string[] | number[];
    label?: string;
    id?: string;
    value?: string | number;
    onChangeHandler?: (x: string | number) => void;
}

const Select2: FC<ISelect2> = ({ list=[], label="", id=uuidv4(), value="", onChangeHandler=()=>{} }) => {
    return (
        <div className='flex items-center'>
            { label === "" ? "" : <label className='mr-2' htmlFor={id}>{label}</label> }
            <div className='relative h-full w-full'>
                <select 
                    className='border border-color-13 pl-3 pr-6 py-1 rounded appearance-none outline-none relative h-full w-full'
                    id={id}
                    defaultValue={value}
                    onChange={e => onChangeHandler(e.target.value)}
                >
                { list.map((item, id) => (
                    <option key={id} value={ item }>{ item }</option>
                )) }
                </select>
                <IconScroll className='absolute right-1 top-1/2 transform -translate-y-1/2' />
            </div>
        </div>
    )
}

export default Select2;