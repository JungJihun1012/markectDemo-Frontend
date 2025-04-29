import React, { useState } from "react"
import { BottomTab } from "../navigation/BottomTab"
import { ArrowIcon } from "../(FSD)/shared/ui/ArrowIcon"
import * as styles from "../styles/style.css"
import { varsObj } from "../styles/theme/styleVar.css"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { SingInUser } from "../(FSD)/entities/user_action"
import { AppDispatch } from "../store/store"

const text = {
    signInText: '로그인',
    signUpText: '회원가입'
}

export const LoginLayout = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!id.trim()) {
            alert("아이디를 입력해주세요.");
            return;
        }

        if (!password.trim()) {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        const body = { id, password };

        dispatch(SingInUser(body)).then((res: any) => {
            if (res.payload.loginSuccess) {
                navigate("/home");
            } else {
                alert("로그인 실패");
            }
        });
    };

    const handleSignupClick = () => {
        navigate("/signup");
    }

    return (
        <>
            <div className={styles.LoginFlexHeader}>
                <div onClick={() => window.location.href = '/'}>
                    <ArrowIcon />
                </div>
                <div className={styles.SignText}>{text.signInText}</div>
            </div>

            <form className={styles.InputContainer} onSubmit={handleSubmit}>
                <div className={styles.Text}>
                    {text.signInText}
                </div>

                <input
                    type="text"
                    placeholder="아이디(이메일)"
                    className={styles.Input}
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="비밀번호"
                    className={styles.Input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className={styles.InputContent}>
                    <div className={styles.SaveId}>
                        <input type="checkbox" id="checkedId" className={styles.Check} />
                        <label htmlFor="checkedId" className={styles.Label}></label>
                        <span>아이디 저장</span>
                    </div>
                    <div className={styles.AutoLogin}>
                        <input type="checkbox" id="checkedAutoLogin" className={styles.Check} />
                        <label htmlFor="checkedAutoLogin" className={styles.Label}></label>
                        <span>자동 로그인</span>
                    </div>
                </div>

                <div className={styles.ButtonContent}>
                    <button
                        type="submit"
                        className={styles.Button}
                        style={{
                            backgroundColor: varsObj.color.headerColor,
                            color: varsObj.color.white
                        }}
                    >
                        {text.signInText}
                    </button>

                    <button
                        type="button"
                        onClick={handleSignupClick}
                        className={styles.Button}
                        style={{
                            border: `1px solid ${varsObj.color.headerColor}`,
                            backgroundColor: varsObj.color.white,
                            color: varsObj.color.headerColor
                        }}
                    >
                        {text.signUpText}
                    </button>
                </div>
            </form>

            <BottomTab />
        </>
    );
}
