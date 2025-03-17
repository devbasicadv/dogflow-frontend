export interface IMemberGetResponse{
    id: number,
    name: string,
    surname: string,
    dogName: string,
    email: string,
    phoneNumber: string
}

export interface IMemberCreateRequest{
    name: string,
    surname: string,
    dogName: string,
    email: string,
    phoneNumber: string
}

export interface IMemberUpdateRequest{
    name: string,
    surname: string,
    dogName: string
}