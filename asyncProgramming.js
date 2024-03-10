const getAverage = (sub1, sub2) => {
    let ave = (sub1 + sub2) / 2
    
    console.log("Calculating your average...")
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ave >= 75) {
                resolve("Your average: " + ave)
            } else {
            reject("Your average: " + ave)
            }
        }, 3000)
    })
    return promise
}

//using sync function
const getAveragePromiseSync = () => {
    getAverage(80,80).then((msg) => {
        console.log(msg)
        console.log("You Passed :>")
    }).catch((err) => {
        console.log(err)
        console.log("You Failed :<")
    })
}

//using async function
const getAveragePromiseAsync = async () => {
    try {
        const result = await getAverage(80, 65)
        console.log(result)
        console.log("You Passed :)")
    } catch(err) {
        console.log(err)
        console.log("You Failed :(")
    }
}

console.log("Synchronous Function: \n")
getAveragePromiseSync()

setTimeout(() => {
    console.log("\nAsynchronous Function: \n")
    getAveragePromiseAsync()
}, 5000)

