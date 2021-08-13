export class MenuModel {
    Id: number;
    Name: string;
    ClassValue: string;

    constructor(id:number, name:string, classValue:string){
        this.Id = id;
        this.Name = name;
        this.ClassValue = classValue;
    }
}