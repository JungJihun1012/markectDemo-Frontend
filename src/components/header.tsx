import { headerRoot } from "../styles/header.css"


export const Header = ({children}: any) => {
    return (
        <header className={headerRoot}>
            {children}
        </header>
    )
}
