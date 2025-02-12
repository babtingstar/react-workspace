import React from 'react';

const HomeworkPropsArray = () => {
    return (
        <div>
            <Parent/>
        </div>
    )
}

const MusicPlay = ({props1}) => {
    return (
        <div>
            <h2>🎵 음악 재생 목록</h2>
            <ul>
                {props1.map((song, index) => (
                    // <li key={index}>{song.title || "재생 목록이 없습니다"} / {song.artist}</li>
                    <li key={index}>{song.title ? ("제목 : " + song.title + " / 가수 : " + song.artist) : "재생 목록이 없습니다"}</li>
                ))}
            </ul>
        </div>
    );
};

MusicPlay.defaultProps = {
    props1: [
        {
            title: "unknown",
            artist: "unknown",
        }
    ]
}

const Tod = ({props2}) => {
    return (
        <div>
            <h2>✅ 할 일 목록</h2>
            <ul>
                {props2.map((todo, index) => (
                    <li key={index}>{todo.task || "할 일이 없습니다."} <input type="checkbox" defaultChecked={todo.done}
                                                                       disabled={!todo.task}></input></li>
                ))}
            </ul>
        </div>
    );
};

const TeamMembers = ({props3}) => {
    return (
        <div>
            <h2>👥 팀원 목록</h2>
            <ul>
                {props3.map((team, index) => (
                    <li key={index}>{team.name ? ("이름 : " + team.name + " / 역할 : " + team.role) : "등록된 팀원이 없습니다."}</li>
                ))}
            </ul>
        </div>
    );
};

const ShoppingCart = ({props4}) => {
    return (
        <div>
            <h2>🛒 쇼핑 장바구니</h2>
            <ul>
                {props4.map((shop, index) => (
                    <li key={index}>{shop.item ? ("상품명 : " + shop.item + " / 수량 : " + shop.quantity) : "장바구니가 비었습니다."}</li>
                ))}
            </ul>
        </div>
    );
};

const EventSchedule = ({props5}) => {
    return (
        <div>
            <h2>📅 행사 일정</h2>
            <ul>
                {props5.map((event, index) => (
                    <li key={index}>{event.name ? ("행사명 : " + event.name + " / 행사 일자 : " + event.date) : "예정된 행사가 없습니다."}</li>
                ))}
            </ul>
        </div>
    );
};

const Parent = () => {

    // 추후 DB 로 값 전달받거나 전달할 상태 작성

    // javascript 정규식과 같은 코드

    // javascript 공간

    const songs = [
        {title: "Attention", artist: "Charlie Puth"},
        {title: "Shape of You", artist: "Ed Sheeran"},
        {title: "Dynamite", artist: "BTS"},
        {artist: "Black Pink"}
    ]
    const tasks = [
        {task: "React 공부하기", done: false},
        {task: "운동하기", done: true},
        {task: "책 읽기", done: false},
        {done: false}
    ];
    const teamMembers = [
        {name: "김철수", role: "프론트엔드 개발자"},
        {name: "박영희", role: "백엔드 개발자"},
        {name: "이민호", role: "디자이너"},
        {role: "시스템 개발자"}
    ];
    const cartItems = [
        {item: "노트북", quantity: 1},
        {item: "무선 마우스", quantity: 2},
        {item: "키보드", quantity: 1}
    ];
    const events = [
        {name: "React 컨퍼런스", date: "2025-03-10"},
        {name: "개발자 밋업", date: "2025-04-22"},
        {name: "해커톤", date: "2025-05-15"}
    ];

    return (
        <div>
            <MusicPlay props1={songs}/>
            <Tod props2={tasks}/>
            <TeamMembers props3={teamMembers}/>
            <ShoppingCart props4={cartItems}/>
            <EventSchedule props5={events}/>
        </div>
    )
}

export default HomeworkPropsArray;