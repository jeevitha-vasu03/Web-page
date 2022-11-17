export class Model{
    imageUrls ="";
    name ="";
    description ="";

    constructor(imageUrls:string, name:string, desc:string){
        this.imageUrls = imageUrls;
        this.name =name;
        this.description = desc;
    }
}