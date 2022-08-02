import MyEvent from "../common/MyEvent.js"

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false
        }
    } return true
}

function primeNumbers(limit) {
    const primeNumbersList = [2]
    for (let i = 3; i < limit; i++) {
        if (isPrime(i)) {
            primeNumbersList.push(i)
        }
    }
    return primeNumbersList
}

class primesGenerator extends MyEvent {
    primeEvent(limit) {
        const primeList = primeNumbers(limit)
        const getNext = () => {
            if (!primeList[0]) { clearInterval(intervalID) }
            else {
                this.emit('prime', primeList.shift())
            }
        }
        const intervalID = setInterval(getNext, 1000);
    }
}

export default primesGenerator