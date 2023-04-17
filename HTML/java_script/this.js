const p={
    firstname:"sivaraju",
    lastname:" bolliboiyna",
    fullname:function (){
        return this.firstname+this.lastname;
    }

};
const m={
    firstname:"abcd",
    lastname:"hii",
}
console.log(p.fullname.call(m));
