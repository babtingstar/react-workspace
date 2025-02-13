import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const PizzaDetailOptionalChaining = () => {

    const {id} = useParams(); // URL에서 ID 값 가져오기
    // ajax 에서 URLSearchParams 와 같은 역할
    const [pizza, setPizza] = useState("");

    // 현재 위치를 기반으로 하여 앞으로가기 뒤로가기 와 같은 설정 가능
    /*
    hook

    useHistory() 명칭으로 동작 -> useNavigate() 명칭으로 도입

    useNavigate() React Router 에서 제공하는 페이지 이동 함수

    navigate(-1)     : 뒤로 가기
    navigate(1)      : 앞으로 가기
    navigate("/")    : 홈으로 이동
    navigate("경로") : Link 대신 위치 이동
    -> window.location.href 동일한 기능

     */
    const navigate = useNavigate();

    const backBtn = () => {
        navigate(-1);
    }

    // Springboot GeneralStore 에서 @RequestMapping("/api") @GetMapping("/pizzas/{id}") 참조해서
    // axios get 을 이용해서 상세정보 데이터 호출

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/pizzas/${id}`)
            // .get("http://localhost:8080/api/pizzas/" + id)
            .then((res) => {
                setPizza(res.data);
            })
            .catch((error) => {
                alert("PizzaDetail useEffect part error : " + error);
            })
    }, [])

    return (
        <>

            {/*
            pizza.name 과 pizza?.name 의 차이
            useEffect 로 데이터를 가져오는 속도와 페이지 보여지는 속도 차이
            pizza 의 초기값은 null 인 상태 -> null 인 상태를 보통 로딩중으로 표기

            왼쪽 값이 null 또는 undefined 라면 에러를 발생시키지 않고 undefined 로 표기
            */}

            {/*
                useEffect 로 피자데이터를 불러오는 속도보다
                PizzaDetail
            */}

            {
                pizza ? (
                        <>
                            <h1>피자 상세보기</h1>
                            <p>{pizza?.name}</p>
                            <p>가격 : {pizza?.price} 원</p>
                            <p>피자 설명 상세 보기 : {pizza?.description}</p>
                            <button onClick={backBtn}>뒤로가기</button>
                            <Link to="/pizza/add">
                                <button>메뉴 추가하기</button>
                            </Link>
                            <Link to="/pizza/add">메뉴 추가하기</Link>
                        </>
                    ) :
                    (<p>로딩 중...</p>)

            }
        </>
    )
}
export default PizzaDetailOptionalChaining;