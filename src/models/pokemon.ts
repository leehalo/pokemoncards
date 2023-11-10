export class Pokemon{
 id: number;
 name: string;
 type: string[];
description: string;
photo: string;
evolution:string;

constructor(id: number, name: string, type:string[], description: string, photo:string, evolution:string){
    this.id=id;
    this.name=name;
    this.type=type;
    this.description=description;
    this.photo=photo;
    this.evolution=evolution;
}
}

