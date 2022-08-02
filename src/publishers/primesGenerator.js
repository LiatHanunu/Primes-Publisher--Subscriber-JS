import events from 'events'

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false
        }
    } return true
}

function* primeNumbersGenrator(limit) {
    yield 2
    for (let i = 3; i < limit; i+=2) {
        if (isPrime(i)) {
            yield i
        }
    }

}

class primesGenerator extends events {
    primeEvent(limit) {
        const prime = primeNumbersGenrator(limit)
        const getNext = () => {
            const currentNumber = prime.next().value
            if (!currentNumber) { clearInterval(intervalID) }
            else {
                this.emit('prime', currentNumber)
            }
        }
        const intervalID = setInterval(getNext, 1000);
    }
}

export default primesGenerator