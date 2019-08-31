/*
There is a queue for the self-checkout tills at the supermarket. 
Your task is write a function to calculate the total time required for 
all the customers to check out!

The function has two input variables:
    customers: an array of positive integers 
            representing the queue. Each integer represents a customer, 
            and its value is the amount of time they require to check out.
    n: a positive integer, the number of checkout tills.

The function should consider each person in order, and add them to the 
'smallest' line at that time (the line with the least total time).

The function should return an integer, the time it takes for all lines to empty.

For example, if the input queue is [1,2,3,4,5,6] and there are 2 tills,
the queue would be separated as follows:
till1       till2
1           2
3           4
5           6
---         ---
9           12

So this would take 12 total time, since all customers will be served when
the last customer at till2 is served.

Check your solutions with mocha 16_supermarket.js
*/

// Adds the customer time to the smallest till queue
function addToSmallest(queues, customer) {
    let smallestTill = 0
    let shortest = queues[smallestTill] + customer
    for (let till = 1; till < queues.length; till++) {
        if (queues[till] + customer < shortest) {
            smallestTill = till
            shortest = queues[smallestTill] + customer
        }
    }
    queues[smallestTill] += customer
}

// Returns the queue time for all customers given number of tills
function queueTime(customers, n) {
    let queues = new Array(n).fill(0)
    for (let customer of customers) {
        addToSmallest(queues, customer)
    }
    return queues.reduce((a, b) => a > b ? a : b)
}

module.exports = {
    queueTime
}