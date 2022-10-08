class Cylinder
{
    constructor(r,h){
        this.radius=r;
        this.heigth=h;
    }

    getVolume(){
        let vol;
        vol=Math.PI*(this.radius**2)*this.heigth;
        return vol.toFixed(4);
    }

};

class Sphere
{
    constructor(r){
        this.radius=r;
    }

    getVolume(){
        let vol;
        vol=4*(Math.PI*(this.radius**3))/3;
        return vol.toFixed(4);
    }
};

class Cone
{
    constructor(r,h){
        this.radius=r;
        this.heigth=h;
    }

    getVolume(){
        let vol;
        vol=(Math.PI*(this.radius**2)*this.heigth)/3;
        return vol.toFixed(4);
    }
};

let obj1= new Cylinder(5,10);
let obj2= new Sphere(5);
let obj3= new Cone(5,10);

console.log(obj1.getVolume());
console.log(obj2.getVolume());
console.log(obj3.getVolume());