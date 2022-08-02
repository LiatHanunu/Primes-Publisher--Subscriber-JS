//this client gets a prime number and if the number is 4 digits, it print the subtraction of it from 10,000 (like if prime number is 9973, then print 27)

const prime4Digits = (num)=>{
    
    if(Math.floor(num/10000)==0 && Math.floor(num/1000)!=0){
        console.log(10000-num)
    }
}
export default prime4Digits