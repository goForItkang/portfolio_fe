import React, { useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const TeamWrite = () => {
  const editorRef = useRef<any>(null);

  const handleSubmit = () => {
    const content = editorRef.current?.getInstance().getMarkdown();
    console.log('작성된 내용:', content);
    // 여기서 서버로 content 전송 가능
  };

  return (
    <div>
      {/* 제목 입력 */}
      <div>
        <input type="text" placeholder="제목을 입력하세요" className="w-full border px-2 py-1 mb-4" />
      </div>

      {/* 에디터 */}
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

export default TeamWrite;
