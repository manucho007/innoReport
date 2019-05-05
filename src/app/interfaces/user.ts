export interface User {
    uid: string;
    email: string;
    isAdmin?:boolean;
    photoURL?: string;
    displayName?: string;
    customData?: string;
}
