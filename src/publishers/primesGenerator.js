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

export default primeNumbers