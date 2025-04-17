import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../(FSD)/entities/user_action";

interface AuthProps {
    SpecifiComponent: React.FC,
    option: boolean | null,
    adminRoute?: boolean | null;
}

export const withAuthChild: React.FC<AuthProps> = ({SpecifiComponent, option, adminRoute = null}) => {
    const AuthenticationCheck: React.FC = () => {
        const dispatch = useDispatch();
        const navigation = useNavigate();

        useEffect(() => {
            (async () => {
                try {
                    const res = await dispatch(auth()) as unknown as { payload: { isAuth: boolean, isAdmin: boolean } };
                    if(!res.payload.isAuth) {
                        if(option)
                            navigation("/login");
                    } else {
                        if(adminRoute && !res.payload.isAdmin) {
                            navigation("/home");
                        } else {
                            if(option == false) navigation("/");
                        }
                    }
                } catch (error) {
                    console.error("Error occured while authenticating", error);
                }
            }) ();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [dispatch, navigation, option, adminRoute]);
        return <SpecifiComponent/>;
    }

    return <AuthenticationCheck />;
}