
// function //

let c= add(4,3);

function add(a,b){
    return (a+b);
}
console.log(c)

// objects //

const object =[{
    person:{
        firstName:"nandha",
        lastName:"kumar",
        age:25,
        address:{
            city:"salem",
            state:"tamilnadu"
        }
        
    },
    person2:{
        firstName:"rohit",
        lastName:"sharma",
        age:40,
        address:{
            state:"mumbai"
            
        
    }
}
}]

console.log(object[0].person)
console.log(object[0].person2)


// object func calls //

const objectName ={
    firstName:"nandha",
    lastName:"kumar",
    age:25,
    fullName: function (){
        return this.firstName + " "+ this.lastName
    }
}


console.log((objectName.fullName()))

// covert object to string //

const objToString ={
    firstName:"nandha",
    lastName:"kumar",
    age:25,
    fullName: function (){
        return (this.firstName + " "+ this.lastName)
    }
}

const json=JSON.stringify(objToString)


console.log(typeof(json))

