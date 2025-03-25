import styled from "styled-components";
import { Header } from "../components/header";
import { BottomTab } from "../navigation/BottomTab";
import { font } from "../shared/types/theme/Font";
import { color } from "../shared/types/theme/Color";

const Text = {
    todayDinner: '오늘 저녁은 이걸로 ?'
}
const StyledContent = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: end;
    font-size: ${font.Title2};
    margin-top: 20px;
`;

const StyledText = styled.div`
    font-family: 'GowunDodum-Regular';
    color: ${color.white};
`;


const BasicLayout =({children}: any) => {
    return (
        <StyledLayout>
            <Header>
                <StyledContent>
                    <StyledText>{Text.todayDinner }</StyledText>
                </StyledContent>
            </Header>
            <main>
                {children}
            </main>
            <BottomTab/>
        </StyledLayout>
    );
}

const StyledLayout = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;
export default BasicLayout;