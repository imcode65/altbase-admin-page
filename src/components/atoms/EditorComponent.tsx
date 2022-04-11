import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface IEditorComponent {
    label?: string;
    id?: string;
}

const EditorComponent: FC<IEditorComponent> = ({ label="", id=uuidv4() }) => {
    const [content, setContent] = useState<any>();
    const onContentStateChange = (_content: any) => {
        setContent(convertFromRaw(_content))
    }
    return (
        <div className='flex flex-col'>
            <label className='mr-2 font-semibold text-black w-full text-sm' htmlFor={id}>{label}</label>
            <div className='w-full'>
                <Editor
                    wrapperClassName="wrapper-class w-full"
                    editorClassName="editor-class border-2 border-black"
                    onContentStateChange={onContentStateChange}
                />
            </div>
        </div>
    )
}

export default EditorComponent;