import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeIcon } from "../shared/ui/HomeIcon";
import { HeartIcon } from "../shared/ui/HeartIcon";
import { OrderIcon } from "../shared/ui/OrderIcon";
import { UserIcon } from "../shared/ui/UserIcon";

export const BottomTab = () => {
    // const location = useLocation();
    return (
        <Container>
            <NavigationBar to={'/home'}> 
                <HomeIcon/>
            </NavigationBar>
            <NavigationBar to={'/save'}>
                <HeartIcon/>
            </NavigationBar>
            <NavigationBar to={'/order'}>
                <OrderIcon />
            </NavigationBar>
            <NavigationBar to={'/user'}>
                <UserIcon/>
            </NavigationBar>
        </Container>
    )
}

const Container = styled.div`
    background-color: rgba(255, 255, 255, 1);
    width: 100%;
    height: 8.5%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border: 1px solid black;
    position: fixed;
    bottom: 0;
    z-index: 1;
`;

const NavigationBar = styled(Link)`

`;