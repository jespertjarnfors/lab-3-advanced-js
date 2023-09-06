let delay = 0;

function randomDelay() {

    delay = Math.floor(Math.random() * 20000)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delay % 2 === 0) {
            resolve();
            }
            else {
            reject();
            }
        }, delay);
    });
 }
    
    randomDelay()
    .then(() => console.log(`There appears to have been an even delay of ${delay} ms.`))
    .catch(() => console.log(`There appears to have been an uneven delay of ${delay} ms.`));
    