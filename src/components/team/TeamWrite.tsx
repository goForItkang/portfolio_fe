import React, { useRef, useState } from 'react';
import WriteToast from '../lib/WriteToast';
import "../../css/teamWrite.css";

const TeamWrite = () => {
  const editorRef = useRef<any>(null);

  // ✅ 1. 모집 항목 리스트 상태
  const [recruitList, setRecruitList] = useState([{ role: '', count: 0 }]);

  // ✅ 2. 항목 추가 함수
  const addRoleInput = () => {
    setRecruitList([...recruitList, { role: '', count: 0 }]);
  };

  return (
    <div>
      {/* 제목 입력 */}
      <div>
        <input type="text" placeholder="제목을 입력하세요" className="w-full border px-2 py-1 mb-4" />
      </div>

      {/* 모집 역할/인원 입력 */}
      {recruitList.map((item, index) => (
        <div key={index} className='team-select-div'>
          <select defaultValue={item.role}>
            <option value="">직무 선택</option>
            <option value="Back-end">Back-end</option>
            <option value="Front-end">Front-end</option>
            <option value="Full-Stack">Full-Stack</option>
            <option value="PM">PM</option>
            <option value="Design">Design</option>
          </select>
          <input type="number" placeholder="인원 수 입력" defaultValue={item.count} />
        </div>
      ))}

      {/* + 버튼 */}
      <button id="addBtn" onClick={addRoleInput}>+</button>

      {/* 에디터 */}
      <WriteToast/>

      {/* 전송 버튼 */}
      <button>전송</button>
    </div>
  );
};

export default TeamWrite;
