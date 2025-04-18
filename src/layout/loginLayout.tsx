import React, { useState } from "react"
import { DiffrentHeader } from "../components/diffrentHeader"
import { BottomTab } from "../navigation/BottomTab"
import { ArrowIcon } from "../(FSD)/shared/ui/ArrowIcon"
import * as styles from "../styles/style.css"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { SingInUser } from "../(FSD)/entities/user_action"
import { AppDispatch } from "../store/store"

const text = {
    signInText: '로그인',
    signUpText: '회원가입'
}

export const LoginLayout = () => {

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const body = {id, password};

        dispatch(SingInUser(body)).then((res: any) => {
            if(!res.payload.loginSuccess) {
                navigate("/home");
            } else {
                alert("로그인 실패");
            };
        });
    }

    return (
        <>
            <DiffrentHeader>
                <div className={styles.LoginFlexHeader}>
                    <ArrowIcon />
                    <div className={styles.SignText}>{text.signInText}</div>
                </div>
            </DiffrentHeader>
            <form onSubmit={handleSubmit} className={styles.InputContainer}>
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
            </form>
            <div><button onClick={handleTrim} >click</button></div>
            <BottomTab />
        </>
    )
}