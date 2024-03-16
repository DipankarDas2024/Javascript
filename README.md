# Javascript
## Output
   console.log("Hello")  // Display Hello
   
   console.Table({Variable1, Variable2, Variable3,....})  // Display value and variables table wise
   
   console.log(variableName)
   
   console.log(`Hello..${variableName}..`)
   
   console.log("Value of x=" + x)

## 1. Variable
###    Variables are used to stored data in proamming languages like
       
 let x = "Javascript"; // x is the variable of let type
 
 let y = 60;  // y is the variable of let type
 
 const c = 67.8;  // c is the variable of const type

 const c = "Hello";  // c is the variable of const type
## 2. Variable type
 
 ## const : 
             The type of veriables are used when values of those variables should not changed.
       
       syntex: 
              const c = 67.8;
              const c = "Hello";
 ## let :

            This types of variables used when its values should be changes during execution of the program.
       syntex: 
              let x = "Javascript";
              let y = 60;      

## var :
             var variables are specially used for function scope or global scope declear.
       syntex:
             var carName = "Volvo";
             var numberOfCar = 7;      

 ## 3. Datatype 

      Their are two type of data in Javascript, are 

 ## Primitive
      
      Those are predefined data types in Javascript called Primitive datatypes. In this datatypes referance of memory are not directly given, only a copy of the value is given. There

      1. String
           let str = 'Hello All';
           let str = new String("Hello All");

      2. Number  : For decimal or non decimal values
           let numberOne = 57
           let numberOne = 57.87
           let numberOne = new Number(57)

      3. Boolean :  The boolean data type can accept only two values i.e. true and false.
           const isLoggedIn = false

      4. null
           let x = null;

      5. undefined
           let x;    // Value of x is undefined

      6. sysbol
            let symBol1 = Symbol("Hello")
            console.log(typeof(symBol1))   // Symbol
            console.log(symBol1)       //   Symbol(Hello)
            
      7. BigInt  : This data type can represent numbers greater than 253-1 which helps to perform operations on large numbers. The number is specified by writing ‘n’ at the end of the value

            let bigNum = 123422222222222222222222222222222222222n
            
## Non Primitive:  
        The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.

        Give direct memory reference to access value.

        let userOne = {
            name: "Dipankar Das" ,
            email: "Dip@gmail.com",
       }
       console.log(userOne.email)  //Dip@gmail.com

       let userTwo = userOne;
       userTwo.email = "DD@gmail.com" ;

       console.log(userOne.email)   //DD@gmail.com
       console.log(userTwo.email)   //DD@gmail.com

## Object
## Array
## Function
