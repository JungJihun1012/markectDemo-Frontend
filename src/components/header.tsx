import { MainHeader } from "../styles/style.css"

export const Header = ({children}: any) => {
    return (
        <header className={MainHeader}>
            {children}
        </header>
    )
}
