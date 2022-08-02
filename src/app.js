import primesGenerator from "./publishers/primesGenerator";
import prime1 from "./clients/prime1";
import isMersen from "./clients/mersenne";
import prime4Digits from "./clients/prime4Digits";

primesGenerator.on('prime',isMersen)
primesGenerator.on('prime',prime1)
primesGenerator.on('prime',prime4Digits)

const startPrimeEvent =(limit)=>{
    primesGenerator.primeEvent(limit)
}

export { startPrimeEvent }