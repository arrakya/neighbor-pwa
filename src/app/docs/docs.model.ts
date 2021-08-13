import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export class DocsModel {
    Id: number;
    Name: string;
    Icon: IconDefinition;
    ClassValue: string;

    constructor(id:number, name:string, icon:IconDefinition, classValue:string){
        this.Id = id;
        this.Name = name;
        this.Icon = icon;
        this.ClassValue = classValue;
    }
}