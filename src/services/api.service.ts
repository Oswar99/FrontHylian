import axios from "axios";
import { LoginProps } from "src/app/login/login.component";
import { IProjectData, IUser } from "src/helpers/types";

axios.interceptors.request.use(
    (config:any) =>{
        config.headers.authorization = `Bearer ${localStorage.getItem("tk")}`;
        return config;
    },
    error =>{
        return Promise.reject(error);
    }
);

export const query: string = "https://api.grupozdd.com";

//users

export function login(data: LoginProps): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/login`, data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function Register(data: IUser):Promise<any>{
    return new Promise<any>((resolve)=>{
        axios.post(`${query}/register`, data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    })
}

export function updateUser(data: IUser):Promise<any>{
    return new Promise<any>((resolve)=>{
        axios.put(`${query}/users`, {data: data})
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    })
}

export function verifyUser(tk:string): Promise<any>{
    return new Promise<any>( resolve => {
        axios.get(`${query}/login/${tk}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function findUSer(search:string): Promise<any>{
    return new Promise<any>( resolve => {
        axios.get(`${query}/users?search=${search}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function getUserById(id:string): Promise<any>{
    return new Promise<any>( resolve => {
        axios.get(`${query}/users/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};


export function followUser(data: {id:string}): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/follow/users`, data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function unfollowUser(data: {id:string}): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/follow/users`, data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function getFollowedUsers(): Promise<any>{
    return new Promise<any>( resolve => {
        axios.get(`${query}/follow/users`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};





//projects

export function newProject(data: IProjectData): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/project`, data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function deleteProject(id:string): Promise<any>{
    return new Promise<any>( resolve => {
        axios.delete(`${query}/project/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function getProjectsByUser(type: string): Promise<any>{
    return new Promise<any>( resolve => {
        axios.get(`${query}/project?type=${type}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function getProjectsByFather(father: string = "root"): Promise<any>{
    return new Promise<any>( resolve => {
        axios.get(`${query}/v2/project?father=${father}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};


export function getProjectById(id:string): Promise<any>{
    return new Promise<any>( resolve => {
        axios.get(`${query}/project/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function updateProjectById(id:string, data:IProjectData): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/project/${id}`, {data: data})
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function shareWithUser(body: {project: string, id: string, carpet: boolean}): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/share`, body)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function deleteShare(project: string, user: string): Promise<any>{
    return new Promise<any>( resolve => {
        axios.delete(`${query}/share?project=${project}&user=${user}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function getShares(id:string): Promise<any>{
    return new Promise<any>( resolve => {
        axios.get(`${query}/share?id=${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function getShareByUser(): Promise<any>{
    return new Promise<any>( resolve => {
        axios.get(`${query}/v2/share`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function postFile(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/files`, {file: data})
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
};
