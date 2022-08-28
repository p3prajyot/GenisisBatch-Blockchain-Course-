let marks=45;

if(Number.isInteger(marks))
{
switch(parseInt(marks/10))
{   
    case 10:
    case 9:console.log("S grade");
            break;
    
    case 8:console.log("A grade");
            break;
    
    case 7:console.log("B grade");
            break;
    
    case 6:console.log("C grade");
            break;

    case 5:console.log("D grade");
            break;
        
    case 4:console.log("E grade");
            break;
    
    default:console.log("Student has failed");
            break;
           
}
}

else
console.log("Invalid marks");