import { DiffrentHeader } from "../components/diffrentHeader"
import { BottomTab } from "../navigation/BottomTab"

export const LoginLayout = ({ children }: any) => {
    return (
        <>
            <DiffrentHeader>
                <main>
                    {children}
                </main>
            </DiffrentHeader>
            <BottomTab />
        </>
    )
}