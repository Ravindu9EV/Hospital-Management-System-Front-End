export class Patient{
    public id:number;
    public name:string;
    public address:string;
    public bloodGroup:string;
    public category:string;
    public gender:string;
    public contact:string;
    public note:string;
    public age:string;
    public allergies:string;


    constructor(id:number,name:string,address:string,bloodGroup:string,category:string,gender:string,
        contact:string,note:string,age:string,allergies:string
    ){
        this.id=id;
        this.name=name;
        this.address=address;
        this.bloodGroup=bloodGroup;
        this.category=category;
        this.gender=gender;
        this.contact=contact;
        this.note=note;
        this.age=age;
        this.allergies=address
    }

    public getId():number{
        return this.id;
    }
    public getName():string{
        return this.name;
    }
    public getAddress():string{
        return this.address;
    }
    public getBloodGroup():string{
        return this.bloodGroup;
    }
    public getCategory():string{
        return this.category;
    }
    public getGender():string{
        return this.gender;
    }
    public getContact():string{
        return this.contact;
    }
    public getNote():string{
        return this.note;
    }
    public getAge():string{
        return this.age
    }
    public getAllergies():string{
        return this.allergies;
    }
    
}