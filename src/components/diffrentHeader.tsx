import { SecondHeader } from "../styles/style.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DiffrentHeader = ({children}: any) => {
    return (
        <header className={SecondHeader}>
            {children}
        </header>
    );
};