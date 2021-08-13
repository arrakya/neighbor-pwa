export class MenuModel {
    Id: number;
    Name: string;
    ClassValue: string;
    RouterLink: string;

    constructor(id:number, name:string, classValue:string, routerLink:string){
        this.Id = id;
        this.Name = name;
        this.ClassValue = classValue;
        this.RouterLink = routerLink;
    }
}