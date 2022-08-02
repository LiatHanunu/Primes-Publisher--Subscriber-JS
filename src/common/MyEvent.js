class MyEvent {
    constructor() {
        this.events = {}
    }
    on(chosentType, listener) {
        if (this.events[chosentType]) {
            this.events[chosentType].push(listener)
        }
        else {
            this.events[chosentType] = [listener]
        }

    }
    emit(type, ...args) {
        if (this.events[type]) {
            for (const listener of this.events[type]) {
                listener(...args)
            }
        }

    }
}
export default MyEvent