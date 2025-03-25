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
    flex: 1;
    background-color:  rgba(255, 255, 255, 1);
    width: 1080px;
    height: 260px;
    box-shadow: 0;
`;
const NavigationBar = styled(Link)``;