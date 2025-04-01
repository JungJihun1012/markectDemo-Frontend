import { useState } from "react"
import { DiffrentHeader } from "../components/diffrentHeader";

export const RegisterLayout = () => {
    const [id, setId] = useState<HTMLInputElement>();
    const [password, setPassword] = useState<HTMLInputElement | any>();
    const [confirmPassword, setConfirmPassword] = useState<HTMLInputElement | any>();
    const handlePasswordCheck = () => {
        if(confirmPassword.value != password.value) {
            alert("비밀번호와 맞지 않습니다. 다시 입력해주세요.");
            confirmPassword.focus();
        };
    }
    return (
        <div>
            <DiffrentHeader>

            </DiffrentHeader>
            <main></main>
        </div>
    )
}