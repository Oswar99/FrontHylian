export interface IProjectData{
    _id?: string,
    title?: string,
    created_at?: Date |string,
    created_at_str?: string,
    public: boolean,
    shared?: boolean,
    html?: string,
    css?: string,
    js?: string,
};

export interface IUser{
    _id?: string,
    name: string,
    lastname:string,
    email:string,
    img?:string,
    type?: "ADMIN" | "ESTANDAR",
    nickname?: string,
    pass?:string,
    enabled?:boolean,
    joinTime?:Date,
    lastSession?:Date
}