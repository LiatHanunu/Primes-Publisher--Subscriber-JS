import primesGenerator from "./publishers/primesGenerator.js";
import prime1 from "./clients/prime1.js";
import isMersen from "./clients/mersenne.js";
import prime4Digits from "./clients/prime4Digits.js";

const primes = new primesGenerator()

primes.on('prime',isMersen)
primes.on('prime',prime1)
primes.on('prime',prime4Digits)

const startPrimeEvent =(limit)=>{
    primes.primeEvent(limit)
}

export { startPrimeEvent }