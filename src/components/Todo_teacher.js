import { useRef, useState } from "react";

const Todo = () => {
  // 화면에 뭔가를 표시해야함 -> props or state, 내부면 state
  // 할 일 목록에 해당하는 state

  const [todoList, setTodoList] = useState([
    { memo: "React 공부하기" },
    { memo: "Javascript 연습하기" },
  ]);

  //JSX Element요소를 참조하는 변수(입력값 참조할 때 주로 사용)
  const input = useRef();

  const add = () => {
    console.log("--add--");

    //input.current -> <input type = "text"....이런 값나옴
    //input.current.value -> 내가 입력한 값

    //입력박스의 값을 가져오고 그 값을 배열에 추가
    //입력박스를 지움

    // 1. 배열 뒤에 넣기 push({}) 2. 배열 앞에 넣기unshift({})
    // *******But, state 변수는 직접적으로 변경하면 안 됨.********
    // state 변수를 변경할 수 있는 방법은 state 변경 함수만 사용해야함.
    // setTodoList(새로운배열)

    // let a = []; // 새로운 빈 배열이 생성됨
    // let arr = [{memo: "a"}, {memo: "b"}];
    // let arr2 = [...arr]; //새로운 배열을 생성하여 기존 배열을 복사

    // spread operator(3점 표기법, triple-dot expression)
    // ...arr -> {memo:"a"}, {memo:"b"}
    // 배열의 요소 목록을 나열함
    // ...배열변수 -> 배열의 요소목록이 나열됨
    // [{memo:"a"},{memo:"b"}] //새로운 배열로 재탄생

    // let obj = {} // 새로운 빈 객체를 생성
    // let obj2 = {memo: input.current.value} //메모 속성이 있는 새로운 객체를 생성

    setTodoList([{ memo: input.current.value }, ...todoList]); //...으로 기존배열 카피한다. 앞쪽에는 새로 추가한다.

    //concat 함수는 배열과 배열을 결합하고 새로운배열을 반환
    //setTodoList( () => [{memo: inpt.current.value}].concat(todoList);

    //입력박스의 값을 비움
    input.current.value = "";
  };

  // <><,> (Fragment)
  // 컴포넌트의 최상위 JSX Element는 1개만 존재할 수 있음
  return (
    <>
      {/* JSX Element안에서 주석 넣기 */}
      {/* 입력폼 */}
      <div>
        <input type={"text"} placeholder="할 일..." ref={input} />
        {/* 함수의 이름을 대리자(delegate) == 함수의 본체와 같다 */}
        <button onClick={add}>입력</button> {/*onClick={ () => {} */}
      </div>

      {/* 목록 */}
      <div>
        <ul>
          {
            // map함수 <--- JSX에서는 for문 대신
            // 배열변수.map((요소변수, 인덱스변수) => {
            //   return 변경할요소
            // })

            // 기존 배열 크기만큼 변경된 배열로 반환함

            /* 원래 
            todolist = [
              { memo: "React 공부하기" },
              { memo: "Javascript 연습하기" }
            ]
            
            변경된 배열 = [
              <li key={0}>React 공부하기</li>
              <li key={1}>Javascript 연습하기</li>
            ]            
            */

            /*
             *** JSX Element의 key속성: React에서 요소가 변경된 것을 감지하는 속성
             */

            // 바인딩(Binding): 데이터와 UI요소를 연결하는 방법
            todoList.map((todo, index) => (
              <li key={index}>{todo.memo}</li>
            ))
          }
        </ul>
      </div>
    </>
  );
};

export default Todo;
