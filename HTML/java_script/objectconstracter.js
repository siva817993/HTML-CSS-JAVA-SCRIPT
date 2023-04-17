function p(f,l,a,d)
{
    this.f=f;
    this.l=l;
    this.a=a;
    this.d=d;
    this.display=function(){
        console.log(this.f+ ' '+this.l);
        console.log(this.a);
        console.log(this.d);
    }

}
let p1=new p("siva","krishna",25,"cse");
let p2=new p("shankar","krishna",23,"mbbs");
let p3=new p("siva","raju",21,"cse");
p1.display();
p2.display();
p3.display();