import axios from "axios";
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from "../../store/store";
import { LoginResponse } from "../../types/tpyes";

export const SingInUser = (
    dataToSubmit: { username: string, password: string }
): ThunkAction<Promise<LoginResponse | undefined>, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:8081/sign-in`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSubmit)
            });

            const data: LoginResponse = await res.json();
            console.log(data);

            if (!res.ok) {
                throw new Error(data.message || "failed SignIn");
            }

            dispatch({
                type: "signIn_user",
                payload: data
            });

            return data; // <-- return the actual login result
        } catch (error) {
            console.error("Login debugging error", error);
            return undefined;
        }
    }
};

export const SignUpUser = (dataToSubmit: { id: string, password: string, confirmPassword: string }) => {
    return async (dispatch: any) => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_PORT_NUMBER}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application'
            },
            body: JSON.stringify(dataToSubmit)
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'failed SingUp');
        }
        dispatch({
            type: "signUp_user",
            payload: data,
        });
    }
}

export const auth = () => {
    const req = axios.get("api/auth").then((res) => res.data);
    return {
        type: "auth_user",
        payload: req
    }
}