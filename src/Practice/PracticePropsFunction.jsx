import {useState} from "react";

const PracticePropsFunction = () => {
    return (
        <div>
            <Parent1/>
            <Parent2/>
            <Parent3/>
            <Parent4/>
            <Parent5/>
        </div>
    )
}

// 버튼 클릭 시 부모의 메시지 변경
const Child1 = ({handleChangeMessage}) => {

    return <button onClick={handleChangeMessage}>메세지 변경</button>
}
const Parent1 = () => {
    const [message, setMessage] = useState("기본 메세지");

    const changeMessage = () => {
        setMessage("버튼이 클릭되었습니다.");
    }

    return (
        <div>
            <h1>{message}</h1>
            <Child1 handleChangeMessage={changeMessage}/>
        </div>
    )
}

// 부모가 자식에게 숫자 증가 함수 전달
const Child2 = ({increaseNumber}) => {
    return <button onClick={increaseNumber}>숫자 증가</button>;
};
const Parent2 = () => {
    const [number, setNumber] = useState(0);

    const handleIncreaseNumber = () => {
        setNumber(number + 1);
    };

    return (
        <div>
            <h1>현재 숫자: {number}</h1>
            <Child2 increaseNumber={handleIncreaseNumber}/>
        </div>
    );
};

// 부모가 자식에게 배경색 변경 함수 전달
const Child3 = ({changeColor}) => {
    return <button onClick={changeColor}>배경색 변경</button>;
};
const Parent3 = () => {
    const [color, setColor] = useState("white");

    const handleChangeColor = () => {
        setColor(color === "white" ? "lightblue" : "white");
    };

    return (
        <div style={{backgroundColor: color, height: "100vh", textAlign: "center"}}>
            <h1>배경색 변경</h1>
            <Child3 changeColor={handleChangeColor}/>
        </div>
    );
};

// 부모가 자식에게 텍스트 변경 함수 전달
const Child4 = ({UpdateText}) => {
    return <button onClick={UpdateText}>텍스트 변경</button>;
};
const Parent4 = () => {
    const [text, setText] = useState("안녕하세요!");

    const handleUpdateText = () => {
        setText("반갑습니다!");
    };

    return (
        <div>
            <h1>{text}</h1>
            <Child4 UpdateText={handleUpdateText}/>
        </div>
    );
};

// 부모가 자식에게 좋아요 버튼 기능 전달
const Child5 = ({toggleLike}) => {
    return <button onClick={toggleLike}>좋아요/취소</button>;
};
const Parent5 = () => {
    const [liked, setLiked] = useState(false);

    const handleToggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div>
            <h1>{liked ? "❤️ 좋아요!" : "♡ 좋아요 취소"}</h1>
            <Child5 toggleLike={handleToggleLike}/>
        </div>
    );
};

export default PracticePropsFunction