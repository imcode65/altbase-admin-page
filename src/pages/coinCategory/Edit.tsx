import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LabelInput1 from 'components/atoms/LabelInput1';
import Button2 from 'components/atoms/Button2';
import Button1 from 'components/atoms/Button1';
import SwitchButton from 'components/atoms/SwitchButton';
import toast from 'react-hot-toast';
import altbaseService, { ICoinCategory } from "services/altbaseService";

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState<string>("");    
    const [is_active, setIs_active] = useState<boolean>(true);

    useEffect(() => {
        (async() => {
            let { status, content, message } = await altbaseService.getCoinCategoryById(parseInt(id || "0"));
            if( status === "success") {
                setTitle(content.title);
                setIs_active(Boolean(content.is_active));
            } else {
                toast.error(message);
            }
        })();
    }, [])

    const onChangeStatus = (newStatus: boolean) => {
        setIs_active(newStatus);
        return newStatus;
    }

    const onBack = () => {
        navigate(-1);
    }
    
    const saveHandler = () => {
        (async() => {
            let { status, content, message } = await altbaseService.updateCoinCategory(parseInt(id || "0"), {
                title: title,
                is_active: is_active ? "1" : "0"
            });
            if( status === "success") {
                toast.success(message);
            } else {
                toast.error(message);
            }
        })();
    }
    
    return (
        <div className="p-4 bg-white">
            <LabelInput1 label="Title *" onChangeHandler={setTitle} text={title} placeholder="Featured Coin"></LabelInput1>
            <div className="mt-4">
                <span className="font-bold text-sm">Status</span>
                <SwitchButton onChangeHandler={onChangeStatus} value={is_active}/>
            </div>
            <div className='w-full flex justify-center mt-8 col-span-3'>
                <Button1 className='w-32 mr-2' text='Save' confirming onClick={saveHandler} />
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default Edit;