import { SecondHeader } from "../styles/style.css";

export const DiffrentHeader = ({children}: any) => {
    return (
        <header className={SecondHeader}>
            {children}
        </header>
    );
};