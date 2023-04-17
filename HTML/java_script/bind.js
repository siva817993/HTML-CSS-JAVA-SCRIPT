const p={
    firstname:"siva",
    lastname:"raju",
    fullname:function (){
        return this.firstname+this.lastname;
    }

};
const m=function(){
      console.log(this.fullname()+' bolloboiyna');
}
const  name= m.bind(p);
name();
