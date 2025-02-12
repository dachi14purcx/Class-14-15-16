function checkAssignment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("შევამოწმოთ დავალება");
        }, 1000);
    });
}

function completeAssignment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("დავალება შესრულდა");
        }, 2000);
    });
}

function evaluateAssignment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.random();
            if (randomNumber > 0.5) {
                resolve(`დავალება შესრულდა წარმატებულად და მივიღე ${Math.floor(randomNumber * 10)} ქულა`);
            } else {
                reject("ჩავიჭერით");
            }
        }, 1500);
    });
}

checkAssignment()
    .then((message) => {
        console.log(message);
        return completeAssignment();
    })
    .then((message) => {
        console.log(message);
        return evaluateAssignment();
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
