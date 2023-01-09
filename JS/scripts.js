const myPromise = new Promise ((resolve, reject) => {

    const nome = "Eduardo"

    if(nome === "Eduardo") {
        resolve('Usuário Eduardo encontrado!')
    } else {
        reject ('O usuário Eduardo não foi encontrado!')
    }
})

myPromise.then ((data) => {
    console.log(data)
})

// Encadamento de then's

const myPromise2 = new Promise ((resolve, reject) => {

    const nome = "Eduardo"

    if(nome === "Eduardo") {
        resolve('Usuário Eduardo encontrado!')
    } else {
        reject ('O usuário Eduardo não foi encontrado!')
    }
})

myPromise2
.then ((data) => {
    return data.toLowerCase()
})
.then((stringModificada) => {
    console.log(stringModificada)
})

// Retorno do catch
const myPromise3 = new Promise ((resolve, reject) => {
    const nome = 'Pedro'

    if(nome === 'Eduardo') {
        resolve('Usuário Eduardo encontrado!')
    } else {
        reject ('O usuário Eduardo não foi encontrado!')
    }
})

myPromise3
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log('Aconteceu um erro: ' + err)
})

// Resolver várias promessas com all
const p1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
     resolve('P1 ok! Timeout')   
    }, 2000);
})

const p2 = new Promise ((resolve, reject) => {
    resolve ('P2 ok!')
})

const p3 = new Promise ((resolve, reject) => {
    resolve('P3 ok!')
})

const resolveAll = Promise.all ([p1,p2,p3]).then((data) => {
console.log(data)
})

console.log('Depois do all ()')

// Várias promessas com race

const p4 = new Promise ((resolve, reject) => {
    setTimeout(() => {
     resolve('P4 ok! Timeout')   
    }, 2000);
})

const p5 = new Promise ((resolve, reject) => {
    resolve ('P5 ok!')
})

const p6 = new Promise ((resolve, reject) => {
    resolve('P6 ok!')
})

const resolveallrace = Promise.race ([p4,p5,p6]).then((data) => {
console.log(data)
})

//Fetch request na API do GitHub
//Fetch API

const userName = 'efserafim'

fetch(`https://api.github.com/users/${userName}`, {
    method: "GET",
    headers: {
        Accept: "application/vnd.github.v3+json"
    },
}).then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data) => {
    console.log(`O nome do usuário é: ${data.name}`)
}).catch((err) => {
    console.log(`Houve algum erro: ${err}`)
})



