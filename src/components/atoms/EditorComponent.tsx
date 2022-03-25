import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface IEditorComponent {
    label?: string;
    id?: string;
}

const EditorComponent: FC<IEditorComponent> = ({ label="", id=uuidv4() }) => {
    return (
        <div className='flex flex-col'>
            <label className='mr-2 font-semibold text-xl text-black w-full text-sm' htmlFor={id}>{label}</label>
            <div className='w-full'>
                <Editor
                    wrapperClassName="wrapper-class w-full h-48 " 
                    editorClassName="editor-class border-2 border-black"
                />
            </div>
        </div>
    )
}

export default EditorComponent;