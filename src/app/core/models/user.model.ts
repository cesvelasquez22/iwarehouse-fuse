export class IUserLogin {
    email: string;
    password: string;
}

export class IUser {
    idEmployee: string;
    fullName: string;
    email: string;
    place: string;
    role: string;
    status: string;
}

export class IEmployee {
    altId: string;
    uid?: string;
    firstName: string;
    lastName: string;
    birthdate?: Date;
    gender?: string;
    addressLine1?: string;
    place: string;
    phone1: string;
    phone2?: string;
    profileImgUrl?: string;
    status: string;
}