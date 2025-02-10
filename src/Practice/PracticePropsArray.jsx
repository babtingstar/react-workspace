const User = () => {
    return(
        <div>
            <h2>사용자 목록</h2>
            <ul>
            {/* map () 형태로 데이터 불러오기 "ㅇㅇㅇ" 님은 ㅁㅁ 세 입니다."  */}
            </ul>
        </div>
    )
}

const Product = () => {
    return(
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {/* map () 형태로 데이터 불러오기 제품명 - ㅇㅇㅇ, 제품가격 - ㅁㅁㅁ  */}
            </ul>
        </div>
    )
}

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

    return (
        <>
            {/* 각 자식 컴포넌트에 각각 전달 */}
            <User users = {userList}/>
            <ProductList={productList} />
        </>
    )
}


const PracticePropsArray = () => {

    return (
        <div>

        </div>
    )

}


export default PracticePropsArray;