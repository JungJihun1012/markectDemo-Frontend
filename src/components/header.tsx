import React from "react";
import styled from "styled-components"

const StyledHaeder = styled.header`
    flex: 1;
    height: 300px;
    border-bottom-left-radius: 71px;
    border-bottom-right-radius: 71px;
    background-color: #1CAAC9;
`;

interface headerProps {
    children: React.ReactNode
}
export const Header = ({children}: headerProps) => {
    return (
        <StyledHaeder>
            {children}
        </StyledHaeder>
    )
}
