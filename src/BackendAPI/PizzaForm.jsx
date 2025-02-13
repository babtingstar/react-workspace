import {useState} from "react";
import "./PizzaForm.css";
import axios from "axios";

/*
PizzaFormChapOne :
<input 태그 내부에 onChange = { (e) => {setData(e.target.value} }
와 같이 직접적으로 기능을 작성

PizzaFormChapTwo :
<input 태그 내부에 onChange = { handleChangeName }
처럼 기능 명칭을 호출하여 간접적으로 기능 사용
 */

const PizzaFormChapOne = () => {
// java script 형식으로 상태 관리
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("imagePath", image);

    // formData 는 이미지와 같은 파일형식을 가져올 수 있도록 설정해 주는 JavaScript 기능 사용
    const handleAddPizza = () => {
        if (!name || !price || !description) {
            let msg = "필수 입력 : \n";
            if (!name) msg += "- 피자 이름 \n";
            if (!price) msg += "- 가격\n";
            if (!description) msg += "- 설명 \n";

            alert(`모든 값을 입력하세요. ${msg}`);
            return;
        }

        axios.post("http://localhost:8080/api/pizzas",
            formData,
            {
                headers: {"Content-Type": "multipart/form-data"}
            })
            .then( // DB 에 피자 메뉴 추가를 성공했다면
                () => {
                    alert(name + "이/가 추가되었습니다. ")
                    // 기존에 사용자가 작성해놓은 input textarea 값 비워주기
                    setName("");
                    setPrice("");
                    setDescription("");
                    setImage(null);
                })
            .catch(
                (err) => {
                    alert("피자 데이터를 저장하던 중 문제가 발생했습니다.");
                    console.log(err);
                }
            )
    }

    return (
        <div className="pizza-form">
            <h1>새로운 피자 추가</h1>
            <label>피자 이름</label>
            <input type="text"
                   placeholder="피자 이름"
                   value={name}
                   onChange={(e) => {
                       setName(e.target.value)
                   }}/>
            <label>피자 가격</label>
            <input type="number" placeholder="가격"
                   value={price}
                   onChange={(e) => {
                       setPrice(e.target.value)
                   }}/>
            <textarea placeholder="피자 설명"
                      value={description}
                      onChange={(e) => {
                          setDescription(e.target.value)
                      }}/>
            <label>사진 추가</label>
            {/*
            input 태그에서 type="file" 기능 설정할 때
            두 개 이상의 파일을 가져올 수 있기 때문에
            e.target.files[0] 와 같은 파일 형식으로 이미지 데이터 맨 앞에 있는 1가지만 가져오겠다 설정
            */}
            <input type="file"
                   onChange={(e) => {
                       setImage(e.target.files[0])
                   }}/>
            <button type="button" onClick={handleAddPizza}>추가하기</button>
        </div>
    )
}

const PizzaFormChapTwo = () => {
// java script 형식으로 상태 관리
    const [pizzaName, setpizzaName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const handleChangeValue = (e) => {
        // name = input 내에서 사용하는 속성 명칭
        // value = input 내에서 사용하는 속성 명칭
        const {name, value} = e.target; // value 로

        if (name === "pizzaName") setpizzaName(value);
        else if (name === "price") setPrice(value);
        else if (name === "description") setDescription(value);
    }
    const handleAddPizza = () => {

        // formData 외부에 작성 -> 코드에 작성된 null 값으로 설정
        // 버튼 클릭할 때 사용ㅇ자가 최종으로 input 에 작성한 값으다시 호출 -> 버튼 내부에 작성
        // formData 는 이미지와 같은 파일형식을 가져올 수 있도록 설정해 주는 JavaScript 기능 사용
        const formData = new FormData();
        formData.append("name", pizzaName);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("imagePath", image);

        if (!pizzaName || !price || !description) {
            let msg = "필수 입력 : \n";
            if (!pizzaName) msg += "- 피자 이름 \n";
            if (!price) msg += "- 가격\n";
            if (!description) msg += "- 설명 \n";

            alert(`모든 값을 입력하세요. ${msg}`);
            return;
        }

        axios.post("http://localhost:8080/api/pizzas",
            formData,
            {
                headers: {"Content-Type": "multipart/form-data"}
            })
            .then( // DB 에 피자 메뉴 추가를 성공했다면
                () => {
                    alert(pizzaName + "이/가 추가되었습니다. ")
                    // 기존에 사용자가 작성해놓은 input textarea 값 비워주기
                    setpizzaName("");
                    setPrice("");
                    setDescription("");
                    setImage(null);
                })
            .catch(
                (err) => {
                    alert("피자 데이터를 저장하던 중 문제가 발생했습니다.");
                    console.log(err);
                }
            )
    }

    return (
        <div className="pizza-form">
            <h1>새로운 피자 추가</h1>
            {/*
            value 는 DB 에 값을 저장할 때 필수로 작성하지 않아도 됨
            value 는 값 초기화 설정을 하기 위해 작성
            만약에 상품 추가를 작성하고 DB 에 저장이 완료되었을 경우
            목록 페이지로 이동시킨다면 value 필요하지 않음

            왜냐하면 실질적으로 DB에 저장할 때의 값은 onChange 가
            e (event 행위) 에 대한 target (특정) value(값) 을
            set변수이름 에 변경된 값을 실시간으로 저장해주고,
            set변수이름 에 저장된 값은 변수이름으로 저장되어 DB에 저장
            onChange = { handleChangeValue }
            */}
            <label>피자 이름</label>
            <input type="text"
                   placeholder="피자 이름"
                   name="pizzaName"
                   value={pizzaName}
                   onChange={handleChangeValue}
            />
            <label>피자 가격</label>
            <input type="number"
                   placeholder="가격"
                   name="price"
                   value={price}
                   onChange={handleChangeValue}
            />
            <textarea placeholder="피자 설명"
                      name="description"
                      value={description}
                      onChange={handleChangeValue}
            />
            <label>사진 추가</label>
            {/*
            input 태그에서 type="file" 기능 설정할 때
            두 개 이상의 파일을 가져올 수 있기 때문에
            e.target.files[0] 와 같은 파일 형식으로 이미지 데이터 맨 앞에 있는 1가지만 가져오겠다 설정
            */}
            <input type="file"
                   onChange={(e) => {
                       setImage(e.target.files[0])
                   }}/>
            <button type="button" onClick={handleAddPizza}>추가하기</button>
        </div>
    )
}

export default PizzaFormChapTwo;