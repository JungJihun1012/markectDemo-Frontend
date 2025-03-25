import styled from "styled-components"
import { color } from "../shared/types/theme/Color";

const StyledHaeder = styled.header`
    position: fixed;
    top: 0;
    height: 12%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: ${color.headerColor};
    width: 100%;
`;

export const Header = ({children}: any) => {
    return (
        <StyledHaeder>
            {children}
        </StyledHaeder>
    )
}
