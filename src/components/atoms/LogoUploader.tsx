import XLogo from 'assets/imgs/XLogo.png';
import Button1 from 'components/atoms/Button1';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

const LogoUploader = ({ url = XLogo}) => {
    const [previewLogo, setPreviewLogo] = useState<any>(url);
    return (
        <div className="relative flex flex-col w-full items-center">
            <img className='w-auto h-56 m-6 rounded-xl overflow-hidden' src={url} alt="XLogo" />
            <input id={id} type="file" accept='image/*' onChange={(e: any) => setPreviewLogo(URL.createObjectURL(e.target.files[0]))} className='hidden' />
            <label htmlFor={id}>
                <Button1 className='w-56' rounded text='UPLOAD' />
            </label>
            <p className='text-color-20 opacity-60 m-4'>Note: Only jpg, jpeg & png file formats are allowed</p>
        </div>
    )
}

export default LogoUploader;