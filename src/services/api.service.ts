import axios from "axios";
import { LoginProps } from "src/app/login/login.component";
import { IProjectData } from "src/helpers/types";

axios.interceptors.request.use(
    (config:any) =>{
        config.headers.authorization = `Bearer ${localStorage.getItem("tk")}`;
        return config;
    },
    error =>{
        return Promise.reject(error);
    }
);

const query: string = "http://localhost:3000";

//users

export function login(data: LoginProps): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/login`, data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};

export function verifyUser(tk:string): Promise<any>{
    return new Promise<any>( resolve => {
        axios.get(`${query}/login/${tk}`)
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

export function getProjectsByUser(): Promise<any>{
    return new Promise<any>( resolve => {
        axios.get(`${query}/project`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};
