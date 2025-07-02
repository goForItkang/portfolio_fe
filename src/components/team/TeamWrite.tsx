import React, { useRef, useState } from 'react';
import WriteToast from '../lib/WriteToast';
import "../../css/teamWrite.css";
import axios from 'axios';

type RecruitItem = {
  role: string;
  count: number;
};

const TeamWrite = () => {
  const editorRef = useRef<any>(null);

  // ✅ 제목 state
  const [title, setTitle] = useState('');

  // ✅ 모집 역할 리스트 state
  const [recruitList, setRecruitList] = useState<RecruitItem[]>([
    { role: '', count: 0 },
  ]);

  // ✅ 제목 변경 핸들러
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // ✅ 역할 변경 핸들러
  const handleRoleChange = (index: number, value: string) => {
    const newList = [...recruitList];
    newList[index].role = value;
    setRecruitList(newList);
  };

  // ✅ 인원 변경 핸들러
  const handleCountChange = (index: number, value: number) => {
    const newList = [...recruitList];
    newList[index].count = value;
    setRecruitList(newList);
  };

  // ✅ 역할 추가 함수
  const addRoleInput = () => {
    setRecruitList([...recruitList, { role: '', count: 0 }]);
  };

  // ✅ 역할 삭제 함수 (마지막 하나는 삭제 불가)
  const removeRoleInput = (index: number) => {
    if (recruitList.length === 1) return;
    const newList = recruitList.filter((_, i) => i !== index);
    setRecruitList(newList);
  };

  // ✅ 전송 핸들러
  const writeHandler = () => {
    const content = editorRef.current?.getInstance().getMarkdown(); // Toast UI Editor content

    const data = {
      title: title,
      recruitList: recruitList,
      content: content,
    };

    axios.post('/api/team/write', data)
      .then((res) => {
        if (res.status === 200) {
          console.log(data);
          alert("팀 모집 글이 성공적으로 등록되었습니다.");
        }
      })
      .catch(err => {
        console.error(err);
        alert("글 등록 중 오류가 발생했습니다.");
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* 제목 입력 */}
      <div className='flex flex-col mb-4'>
        <h1 className='mb-2 text-2xl font-bold'>팀 모집 글쓰기</h1>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={handleTitleChange}
          className="border rounded px-3 py-2"
        />
      </div>

      {/* 작성자 / 역할 추가 버튼 */}
      <div className="flex justify-between items-center mb-4">
        <div id='writer-div'>
          <p className="font-medium">작성자</p>
        </div>
        <button
          id="addBtn"
          onClick={addRoleInput}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + 역할 추가
        </button>
      </div>

      {/* 모집 역할/인원 입력 */}
      <div
        className={`grid gap-4 mb-4 ${
          recruitList.length === 1 ? 'grid-cols-1 justify-center' : 'grid-cols-2'
        }`}
      >
        {recruitList.map((item, index) => (
          <div
            key={index}
            className='flex items-center space-x-2 border p-2 rounded w-full max-w-md mx-auto'
          >
            <select
              value={item.role}
              onChange={(e) => handleRoleChange(index, e.target.value)}
              className="border px-2 py-1 rounded flex-1"
            >
              <option value="">직무 선택</option>
              <option value="Back-end">Back-end</option>
              <option value="Front-end">Front-end</option>
              <option value="Full-Stack">Full-Stack</option>
              <option value="PM">PM</option>
              <option value="Design">Design</option>
            </select>
            <input
              type="number"
              placeholder="인원"
              value={item.count}
              onChange={(e) => handleCountChange(index, parseInt(e.target.value))}
              className="w-20 border px-2 py-1 rounded"
            />
            <button
              onClick={() => removeRoleInput(index)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* 에디터 */}
      <div className="mb-4">
      <WriteToast ref={editorRef} />
      </div>

      {/* 전송 버튼 */}
      <button
        className="w-full bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
        onClick={writeHandler}
        type='button'
      >
        전송
      </button>
    </div>
  );
};

export default TeamWrite;
