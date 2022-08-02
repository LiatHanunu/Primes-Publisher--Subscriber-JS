import chalk from 'chalk'
//this client gets a prime number, and if the prime number ends with 1 it prints it with red color
const prime1 = (num)=>{
    if(num%10 == 1){
        console.log(chalk.red(num))
    }
}

export default prime1