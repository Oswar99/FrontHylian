export interface IProjectData{
    id?: string|number,
    title?: string,
    created_at?: Date |string,
    created_at_str?: string,
    public: boolean,
    shared?: boolean,
    html?: string,
    css?: string,
    js?: string
};