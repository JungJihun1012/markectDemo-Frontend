import { useState } from "react"
import { DiffrentHeader } from "../components/diffrentHeader"
import { BottomTab } from "../navigation/BottomTab"
import { ArrowIcon } from "../shared/ui/ArrowIcon"
import * as styles from "../styles/style.css"

const text = {
    signInText: '로그인',
    signUpText: '회원가입'
}

export const LoginLayout = () => {
    const [id, setId] = useState<HTMLInputElement | any>("");
    const [password, setPassword] = useState<HTMLInputElement | any>("");

    const handleTrim = () => {
        if (!id.trim()) return setId("");
        alert('아이디를 입력해주세요.');
        id.focus();

        if (!password.trim()) return setPassword("");
        alert("비밀번호를 입력해주세요.");
        password.focus();
    }

    return (
        <>
            <DiffrentHeader>
                <div className={styles.LoginFlexHeader}>
                    <ArrowIcon />
                    <div className={styles.SignText}>{text.signInText}</div>
                </div>
            </DiffrentHeader>
            <div className={styles.InputContainer}>
                <div className={styles.Text}>
                    {text.signInText}
                </div>
                <input type="text" placeholder="아이디(이메일)" className={styles.Input} />
                <input type="text" placeholder="비밀번호" className={styles.Input} />
                <div className={styles.InputContent}>
                    <input type="checkbox" />
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