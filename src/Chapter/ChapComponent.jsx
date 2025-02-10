// function 과 const 의차이 확인하기
/*
간단메서드나 클래스 = function
간닿난 함수나 콜백 = const
 */
function ChapComponent() {
    // 자바스크립트

    return (
        <div>
            {/* html 태그 사용*/}
        </div>
    )
}

function 함수() {
    // 자바스크립트

    return (
        <div>
            {/* html 태그 사용 */}
        </div>
    )
}

// 화살표함수로 컴포넌트 선언
// function 보다는 const 형식을 주로 많이 사용하는 편
const 화살표함수 = () => {
    //자바스크립트
    return (
        <div>
            {/* html 태그 사용 */}
        </div>
    )
}

const 객체 = {
    value : 10,

    //function 익명함수 function(){}
    normalFunc : function(){
        console.log(this.value) // this 는 객체를 가리킴
    },
    //const 익명함수 () => {}
    arrowFunc : () => {
        console.log(this.value)
}
};
// 메서드란 함수의 한 종류로 단독으로 쓰이지 못하며, . 뒤에 메서드 기능명칭 작성
객체.normalFunc(); // 객체 내의 메서드 형식으로 호출 // 10 출력
객체.arrowFunc(); // 객체 내의 메서드 형식으로 함수 호출 // undefined, 값을 가져오지 못함
// js 형식과 비교
console.log(더하기(2, 3));
console.log(add1(2, 3));
console.log(add2(2, 3));


function 더하기(a, b) {
    return a + b;
}

// function 의 경우 위 아래 구분 없이 기능을 호출
// const 의 경우 const 기능 명칭이 선언되기 전에 호출 사용 불가 작성 순서 중요
const add1 = (a, b) => {
    return a + b;
}
// 위 add1 과 add2 가 동일한 기능
// return 에 단일코드 작서앟ㄹ 경우 {} 와 return 생략 가능
const add2 = (a, b) => a + b;

console.log(add1(2, 3));
console.log(add2(2, 3));


// 내보내기 기본으로 어떤 기능을;
export default ChapComponent;