export const SingInUser = (dataToSubmit: {id: string, password: string}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async (dispatch: any) => {
        try {
            const res = await fetch(`${import.meta.env.BACKEND_PORT_NUMBER_VITE_ENV}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application'
                },
                body: JSON.stringify(dataToSubmit)
            });
            const data = await res.json();
            if(!res.ok) {
                throw new Error(data.message || "failed SingIn")
            }
            dispatch({
                type: "login_user",
                payload: data
            });
        } catch(error) {
            console.error("Login deburging error", error);
        }
    }
}

export const SignUpUser = (dataToSubmit: {id: string, password: string, confirmPassword: string}) => {
    return async (dispatch: any) => {
        const response = await fetch(`${import.meta.env.BACKEND_PORT_NUMBER_VITE_ENV}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application'
            },
            body: JSON.stringify(dataToSubmit)
        });
        const data = await response.json();
        if(!response.ok) {
            throw new Error(data.message || 'failed SingUp');
        }
        dispatch({
            type: "signUp_user",
            payload: data,
        });
    }
}