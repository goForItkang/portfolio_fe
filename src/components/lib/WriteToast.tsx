import React, { forwardRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import "../../css/wirteToast.css";

const WriteToast = forwardRef((props, ref) => {
  return (
    <div className='write-toast-custom'>
      <Editor 
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={ref} // ✅ forwardRef로 받은 ref를 Editor에 전달
      />
    </div>
  );
});

export default WriteToast;
