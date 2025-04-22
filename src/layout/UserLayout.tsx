import { ChangeEvent, useEffect, useState } from 'react';
import { ArrowIcon } from '../(FSD)/shared/ui/ArrowIcon';
import { BottomTab } from '../navigation/BottomTab';
import * as styles from '../styles/style.css';
import { varsObj } from '../styles/theme/styleVar.css';
import { exampleUsernames } from '../types/tpyes';

const text = {
    text: 'My 메뉴',
    mainText: exampleUsernames
}

export const UserLayout = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [uploadedImage, setUploadedImage] = useState<string>('');
    const [uploadedFile, setUploadedFile] = useState<File | null | string >(null);

    // 예시로 데이터 있는지 확인
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setIsLogin(!!token);
    }, []);
    const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target;
        if(input.files) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageDataUrl = e.target?.result as string;
                setUploadedImage(imageDataUrl);
            };
            reader.readAsDataURL(file);

            setUploadedFile(file);
        }
    }
    return (
        <>
            <div className={styles.LoginFlexHeader}>
                <div onClick={() => window.location.href='/'}>
                    <ArrowIcon/>
                </div>
                <div className={styles.SignText}>{text.text}</div>
            </div>
            <div>
                {isLogin ? (
                    <div className={styles.RegisterContent} style={{backgroundColor: varsObj.color.headerColor}}>
                        <div className={styles.RegsiterContainer} style={{backgroundColor: varsObj.color.headerColor}}>
                            <div>dw</div>
                        </div>
                    </div>
                ): (
                    <div
                    style={{
                        maxWidth: 370,
                        padding: 8,
                        margin: 'auto'
                    }}
                    >
                        {uploadedImage ? (
                            <img src={uploadedImage}></img>
                        ): (
                            <img src={myData}></img>
                        )}
                        <div className={styles.RegsiterContainer}
                        style={{
                            backgroundColor: varsObj.color.headerColor,
                            height: 300,
                            borderRadius: 16,
                        }}>
                            <div>
                                <label htmlFor="file-input">
                                    <img src="" alt="img-edit-button" />
                                </label>
                                <input
                                    type="file"
                                    id='file-input'
                                    accept='image/png, image/gif, image/jpeg'
                                    onChange={handleImgChange}
                                />
                            </div>
                            <div>{text.mainText[0]}</div>
                        </div>
                    </div>
                )}
            </div>
            <BottomTab/>
        </>
    )
}