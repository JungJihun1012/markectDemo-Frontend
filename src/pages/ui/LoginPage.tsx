import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { loginUser } from "../../entities/user_action";

const mockUsers = [
    { id: "user123", email: "user123@example.com", password: "password123" },
    { id: "testuser", email: "test@example.com", password: "testpass" },
  ];

export const LoginPage = () => {
    const dispatch: any = useDispatch();
    const navigate: any = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rmId, setRmId] = useState<any>(false); // rememberId
    const [keepLogin, setKeepLogin] = useState<any>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const body = {email, password};

        dispatch(loginUser(body)).then((res: any) => {
            if(res.payload.loginSuccess) {
                navigate('/home');
            } else {
                alert("failed login");
            }
        })
    }
    
    const handleLogin = () => {
        const user = mockUsers.find((us) => us.id === email || us.email === email);
        if(!user) {
            setErrorMessage("존재하지 않는 아이디(이메일)입니다.")
        };
        if(user?.password !== password) {
            setErrorMessage("비밀번호가 틀렸습니다.");
            return;
        };
        setErrorMessage("");  // 에러 메세지 초기화
        alert(`${user}님 로그인 성공하셨습니다!`);

        // 아이디 저장
        if(rmId) {
            localStorage.setItem("rememberId", email);
        } else {
            localStorage.removeItem(email);
        }

        // 로그인 저장
        if(keepLogin) {
            localStorage.setItem("loggedUser", JSON.stringify(user));
        }
    };

    return(
        <Container>
            <form method="post" onSubmit={handleSubmit}>
                <h2>로그인</h2>
                {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
                <input type="email" placeholder="아이디(이메일)" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>
                    <input
                    type="checkbox"
                    value={rmId}
                    onChange={() => setRmId(!rmId)}
                    />
                </label>
                <label>
                    <input
                    type="checkbox"
                    value={keepLogin}
                    onChange={() => setKeepLogin(!keepLogin)}
                    />
                </label>
                <button onClick={handleLogin}>로그인</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
`;
