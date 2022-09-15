# PrimesPubSubEX

###### This EX is a node EX that practices publisher-design-pattern.

*The Publish/Subscribe pattern, also known as pub/sub, is an architectural design pattern that provides a framework for exchanging messages between publishers and subscribers.
<br />
<br />This pattern involves the publisher and the subscriber relying on a message broker that relays messages from the publisher to the subscribers. The host (publisher) publishes messages (events) to a channel that subscribers can then sign up to.*

**prime Numbers Generator instructions:**

Create a prime number "service" that emits the next prime number on every second (starting from 1 until a certain limit the user chooses).
Create 3 "clients": 
1. Mersenne - needs to know when a new prime number is out there and check whether it's a Mersenne number. If it is, it'll print that out.
2. Prime1 - when a prime number ends with 1, prints it with red color
3. prime4Digits - If a prime number is 4 digits, print the subtraction of it from 10,000 (like if prime number is 9973, then print 27)
