const User = ({users}) => {
    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {/* map () 형태로 데이터 불러오기 "ㅇㅇㅇ" 님은 ㅁㅁ 세 입니다."  */}
                {users.map((user, index) => {
                    return (
                        <li key={index}>{user.name}님은 {user.age}세 입니다</li>
                    )
                })}
            </ul>
        </div>
    )
}

const Product = ({products}) => {
    return (
        <div>
            <h2>제품 목록</h2>
            <ul>
                {/* map () 형태로 데이터 불러오기 제품명 - ㅇㅇㅇ, 제품가격 - ㅁㅁㅁ  */}
                {products.map((product, index) => {
                    return (
                        <li key={index}>제품명 - {product.name}, 제품가격 - {product.price}</li>
                    )
                })}
            </ul>
        </div>
    )
}

const Score = ({scores}) => {
    return (
        <div>
            <h2>학생 점수 목록</h2>
            <ul>
                {/*1. 특정 리스트를 가져와서 .순회하여 표시(   (   key,   index   ) => (  key 나 index 를 이용해서 값 표기 )    )*/}
                {/*2. 특정 리스트를 가져와서 .순회하여 표시(   (   key,   index   ) => { return (  key 나 index 를 이용해서 값 표기 ) }    )*/}
                {/*3. 특정 리스트를 가져와서 .순회하여 표시(   (   key,   index   ) => (  key 나 index 를 이용해서 값 표기 )    )*/}
                {scores.map((score, index) => (<li key={index}>이름 : {score.name}, 점수 : {score.score}</li>)
                )}
            </ul>
        </div>
    );
};

const Order = ({orders}) => {
    return (
        <div>
            <h2>주문 내역</h2>
            <ul>
                {orders.map((order, index) => {
                    return (<li key={index}>주문 메뉴 이름 : {order.item}, 수량 : {order.quantity}</li>)
                })}
            </ul>
        </div>
    );
};

const Book = ({books}) => {
    return (
        <div>
            <h2>도서 목록</h2>
            <ul>
                {books.map((prop, index) => {
                    return (
                        <li key={index}>도서명 : {prop.title}, 저자 : {prop.author}</li>
                    )
                })}
            </ul>
        </div>
    );
};

const Parent = () => {

    const userList = [
        {name: "가나다", age: 5},
        {name: "마바사", age: 15},
        {name: "아자차", age: 25}
    ];

    const productList = [
        {name: "노트북", price: 1200000},
        {name: "스마트폰", price: 800000},
        {name: "태블릿", price: 600000}
    ];

    const scoreList = [
        {name: "김영희", score: 95},
        {name: "이철수", score: 88},
        {name: "박민준", score: 76}
    ];

    const orderList = [
        {item: "커피", quantity: 2},
        {item: "샌드위치", quantity: 1},
        {item: "케이크", quantity: 3}
    ];

    const bookList = [
        {title: "자바스크립트 완벽 가이드", author: "David Flanagan"},
        {title: "리액트 프로그래밍", author: "김민수"},
        {title: "모던 프론트엔드 개발", author: "이정환"}
    ];


    return (
        <>
            {/* 각 자식 컴포넌트에 각각 전달 */}
            <User users={userList}/>
            <Product products={productList}/>
            <Score scores={scoreList}/>
            <Order orders={orderList}/>
            <Book books={bookList}/>
        </>
    )
}


const PracticePropsArray = () => {

    return (
        <div>
            {/*

            */}
            <Parent/>
        </div>
    )

}


export default PracticePropsArray;