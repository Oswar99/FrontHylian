export interface IProjectData{
    id?: string|number,
    title?: string,
    datetime?: Date |string,
    type:string,
    status: 1|2|3,
    html?: string,
    css?: string,
    js?: string
};