import { MainHeader } from "../styles/style.css"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Header = ({children}: any) => {
    return (
        <header className={MainHeader}>
            {children}
        </header>
    )
}
