const PracticeProps = () => {

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

const Child1 = ({name}) => {
    return (
        <div>
            <h2>내 이름은 : {name} 입니다.</h2>
        </div>
    )
}
const Parent1 = () => {
    return (
        <div>
            <h1>자식에게 이름 전달하기</h1>
            <Child1 name="홍길동"/>
            <Child1 name="김철수"/>
        </div>
    )
}

// 부모가 자식에게 나이와 이름을 전달

const Child2 = ({name, age}) => {
    return (
        <div>이름 : {name}, 나이 : {age}살</div>
    )
}

const Parent2 = () => {
    return (
        <div>
            <Child2 name="홍길동" age={25}/>
            <Child2 name="김철수" age={30}/>
        </div>
    )
}

// 부모가 자식에게 이름과 직업을 전달

const Child3 = ({name, job}) => {
    return (
        <div>이름 : {name}, 직업 : {job}</div>
    )
}

const Parent3 = () => {
    return (
        <div>
            <Child3 name="홍길동" age={25} job="의사"/>
            <Child3 name="김철수" age={30} job="개발자"/>
        </div>
    )
}

// 부모가 자식에게 이름과 색상을 전달

const Child4 = ({name, color}) => {
    return (
        <div>이름 : {name}, 좋아하는 색상 : {color}</div>
    )
}

const Parent4 = () => {
    return (
        <div>
            <Child4 name="홍길동" color="빨강"/>
            <Child4 name="김철수" color="파랑"/>
        </div>
    )
}

// 부모가 자식에게 이름과 재산을 전달

const Child5 = ({name, money}) => {
    return (
        <div>이름 : {name}, 재산 : {money}</div>
    )
}

const Parent5 = () => {
    return (
        <div>
            <Child5 name="홍길동" money="10"/>
            <Child5 name="김철수" money="30"/>
        </div>
    )
}



export default PracticeProps;