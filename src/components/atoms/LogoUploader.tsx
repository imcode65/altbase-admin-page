import XLogo from 'assets/imgs/XLogo.png';
import Button1 from 'components/atoms/Button1';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LogoUploader = ({ url=XLogo }: {url?: string}) => {
    const [previewLogo, setPreviewLogo] = useState<string>(url);
    const [id, setId] = useState<string>("");
    useEffect(() => {
        setId(uuidv4());
    }, [])
    return (
        <div className="relative flex flex-col w-full items-center">
            <img className='w-auto h-56 m-6 rounded-xl overflow-hidden' src={previewLogo} alt="XLogo" />
            <input id={id} type="file" accept='image/*' onChange={(e: any) => setPreviewLogo(URL.createObjectURL(e.target.files[0]))} className='hidden' />
            <label htmlFor={id}>
                <Button1 className='w-56' rounded text='UPLOAD' />
            </label>
            <p className='text-color-20 opacity-60 m-4'>Note: Only jpg, jpeg & png file formats are allowed</p>
        </div>
    )
}

export default LogoUploader;