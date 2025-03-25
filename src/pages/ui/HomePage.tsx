import styled from "styled-components"
import { Header } from "../../components/header";
import { BottomTab } from "../../navigation/BottomTab";

const Container = styled.div`
    flex: 1;
`;

export const HomePage = () => {
    return(
        <Container>
            <Header children={undefined}/>
            <BottomTab />
        </Container>
    )
}