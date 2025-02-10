const ChapPropsFunction = () => {
    return (
        <div>

        </div>
    )
}

const Child = ({clickHandling}) => {
    return <button onClick={clickHandling}>부모에게 받은 기능</button>
}

const Parent = () => {
    const clicking = () => {
        alert("버튼이 클릭되었습니다.");
    }
    return (
        <div>
            <h1>부모 -> 자식 함수 전달</h1>
            <Child clickHandling={clicking}/>
        </div>
    )
}

export default ChapPropsFunction;