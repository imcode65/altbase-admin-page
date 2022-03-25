import { useState } from "react";
import { Link } from "react-router-dom";
import LabelInput1 from 'components/atoms/LabelInput1';
import TextArea from 'components/atoms/TextArea';
import Select3 from 'components/atoms/Select3';
import Button1 from 'components/atoms/Button1';

const Notifications = () => {

    return (
        <div className="p-4 bg-white mt-8">
            <div className="mb-16">
                <Select3 label="Type *" list={["Select Type", "All", "Individual"]}></Select3>
                <LabelInput1 className="mt-6" label="Title *" placeholder="Enter the title" ></LabelInput1>
                <TextArea className="mt-6" label="Description *" placeholder="Enter your description" ></TextArea>
            </div>
            <div className='w-full flex justify-center'>
                <Button1 className='w-32' text='Send' />
            </div>
        </div>
    )
}

export default Notifications;