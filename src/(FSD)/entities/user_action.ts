import axios from "axios";
import {AnyAction, ThunkAction} from '@reduxjs/toolkit';
import { RootState } from "../../store/store";

interface LoginResponse {
    loginSuccess: boolean;
    isAdmin?: boolean;
    userId: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export const SingInUser = (
    dataToSubmit: { id: string, password: string }
): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        try {
            const res = await fetch(`${import.meta.env.BACKEND_PORT_NUMBER_VITE_ENV}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSubmit)
            });
            const data: LoginResponse = await res.json();
            if (!res.ok) {
                throw new Error(data.message || "failed SingIn")
            }
            dispatch({
                type: "signIn_user",
                payload: data
            });
        } catch (error) {
            console.error("Login deburging error", error);
        }
    }
}

export const SignUpUser = (dataToSubmit: { id: string, password: string, confirmPassword: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async (dispatch: any) => {
        const response = await fetch(`${import.meta.env.BACKEND_PORT_NUMBER_VITE_ENV}/api/auth/register`, {
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