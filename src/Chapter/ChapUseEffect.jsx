import {useEffect, useState} from "react";
import axios from "axios";
// axios 를 가져올 때 프로젝트당 최초 1회 해야할 작업 존재
// npm i axios 로 axios 기능 설치
// npm 으로 javascript 가 만든 기능이 아닌
// 회사, 개인이 만든 특정 기능을 설치하길 원한다면
// npm i 기능명칭 또는 npm install 기능명칭 설치
// https://www.npmjs.com/ 설치와 사용관련 내용이 작성되어 있음
const AxiosApiCat = () => {
    const [cat, setCat] = useState("");

    useEffect(() => {
        axios
            .get("https://api.thecatapi.com/v1/images/search")
            .then(
                (res) => {
                    setCat(res.data[0].url);
                }
            )
            .catch(
                () => {
                    alert("API 에서 데이터를 가져올 수 없습니다. 백엔드를 확인하세요.");
                }
            );
    }, [])

    return (
        <div>
            <h1>고양이 사진</h1>
            <img src={cat} alt="cat"/>
        </div>
    )
}

const FetchApiCat = () => {
    // ajax, axios 이전에 javascript 내에서 만든 api 전달,전송 기능
    // useEffect( () => function a () {}, []); // 기능을 다른 const 나 function 에서 재사용할 이유가 없으므로 function a 할 필요 없음
    // useEffect( () => {}, []);

    const [cat, setCat] = useState(""); // cat 에다가 고양이 사진이 들어있는 url 을 가져와서 화면에서 보여주기 위함

    const [loading, setLoading] = useState(true); // 데이터 가져오는 로딩 상태 추가

    useEffect(() => {

        // https://api.thecatapi.com/v1/images/search
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => res.json())
            .then(
                (data) => {
                    /* 특정 값에 데이터 전달 */
                    setCat(data[0].url); // 제공된 url 이 배열 형태이기 때문에, index 0 번째 자리한 url 주소를 가져와서 cat 에 전달할 수 있도록 설정
                }) // 데이터 가져오는데 성공(success)
            .catch(
                () => {
                    alert("API 주소에서 데이터를 가져올 수 없습니다. 백엔드를 확인하세요");
                }
            ) // 데이터 가져오는데 실패(error)
            .finally(() => setLoading(false)); // 로딩 완료 후 상태 변경
    }, []);

    return (
        <div>
            <h1>고양이 사진</h1>
            <img src={cat} alt="cat"/>
        </div>
    )
}

const ChapUseEffect = () => {
    /*
    * userEffect 컴포넌트의 생명주기 관리
    * 컴포넌트가 렌더링 될 때 특정 작업을 실행할 수 있음
    *
    * 렌더링 : 서버로부터 html 파일을 받아서 브라우저에 표기하는 과정
    * 예를 들어 ) 로그인 렌더링 : 로그인 화면에 로그인에 관련된 스타일, 스크립트 실행
    *
    * render = 주다, 제공하다, 표현하다 = 화면을 표현하다
    * 렌더링(rendering) :
    *   Backend 에서 렌더링이란 ? DB 에서 데이터를 가져와 눈에 보이는 형태로 화면에 표기
    *   Frontend 에서 렌더링이란 ? HTML CSS JS 를 눈에 보이는 형태로 화면에 표기
    * */

    // 특정 javascript 화면이 보여질 때 마다
    // 최초, 몇 초, 몇 분, 몇 시간마다 새로고침하여 데이터를 보여주는 hook

    /*
    작성방법 :
    useEffect(  (event 나 매개변수 자리) => {실행할 기능들 작성하는 공간}, [특정 값이 변경될 때 마다 실행]);
    useEffect(  () => { }, []); 만약에 [] 비어있을 경우 최초 1회 실행
    useEffect(  () => { }); 특정 js 를 호출할 때 마다 실행
    useEffect(  () => {
                        return() => {
                        // 특정 컴포넌트 사용을 더 이상 하지 않을 때
                        // 실행할 내용 작성
                        // 예를 들어) 로그아웃 했을 경우
                        }, []);
     */

    return (
        <div>
            {/*<FetchApiCat/>*/}
            <AxiosApiCat/>
        </div>
    )
}

export default ChapUseEffect;