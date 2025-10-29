# React 기본 개념 정리

React는 UI를 만들기 위한 **JavaScript 라이브러리**로, 화면을 **컴포넌트 단위**로 나누어 관리한다.  
상태(state)가 바뀌면 자동으로 필요한 부분만 다시 렌더링하며, **Virtual DOM**을 통해 성능을 최적화한다.

---

## JSX (JavaScript XML)
React에서 HTML처럼 보이는 코드를 JavaScript 안에 작성할 수 있는 문법 확장이다.  
컴파일 시 `React.createElement()`로 변환된다.

```jsx
const element = <h1>Hello React</h1>;
JSX는 반드시 하나의 루트 요소만 반환해야 하며, 중괄호 {} 로 JavaScript 표현식을 삽입할 수 있다.

컴포넌트 (Component)
컴포넌트는 React 앱의 기본 단위로, UI를 재사용 가능한 코드 블록으로 나눈 것이다.
함수형 컴포넌트가 기본이며, props를 통해 데이터를 전달받는다.

jsx
코드 복사
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="한별" />;
}
컴포넌트는 독립적, 재사용 가능, 조합 가능해야 한다.

Props
Props는 부모 컴포넌트가 자식 컴포넌트로 전달하는 읽기 전용 데이터다.
컴포넌트 외부에서 값을 주입하며, 내부에서 수정할 수 없다.

jsx
코드 복사
function Greeting(props) {
  return <p>안녕, {props.name}</p>;
}

<Greeting name="React" />;
Props는 변경 불가능(immutable)하므로, 화면 업데이트가 필요할 땐 State를 사용한다.

State
State는 컴포넌트 내부에서 관리되는 변화 가능한 데이터다.
값이 바뀌면 해당 컴포넌트만 다시 렌더링된다.

jsx
코드 복사
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
useState는 React Hook으로 상태값과 그 값을 변경하는 함수를 제공한다.

State는 컴포넌트마다 독립적으로 존재한다.

이벤트 처리
React의 이벤트는 HTML과 달리 camelCase로 작성한다.
이벤트 핸들러에는 함수 참조를 전달해야 한다.

jsx
코드 복사
function Button() {
  function handleClick() {
    alert("버튼 클릭됨");
  }

  return <button onClick={handleClick}>Click</button>;
}
JSX에서는 문자열이 아닌 함수를 직접 전달한다.

Hook
Hook은 함수형 컴포넌트에서 상태 관리나 생명주기 기능을 사용할 수 있게 하는 기능이다.

Hook	설명
useState	상태 관리
useEffect	컴포넌트 렌더링 후 동작, 생명주기 제어
useRef	DOM 접근 및 값 유지
useContext	전역 상태 공유
useMemo / useCallback	성능 최적화

jsx
코드 복사
import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return <p>Time: {time}</p>;
}
Virtual DOM
React는 실제 DOM을 직접 조작하지 않고 Virtual DOM(가상 DOM) 을 사용한다.
메모리에 가상의 DOM 트리를 만들어 변경 전후를 비교(diffing)하고, 바뀐 부분만 실제 DOM에 반영한다.

장점:

전체 렌더링 대신 변경된 부분만 업데이트 → 빠름

브라우저의 렌더링 부담 감소

예측 가능한 UI 업데이트 가능

데이터 흐름
React는 단방향 데이터 흐름을 따른다.
데이터는 부모 → 자식 방향으로만 전달된다.
이 덕분에 상태 변경의 원인을 추적하기 쉽고, 디버깅이 단순하다.

