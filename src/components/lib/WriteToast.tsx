import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import "../../css/wirteToast.css"
const WriteToast = () => {
    return (
        <div className='write-toast-custom'>
            <Editor 
    initialValue="hello react editor world!"
    previewStyle="vertical"
    height="600px"
    initialEditType="markdown"
    useCommandShortcut={true}
  />
        </div>
    );
};

export default WriteToast;