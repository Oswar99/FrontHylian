import * as moment from "moment";
import { IProjectData } from "./types";

export class ProjectsController{
    private projects: IProjectData[] = [];

    public addProject(data:IProjectData){
        const datatemp = {
            ...data,
            id: this.projects.length + 1,
            title: getName(),
            datetime: moment().format("DD/MM/yyyy")
        }
        this.projects.push(datatemp);
    };

    public getProjects(){
        return this.projects;
    }
}

export function getName(){
    const abc:string = "abcdefghijklmnopqrstuvwxyz123456780-"
    var name: string = "Proyecto ";
    for(let i = 0; i<8; i++){
        name = name + abc[Math.floor(Math.random() * (abc.length - 1))]
    };
    return name;
}