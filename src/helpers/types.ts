export interface IProjectData{
    _id?: string,
    title?: string,
    created_at?: Date |string,
    created_at_str?: string,
    public: boolean,
    shared?: boolean,
    html?: string,
    css?: string,
    js?: string
};