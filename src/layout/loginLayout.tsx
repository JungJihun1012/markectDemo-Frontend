import{ useState } from "react"
import { BottomTab } from "../navigation/BottomTab"
import { ArrowIcon } from "../(FSD)/shared/ui/ArrowIcon"
import * as styles from "../styles/style.css"
import { varsObj } from "../styles/theme/styleVar.css"

const text = {
    signInText: '로그인',
    signUpText: '회원가입'
}

export const LoginLayout = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [id, setId] = useState<HTMLInputElement | any>("");
    const [password, setPassword] = useState<HTMLInputElement | any>("");

    const handleTrim = () => {
        if (!id.trim()) {
            alert('아이디를 입력해주세요.');
            id.focus();
        }

        if (!password.trim()) return setPassword("");
        alert("비밀번호를 입력해주세요.");
        password.focus();
    }

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     const body = {id, password};

    //     dispatch(SingInUser(body)).then((res: any) => {
    //         if(!res.payload.loginSuccess) {
    //             navigate("/home");
    //         } else {
    //             alert("로그인 실패");
    //         };
    //     });
    // }

    return (
        <>
            <div className={styles.LoginFlexHeader}>
                <div onClick={() => window.location.href = '/'}>
                    <ArrowIcon />
                </div>
                <div className={styles.SignText}>{text.signInText}</div>
            </div>
            <form className={styles.InputContainer}>
                <div className={styles.Text}>
                    {text.signInText}
                </div>
                <input type="text" placeholder="아이디(이메일)" className={styles.Input} />
                <input type="text" placeholder="비밀번호" className={styles.Input} />
                <div className={styles.InputContent}>
                    <div className={styles.SaveId}>
                        <input type="checkbox" id="checkedId" className={styles.Check}/>
                        <label htmlFor="checkedId" className={styles.Label}></label>
                        <span>아이디 저장</span>
                    </div>
                    <div className={styles.AutoLogin}>
                        <input type="checkbox" id="checkedAutoLogin" className={styles.Check}/>
                        <label htmlFor="checkedAutoLogin" className={styles.Label}></label>
                        <span>자동 로그인</span>
                    </div>
                </div>
            </form>
            <div className={styles.ButtonContent}>
                <button onClick={handleTrim} className={styles.Button} style={{backgroundColor: varsObj.color.headerColor, color: varsObj.color.white}}>
                        {text.signInText}
                </button>
                <button onClick={handleTrim} className={styles.Button} style={{border: `1px solid ${varsObj.color.headerColor}`, backgroundColor: varsObj.color.white, color: varsObj.color.headerColor}}>
                        {text.signUpText}
                </button>
            </div>
            <BottomTab />
        </>
    )
}