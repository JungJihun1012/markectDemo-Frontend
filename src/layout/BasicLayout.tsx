import styled from "styled-components";
import { Header } from "../components/header";
import { BottomTab } from "../navigation/BottomTab";
import { SearchIcon } from "../shared/ui/SearchIcon";

const Text = {
    todayDinner: '오늘 저녁은 이걸로 ?'
}
const StyledContent = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    margin-top: 12px;
    line-height: 2.3rem;
    > .label {
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 6px;
        height: 33px;
        padding: 0 0 0 10px;
        > input[type="text"] {
            font-size: 12px;
            color: lightgray;
            padding-left: 10px;
        }
    }
`;

const StyledText = styled.div`
    text-align: right;
    font-family: 'GowunDodum-Regular';
    color: #fff;
`;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BasicLayout =({children}: any) => {
    return (
        <StyledLayout>
            <Header>
                <StyledContent>
                    <StyledText>{Text.todayDinner }</StyledText>
                    <label className="label">
                        <SearchIcon/>
                        <input type="text" placeholder="매장 또는 메뉴 입력"></input>
                    </label>
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