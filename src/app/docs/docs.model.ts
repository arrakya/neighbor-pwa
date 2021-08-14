import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export class DocsModel {
    Id: string;
    Name: string;
    Icon: IconDefinition;
    ClassValue: string;
    Type: string;

    constructor(id:string, name:string, icon:IconDefinition, classValue:string, type:string){
        this.Id = id;
        this.Name = name;
        this.Icon = icon;
        this.ClassValue = classValue;
        this.Type = type;
    }
}