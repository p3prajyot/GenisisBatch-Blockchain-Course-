class Rectangle
{
    getArea(l,b)
    {
        let area=l*b;
        return area;
    }
};

class Square extends Rectangle
{
    
    constructor(l
        ) {
        super(l,l);
    }
   
};

let sq=new Square;
console.log(sq.getArea(5,5)); 
