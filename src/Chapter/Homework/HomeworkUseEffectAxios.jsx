import {useEffect, useRef, useState} from "react";
import axios from "axios";

const HomeworkUseEffect = props => {
    return (
        <div>
            <APIRandomUser/>
        </div>
    )
}

const APIRandomUser = () => {

    const [username, setUsername] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPic, setUserPic] = useState("");

    const userBtn = () => {
        axios
            .get("https://randomuser.me/api/")
            .then(res => {
                setUsername(res.data.results[0].name.first + "_" + res.data.results[0].name.last);
                setUserEmail(res.data.results[0].email);
                setUserPic(res.data.results[0].picture.medium);
            })
            .catch(err => {
                alert("userapi backend error");
            })
    }

    useEffect(() => {
        userBtn();
    }, [])

    return (
        <div>
            <h1>랜덤 유저 정보 가져오기</h1>
            <img src={userPic} height="200px" width="200px"  alt=""/>
            <p>이름 : {username}</p>
            <p>이메일 : {userEmail}</p>
        </div>
    )
}


export default HomeworkUseEffect