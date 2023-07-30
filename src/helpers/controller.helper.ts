import * as moment from "moment";
import { IProjectData } from "./types";

export class ProjectsController{
    private projects: IProjectData[] = [];

    public addProject(data:IProjectData){
        const pjls = localStorage.getItem("pjls");
        var pj: IProjectData[];
        const datatemp = {
            ...data,
            id: this.projects.length + 1,
            title: getName(),
            datetime: moment().format("DD/MM/yyyy")
        }
        if(pjls){
            pj = JSON.parse(pjls);
            pj.push(datatemp);
        }else{
            pj = [ datatemp ]
        }
        localStorage.setItem("pjls", JSON.stringify(pj))
    };

    public getProjects(){
        const pjls = localStorage.getItem("pjls");
        if(pjls){
            console.log(pjls)
            return JSON.parse(pjls);
        }else{
            return this.projects;
        }

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