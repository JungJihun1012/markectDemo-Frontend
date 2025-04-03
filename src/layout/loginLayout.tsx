import { useState } from "react"
import { DiffrentHeader } from "../components/diffrentHeader"
import { BottomTab } from "../navigation/BottomTab"
import { ArrowIcon } from "../shared/ui/ArrowIcon"
import { Input, InputContainer, InputTypeCheckBox, LoginFlexHeader, SignText, Text } from "../styles/style.css"

const text = {
    signInText: '로그인',
    signUpText: '회원가입'
}

export const LoginLayout = () => {
    const [id, setId] = useState<HTMLInputElement | any>("");
    const [password, setPassword] = useState<HTMLInputElement | any>("");
    
    const handleTrim = () => {
        if(id.trim() !== "") {
            setId("");
        } else {
            alert("아이디를 입력해주세요.");
            id.focus();
        }
        if(password.trim() !== "") {
            setPassword("");
        } else {
            alert("비밀번호를 입력해주세요.");
            password.focus();
        }
    }

    return (
        <>
            <DiffrentHeader>
                <div className={LoginFlexHeader}>
                    <ArrowIcon />
                    <div className={SignText}>{text.signInText}</div>
                </div>
            </DiffrentHeader>
            <div className={InputContainer}>
                <div className={Text}>
                    {text.signInText}
                </div>
                <input type="text" placeholder="아이디(이메일)" className={Input} />
                <input type="text" placeholder="비밀번호" className={Input} />
                <div>
                    <input type="checkbox" className={InputTypeCheckBox}/>
                    <label>아이디 저장</label>
                    <input type="checkbox" />
                    <label>자동 로그인</label>
                </div>
            </div>
            <div><button onClick={handleTrim} >click</button></div>
            <BottomTab />
        </>
    )
}