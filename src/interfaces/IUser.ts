import type IAuth from "./IAuth";


export default interface IUser extends IAuth {
    username: string;
    avatarImageAddress: string;
    age: number;
}
