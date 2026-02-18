function makeBuregert() {
    return new Promise((resolve, reject) => {
        console.log("Making your burger...");
        setTimeout(() => {
            const success = true;
            console.log("Burger is ready!");
            if (success) {
                resolve("Burger is Served!");
            } else {
                reject("Sorry, something went wrong with your burger.");
            }
        }, 2000); // Simulate 2 seconds of cooking time
    });
}