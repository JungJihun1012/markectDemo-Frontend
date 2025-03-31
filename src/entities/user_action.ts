export const loginUser = (dataToSubmit: {email: string, password: string}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async (dispatch: any) => {
        try {
            const res = await fetch(`http://localhost:3000/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application'
                },
                body: JSON.stringify(dataToSubmit)
            });
            const data = await res.json();
            if(!res.ok) {
                throw new Error(data.message || "failed login")
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