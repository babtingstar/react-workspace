import {useState} from "react";

function PracticeUseState() {
    return (
        <div>
            <h1>PracticeUseStateOne</h1>
            <UseStateOne/>
            <h1>PracticeUseStateTwo</h1>
            <UseStateTwo/>
            <h1>PracticeUseStateThree</h1>
            <UseStateThree/>
            <h1>PracticeUseStateFour</h1>
            <UseStateFour/>
        </div>
    )
}


function UseStateOne() {
    // 사용자가 입력한 텍스트를 화면에 표시하는 컴포넌트 생성
    // text 라는 변수 이름을 사용해서 값 설정
    // 초기값으로 0을 줘도 되고, 빈 값을 주고 싶다면 "" 작성
    const [text, setText] = useState('defaultText');

    // form 이나 input textarea 와 같이 키보드로 값을 입력하는 경우
    // function () {} 이나 const  = () => {} 에서
    // () = 소괗로 = 파라미터나 매개변수 명칭이 들어가는 자리에
    // e나 event 로 매개변수가 마라미터 명칭을 작성하고
    // (키보드로 값을 입력하는 것 = event  = 특정 행위가 발생했다)
    // 이벤트가 감지됐을 때 값이 무엇인지 설정
    // e        .target     .value
    const inputChange = (e) => {

        setText(e.target.value);
    }
    return (
        <div>
            {/*<input type="text" placeholder="텍스트를 입력하세요." value={text} onChange={(e) => setText(e.target.value)}/>*/}
            <input type="text" onChange={inputChange} value={text} />
            <p>{text}</p>
        </div>
    )
}

function UseStateTwo() {
    // 랜덤으로 숫자 생성하기
    // 변수 이름을 : number
    const [number, setNumber] = useState('0');
    // 랜덤 숫자 기능
    let randomNumber = Math.floor(Math.random() * 100) + 1; // const let 질문 한번 합시다
    // Math.floor(Math.random() *100) + 1;
    const randomBtn = () => {
        setNumber(randomNumber);
    }
    return (
        <div>
            <p>랜덤 숫자 : {number}</p>
            <button onClick={randomBtn}>랜덤숫자생성</button>
        </div>
    )
}

function UseStateThree() {
    // 좋아요 와 좋아요 취소를 번갈아가며 표시하는 컴포넌트 기능
    const [liked, setLiked] = useState(false); // 초기값 false


    return (
        <div>
            <button onClick={() => setLiked(!liked)}>{liked ? "좋아요" : "좋아요 취소"}</button>
            <p>{liked ? "좋아요를 눌렀습니다." : "좋아요를 눌러보세요"}</p>
        </div>
    )
}

function UseStateFour(){
    // 버튼을 클릭하면 "안녕하세요" -> "반갑습니다" 변경

    const[string, setString] = useState("안녕하세요");
    return (
        <div>
            <p>{string}</p>
            <button onClick={() => setString("반갑습니다")}>글자변경</button>
        </div>
    )
}

export default PracticeUseState;