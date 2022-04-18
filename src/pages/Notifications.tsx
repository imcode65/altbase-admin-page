import { useState } from "react";
import { Link } from "react-router-dom";
import LabelInput1 from 'components/atoms/LabelInput1';
import TextArea from 'components/atoms/TextArea';
import Select3 from 'components/atoms/Select3';
import Button1 from 'components/atoms/Button1';
import toast from "react-hot-toast";
import altbaseServer from "services/altbaseService";

const Notifications = () => {
    const [type, setType] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [userId, setUserId] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const sendNotification = async () => {
        const {status, message, content} = await altbaseServer.pushNotification({
            type: type.toLowerCase(),
            user_id: parseInt(userId),
            title,
            description
        });
        if (status === "success") {
            toast.success(message)
        } else {
            toast.error(message)
        }
    }
    return (
        <div className="p-4 bg-white mt-8">
            <div className="mb-16">
                <Select3 label="Type *" list={["Select Type", "All", "Individual"]} onChangeHandler={setType} value={type} ></Select3>
                {
                    type === "Individual" ? 
                    <LabelInput1 type="number" className="mt-6" label="User Id *" placeholder="Enter the user's id" text={userId} onChangeHandler={setUserId} ></LabelInput1>
                    : ""
                }
                <LabelInput1 className="mt-6" label="Title *" placeholder="Enter the title" text={title} onChangeHandler={setTitle} ></LabelInput1>
                <TextArea className="mt-6" label="Description *" placeholder="Enter your description" text={description} onChangeHandler={setDescription} ></TextArea>
            </div>
            <div className='w-full flex justify-center'>
                <Button1 className='w-32' text='Send' onClick={sendNotification} />
            </div>
        </div>
    )
}

export default Notifications;