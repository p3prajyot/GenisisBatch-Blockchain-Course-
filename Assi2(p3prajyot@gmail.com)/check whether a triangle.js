function check_triangle(s1,s2,s3)
{
    if(s1==s2 && s2==s3)
    return "equilateral triangle";

    else if(s1==s2 || s2==s3 || s1==s3)
    return "Isoceles triangle";

    else
    return "scalene triangle";
}

let s=check_triangle(23,7,9);
console.log(s);