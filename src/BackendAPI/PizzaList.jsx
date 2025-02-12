import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const PizzaList = (props) => {

    const [pizzas, setPizzas] = useState([]);

    /*
    () => {}

    소괄호나 중괄호에 들어갈 변수 이름이나 기능이 하나만 존재한다면 괄호 생략 가능
    변수 이름이나 기능이 두 가지 이상 존재한다면 괄호를 필수로 작성
    예시 :
             useEffect(   () => {}, []    )
             useEffect(   event => {}, []    )               : 소괄호 생략
             useEffect(   () => alert("안녕!"), []    )      : 중괄호 생략
             useEffect(   event => alert(event), []    )     : 모두 생략
             useEffect(   (event) => {alert(event)}, []    ) : 모두 사용

             useEffect(   (event, xyz) => {                  : 소괄호, 중괄호 모두 생략 불가
                                           setPizzas("피자");
                                           alert(event);
                                            }, [])

             .then(     () => {}    )
             .then(     (res) => {setPizzas(res.data)}      )   : 모두 사용
             .then(     res => {setPizzas(res.data)}      )     : 소괄호 생략 / 중괄호 사용
             .then(     (res) => setPizzas(res.data)      )     : 소괄호 사용 / 중괄호 생략
             .then(     res => setPizzas(res.data)      )       : 모두 생략

             .then(     ( res, rep ) => {                        : 모두 생략 불가
                                          setPizzas(res.data)
                                          alert("message");
                                         }      )

     */
    useEffect(() => {
        axios
            .get("http://localhost:8080/api/pizzas")
            .then(res => { // res = response = 응답
                setPizzas(res.data); // res.data = get 으로 전달받은 데이터를 -> setPizzas 에 리스트로 저장
            })
            .catch(() => {
                alert("백엔드에서 데이터 가져오기를 실패했습니다.")
            })
    }, []);

    return (
        <div>
            {pizzas.map((pizza) => {
                return (<div>
                        <div key={pizza.id}>
                            <h3>{pizza.name}</h3>
                            <p>가격 : {pizza.price} 원</p>
                            <p>{pizza.description}</p>
                            {/* react 는 a 태그 대신에 Link 태그를 이용하여 이동하는 경로 설정 */}
                            {/* 경로 이동의 경우 react-router-dom 을 설치하여 Link를 사용할 수 있음 */}
                            <Link to={`/pizza/detail/${pizza.id}`}>
                                <button>상세보기</button>
                            </Link>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default PizzaList;