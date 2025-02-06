//ChapUseState.jsx          ChapUseState.js

import {useState} from "react";
// 리액트 자체에 내장되어 있는 기본 기능
// 컴포넌트의 상태를 관리하는 기능

function ChapUseState() {

    // 자바스크립트 변수 이름 선언하는 방법
    // 1. 단일 변수 이름 선언
    const abc = 1;

    // 2. 기본 값을 가진 변수 이름 선언, 기본값을 변형할 변수 이름 선언
    // 값을 새로 생성해서 변형할 값을 넣는 변수 이름 앞에 set을 추가하는 이유는
    // set = 설정하다 영어 뜻을 사용 set 기본값 변수 이름 작성하지 않아도 되지만
    // 코드가 길어지고 변수 선언에 있어 추후 사용할 때 오타, 잘못된 값을 가졍는 등
    // 다양한 문제가 발생할 수 있기 때문에 set 이름으로 사용
    const [xyz, setXyz] = useState(0);
    // xyz 변수 이름이 기본으로 가져야 할 값을 설정

    // edf와 setedf  모두 0의 값을 가짐
    // userState 를 사용하지 않고 일반 숫자(0)을 배열 구조로 분해해서 사용하려 했기 때문에 줌ㄴ제가 발생
    // const [edf, setEdf] = 0;

    //                          ┌> 기본 초기값에는 숫자, 배열, 문자열, 논리값 무엇이든 들어갈 수 있음
    //                      초기값 , 초기값에 새로 저장할 값 = useState(기본 초기값 설정)
    // 문제되는 변수 선언 : const [count, setCount] = 0;

    const [count, setCount] = useState(0);

    // function 명칭 const 보다 더 큰 명칭
    // function 명칭 주로 파일에서 기능 설정 명칭 사용
    // funcntion 내에 const 로 기능 명칭을 설정해주는 거시 옳음
    function 감소버튼1() {

    }

    // 어떤 이벤트가 들어왔을 때 함수를 실생하겠다
    // const 기능명칭 = (   ) => !실행할 기능들 작성}
    const 감소버튼2 =() => {
        setCount(count-1);
    }

    return (
        <div>
            <h1>useState 사용 시작하기</h1>
            {/*
            return 위에 존재하는 javascript 에서
            특정 변수 이름을 사용할 때는 {자바스크립트변수이름} 작성
            */}
            <p>현재 카운트 : {count}</p>
            <button onClick={() => setCount(count+1)}>증가</button>
            <button onClick={감소버튼2}>감소</button>
            {/*
            클릭 이벤트 내에 사용해야 하는 기능을 직접적으로 작성하는 방식은 지양
            onClick 숫자 감소 이외 추가적인 기능을 작성할 때 제한이 있기 때문에
            버튼 실행 시 실행할 함수 정의한 후 함수 이름을 가져와서 설정
            <button onClick={() => setCount(count-1)}>감소</button>

            */}
        </div>
    )
}

// 만약에 export default 가 회색 글자로 표현된다면, 외부에서 사용하지 않기 때문에 회색 글자
export default ChapUseState;