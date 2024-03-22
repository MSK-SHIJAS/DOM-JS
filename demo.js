// // console.log("a")
// // setTimeout((a)=>{
// //     console.log('hello world');
// // },2000)
// // console.log('b')


// // function handlechange() {
// //     console.log("hello world");
// // } 

// let x;       // Now x is undefined
// x = 5;       // Now x is a Number
// x = "John";
// console.log(x);
// console.log(typeof(x));



// document.write('helo')?


//  a =10
//   b = 20 
// a= a+b
// b= a-b
// a = a-b
// console.log(b);
// console.log(a);



//a =20
//b =10


// var reverseBits = function(n) {
// 	let res = 0;
// 	for (let i = 0; i < 32; i++) {
// 		res = (res << 1) + (n & 1);
// 		n = n >>> 1;
// 	}

// 	return res >>> 0;
// };
// let n=00000010100101000001111010011100

// console.log(reverseBits(n));


let a = [2,4,5,6,2]
 a.forEach((p)=>console.log(p))
 let b =a.map((p)=>p*3)
 console.log(b);

 let c = a.filter((p)=>p>5)
 console.log(c);
