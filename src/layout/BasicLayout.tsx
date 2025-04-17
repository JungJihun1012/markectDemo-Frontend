import { Header } from "../components/header";
import { BottomTab } from "../navigation/BottomTab";
import { SearchIcon } from "../shared/ui/SearchIcon";
import * as styles from '../styles/BasicLayout.css';

const Text = {
    todayDinner: '오늘 저녁은 이걸로 ?'
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BasicLayout = ({ children }: any) => {
    return (
        <div className={styles.styledLayout}>
            <Header>
                <div className={styles.styledContent}>
                    <div className={styles.styledText}>{Text.todayDinner}</div>
                    <label className={styles.labelStyle}>
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="매장 또는 메뉴 입력"
                            className={styles.inputStyle}
                        />
                    </label>
                </div>
            </Header>
            <main>{children}</main>
            <BottomTab />
        </div>
    );
};

export default BasicLayout;
