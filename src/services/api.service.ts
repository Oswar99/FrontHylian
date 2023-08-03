import axios from "axios";
import { LoginProps } from "src/app/login/login.component";

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

