import axios from "axios";
import {useState} from "react";

const ChapAxios = () => {

    const [데이터, set데이터] = useState("");

    /*
     Axios 란?
     fetch 보다 간결하고 자동으로 JSON 변환 및 에러 처리를 지원하는 http 요청 라이브러리

     라이브러리 :   기술 제공 업체 < 개발자
                    특정 언어에서 추가적으로 필요한 기능이 모여있는 도서관 같은 개념
                    특정 언어 기능이 보관되어 있는 도서관에서 개발자가 필요한 기능을 가져와서 사용
     프레임워크 :   기술 제공 업체 > 개발자
                    특정 언어에서 추가적으로 필요한 기능이 모여있는 도서관 같은 개념은 동일하지만
                    개발자가 필요한 기능을 가져와서 사용하는데 기준과 제한이 존재

     1. 설치
     npm install axios
     npm i axios
     yarn add axios
     */

    // axios 기본 코드 방식 : GET 방식
    axios
        .get("api url 주소 작성")
        .then( // 위 주소에서 데이터 가져오기를 성공했다면
            (res) => {
                set데이터(res.data); // 자동으로 JSON 변환된 데이터 활용
                alert("데이터 가져오기 성공");
            }
        )
        .catch( // 위 주소에서 데이터를 성공적으로 가져오지 못했다면
            (error) => {
                alert("데이터를 가져오는 중 문제가 발생했습니다 : " + error);
            }
        )

    // axios 기본 코드 방식 : POST 방식 : 파일 X 문자 형식만 전달
    axios
        .post("api url 주소 작성", {
            title: '제목',
            description: 'DB에 저장할 설명'
        })
        .then( // 위 주소에서 데이터 가져오기를 성공했다면
            (res) => {
                set데이터(res.data); // 자동으로 JSON 변환된 데이터 활용
                alert("데이터 가져오기 성공");
            }
        )
        .catch( // 위 주소에서 데이터를 성공적으로 가져오지 못했다면
            (error) => {
                alert("데이터를 가져오는 중 문제가 발생했습니다 : " + error);
            }
        )

    // axios 기본 코드 방식 : POST 방식 : 파일 형식 포함해서 전달
    const formdata = new FormData(); // 자바스크립트에서 기본으로 내장되어 있는 기능
    formdata.append('title', '제목');
    formdata.append('description', 'DB에 저장할 설명');
    // formdata.append('image_file', file); // <input type = "file"> 에서 가져온 파일 객체 설정

    axios
        .post("api url 주소 작성",
            formdata,
            {headers: {'Content-Type': 'multipart/form-data'}})
        .then( // 위 주소에서 데이터 가져오기를 성공했다면
            (res) => {
                set데이터(res.data); // 자동으로 JSON 변환된 데이터 활용
                alert("데이터 가져오기 성공");
            }
        )
        .catch( // 위 주소에서 데이터를 성공적으로 가져오지 못했다면
            (error) => {
                alert("데이터를 가져오는 중 문제가 발생했습니다 : " + error);
            }
        )

    return (
        <></>
    )
}

export default ChapAxios;