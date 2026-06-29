class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    enqueue(notification) {
        this.queue.push(notification);

        this.queue.sort((a, b) => b.priority - a.priority);

        if (this.queue.length > 10) {
            this.queue.pop();
        }
    }
    dequeue() {
        return this.queue.shift();
    }
    peek() {
        return this.queue[0];
    }

    getAll() {
        return this.queue;
    }
    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }
}
module.exports = PriorityQueue;