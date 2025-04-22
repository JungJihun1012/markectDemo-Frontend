export interface SignUpDTO {
    username: string;
    displayName: string;
    password: string;
    email?: string;
}

export type Message = {
    role: 'system' | 'user' | 'bot';
    content: string;
}

export const existingUsernames = ['user1', 'admin', 'test'];
export const exampleUsernames = ['정지훈', '홍길동', '문빛나리'];

export const usernameRegex = /^[a-zA-Z0-9]{5,20}$/;
export const displayNameRegex = /^[a-zA-Z0-9가-힣]{2,16}$/;
export const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/;
export const emailRegex = /\S+@\S+\.\S+/;