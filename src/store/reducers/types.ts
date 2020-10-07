export interface LogInActionT {
    type: string,
    payload: UserCredentialsT;
}

export interface UserCredentialsT {
    username: string,
    password: string;
}