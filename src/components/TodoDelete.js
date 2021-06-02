import { useRef, useState } from "react";
import "./App.css";

const Todo = () => {
  const [todoList, setTodoList] = useState([
    { memo: "React 공부하기" },
    { memo: "Javascript 연습하기" },
  ]);

  const input = useRef();
  const ul = useRef();

  const add = () => {
    //console.log("--add--");
    setTodoList([{ memo: input.current.value }, ...todoList]);
    input.current.value = "";
  };

  const remove = (index) => {
    console.log("클릭한 요소의 index: " + index);
    // state 배열, 원래 배열 변경은 안됨.
    // 배열함수에서 새로운 배열을 반환하는 함수를 주로 사용
    // map, filter, concat

    // map: 배열 크기와 동일한 다른 배열을 생성

    // filter: 배열 크기와 다른 배열 생성
    // 특정 조건에 맞는 요소들만 있는 배열

    // 배열.filter((요소변수, 인덱스변수) => {
    // return 조건식(true/false)
    // })

    // return에 있는 조건식이 true인 요소만 반환되어 새로운 배열이 생성됨.
    // 클릭한 요소의 인덱스(index)와 배열 요소의 인덱스가 서로 다른 것만 새로운 배열로 생성

    // 클릭한 요소의 index = 0일 때
    // idx = 0, index = 0 => false => 이 요소는 반환되지 않음 => 새로운 배열에 존재하지 않음
    // idx = 1, index = 0 => true => 이 요소는 반환됨 => 새로운 배열에 존재함
    //const newTodoList = todoList.filter((todo, idx) => idx !== index);
    const newTodoList = todoList.filter((todo, idx) => {
      console.log("filter안에 idx: " + idx);
      return idx !== index;
    });
    console.log(newTodoList);

    //setTodoList(newTodoList);
    setTodoList(todoList.filter((_, idx) => idx !== index));
  };

  const edit = (index) => {
    setTodoList(
      // 변경된 배열
      todoList.map((todo, idx) => {
        // 배열 반복 요소의 idx와 클릭한 index가 같은지 비교
        if (idx === index) {
          // 같으면 isEdit 속성을 추가함
          todo.isEdit = true;
        }

        return todo;
      })
    );
  };

  const cancel = (index) => {
    setTodoList(
      // 변경된 배열
      todoList.map((todo, idx) => {
        // 배열 반복 요소의 idx와 클릭한 index가 같은지 비교
        if (idx === index) {
          // 같으면 isEdit 속성을 추가함
          delete todo.isEdit;
          // 다른 방법
          // delete todo["isEdit"];
          // 다른 방법
          // for(let prop in["isEdit"]){
          //   delete todo[prop];
          // }
        }
        // 변경된 요소를 반환
        return todo;
      })
    );
  };

  const save = (index) => {
    // ref변수의 current는 현재 HTML태그로 그려진 요소(node)
    console.log(ul.current.children); //ul의 자식 li 목록
    console.log(ul.current.children[index]); // ul의 자식 li 목록에서 클릭한 버튼이 있는 li
    setTodoList(
      // 변경된 배열
      todoList.map((todo, idx) => {
        // 배열반복요소의 idx와 클릭한 요소의 index가 같은지 비교
        if (idx === index) {
          // ul > li > input 박스선택
          const li = ul.current.children[index];
          const editInput = li.querySelector("input");
          console.log(editInput);

          //같으면 입력박스의 값을 todo.memo에 대입
          todo.memo = editInput.value;
          // 조회 모드로 변경
          delete todo.isEdit;
        }
        return todo;
      })
      // 맵 함수가 반환하는 배열 == 맵 함수가 호출하는 함수의 리턴 객체의 모음
    );
  };

  return (
    <>
      <div>
        <input type="text" placeholder="할 일..." ref={input} />
        <button onClick={add}>입력</button>
      </div>

      <div>
        <ul ref={ul}>
          {todoList.map((todo, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  remove(index);
                }}
              >
                ❌
              </button>
              {/* 조건식 && JSX 엘리먼트 */}
              {/* 조건식이 true로 평가되면 JSX엘리먼트 표시 */}
              {/* 조건식이 false로 평가되면 아무것도 표시하지 않음 */}
              {/* JSX Element안에서 js를 작성하려면 중괄호로 감싸줘야 함 */}
              {/* 조회 모드일 때만 보이는 버튼 */}
              {/* isEdit 속성이 undefined상태이면 보임 */}
              {!todo.isEdit && <span>{todo.memo}</span>}
              {!todo.isEdit && (
                <button
                  onClick={() => {
                    edit(index);
                  }}
                >
                  edit
                </button>
              )}
              {/* 수정 모드일 때만 보이는 버튼 */}
              {/* isEdit가 없으니까 얜 false이기 때문에 볼 필요도 없이 false */}
              {/* isEdit 속성이 존재하고 true값이면 보임  */}
              {todo.isEdit && (
                <input type="text" defaultValue={todo.memo}></input>
              )}
              {todo.isEdit && (
                // 연결해줘서 동작 실행
                <button
                  onClick={() => {
                    save(index);
                  }}
                >
                  save
                </button>
              )}
              {todo.isEdit && (
                // 연결해줘서 동작 실행
                <button
                  onClick={() => {
                    cancel(index);
                  }}
                >
                  cancle
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
