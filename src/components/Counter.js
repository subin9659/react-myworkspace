import React, { useState } from "react";

//props는 화면에 표시하는 변수, 외부에서 받아옴
//state는 화면에 표시하는 변수, 내부에서 선언

const Counter = () => {
  //state 변수를 선언하는 방법
  //React Hooks에서 useState Hook을 사용한 방법
  //const [state변수명, state변경함수명] = useState(state변수의 초기값);

  const [count, setCount] = useState(0); //state변수 생성 및 state 변경 함수를 생성

  const increaseCounter = () => {
    //state변수를 변경
    //state변경함수(변경할 값)

    //state 변경함수를 실행 -> 컴포넌트를 다시 렌더링함
    setCount(count + 1); //기존 state에 +1을 해서 적용
  };

  return (
    <div>
      {/* state변수를 읽음 */}
      <p>You Clicked {count} times </p>
      <button
        onClick={() => {
          increaseCounter();
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Counter;
