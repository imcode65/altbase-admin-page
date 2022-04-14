import { FC, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertFromHTML, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

interface IEditorComponent {
    label?: string;
    id?: string;
    propContent?: string;
    contentChangeHandler?: (x: string) => void;
}

const EditorComponent: FC<IEditorComponent> = ({ label="", id=uuidv4(), propContent="", contentChangeHandler=()=>{} }) => {
    const [editorState, setEditorState] = useState<EditorState>();
    const onEditorStateChangeHandler = (_content: any) => {
        setEditorState(_content)
    }
    useEffect(() => {
        setEditorState(
            EditorState.createWithContent(
                ContentState.createFromBlockArray(
                    convertFromHTML(propContent).contentBlocks
                )
            )
        )
    }, [propContent]);
    const onBlurHandler = () => {
        if (editorState) {
            let res = draftToHtml(convertToRaw(editorState.getCurrentContent()))
            contentChangeHandler(res);
        }
    }
    return (
        <div className='flex flex-col'>
            <label className='mr-2 font-semibold text-black w-full text-sm' htmlFor={id}>{label}</label>
            <div className='w-full'>
                <Editor
                    editorState={editorState}
                    wrapperClassName="wrapper-class w-full"
                    editorClassName="editor-class border-2 border-black"
                    onEditorStateChange={onEditorStateChangeHandler}
                    onBlur={onBlurHandler}
                />
            </div>
        </div>
    )
}

export default EditorComponent;