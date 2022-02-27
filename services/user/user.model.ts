export interface UserInfo {
    username: string;
    email: string;
    password: string;
    remember: boolean;
}

export interface IUserChangePassword {
    email: string;
    password: string;
    newPassword: string;
}