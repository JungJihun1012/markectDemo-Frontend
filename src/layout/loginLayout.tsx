import { DiffrentHeader } from "../components/diffrentHeader"
import { BottomTab } from "../navigation/BottomTab"
import { SignText } from "../styles/style.css"

const text = {
    signInText: '로그인',
    signUpText: '회원가입'
}

export const LoginLayout = ({ children }: any) => {
    return (
        <div>
            <DiffrentHeader>
                <img src="" alt="" />
                <div className={SignText}>{text.signInText}</div>
            </DiffrentHeader>
            <main>
                {children}
            </main>
            <BottomTab />
        </div>
    )
}