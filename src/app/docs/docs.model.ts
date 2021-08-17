import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export class DocsModel {
    Id: string;
    Name: string;
    Icon: IconDefinition;
    ClassValue: string;
    Type: string;
    RawChilds?: any[] | null;
    Parent?: DocsModel | null;

    constructor(id:string, name:string, icon:IconDefinition, classValue:string, type:string, rawChilds?: any[] | null, parent?: DocsModel | null){
        this.Id = id;
        this.Name = name;
        this.Icon = icon;
        this.ClassValue = classValue;
        this.Type = type;
        this.RawChilds = rawChilds;
        this.Parent = parent;
    }
}