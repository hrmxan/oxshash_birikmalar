let array = ['salomlar', 'qaliblar', 'salom', 'vatan', 'qalib', 'turkiston', 'qirgiston', 'samarqand'];
let arrayfix = array.map((e) => {
    return e.toLowerCase();
});

function maydalash(element, count) {
    let result = [];
    for (let i = 0; i < element.length; i++) {
        let sub = element.substr(i, count);
        if (sub.length == count) {
            result.push(sub);
        }
    }
    if (result.length > 0) {
        return result;
    }
}

function bolaklash(element) {
    let result = [];
    if (element.length >= 2) {
        for (let i = 2; i < element.length; i++) {
            result = [...result, ...maydalash(element, i)];
        }
    }
    if (result.length > 0) {
        return result;
    }
}

function sana (bolak, soz) {
    let soni = 0;
    while (soz.replace(bolak, '')!=soz){
        soz = soz.replace(bolak, '');
        soni++;
    }
    return soni;
}

function sanash(arr) {
    let sonobj = {};
    arr.forEach((e) => {
        let bolaklar = bolaklash(e);
        bolaklar.forEach((bolak) => {
            if (!sonobj[bolak]) {
                let soni = 0;
                arr.forEach((check) => {
                    soni += sana(bolak, check);
                })
                sonobj[bolak] = soni;
            }
        });
    })
    return sonobj
}

// let satr = 'salodca'.replace('g', '') == 'salodca';

// console.log(satr);
console.log(sanash(arrayfix));