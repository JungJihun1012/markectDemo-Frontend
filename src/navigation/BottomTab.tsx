import { Link } from "react-router-dom";
import { HomeIcon } from "../shared/ui/HomeIcon";
import { HeartIcon } from "../shared/ui/HeartIcon";
import { OrderIcon } from "../shared/ui/OrderIcon";
import { UserIcon } from "../shared/ui/UserIcon";
import * as styles from '../styles/style.css';


export const BottomTab = () => {
    // const location = useLocation();
    return (
        <div className={styles.Container}>
            <Link to={'/home'}>
                <HomeIcon />
            </Link>
            <Link to={'/save'}>
                <HeartIcon />
            </Link>
            <Link to={'/order'}>
                <OrderIcon />
            </Link>
            <Link to={'/user'}>
                <UserIcon />
            </Link>
        </div>
    )
}
