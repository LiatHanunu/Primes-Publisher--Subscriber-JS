//this clients gets a prime number and if the number is also a mersenne number it prints "IT'S a MERSENNE NUMBER..." + the number.

const isMersen = (num) => {
    if (num == 2) {
        console.log(`2 IS a MERSENNE NUMBER`)
    }else{
        let i = 2
        while (i <= num) {
            (i **= 2) - 1
    
        }
        if (num == i) {
            console.log(`${num} IS a MERSENNE NUMBER`)
        }
    }

}

export default isMersen