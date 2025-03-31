import { loginHeaderRoot } from "../styles/loginHeader.css";

export const DiffrentHeader = ({children}: any) => {
    return (
        <header className={loginHeaderRoot}>
            {children}
        </header>
    );
};