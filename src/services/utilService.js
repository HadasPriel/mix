
export const utilService = {
    delay,
    getRandomInt,
    makeId
}

function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


// function _saveWapsToFile() {
//     return new Promise((resolve, reject)=>{
//         fs.writeFile('data/wap.json', JSON.stringify(gWaps, null, 2), (err)=>{
//             if (err) return reject(err)
//             resolve();
//         })
//     })
//   }