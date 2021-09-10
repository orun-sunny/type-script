interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string

}
const messy: Player = {
    name: 'L messi',
    club: 'abahoni',
    salary: 12000,
    wife: 'sokina'
}

const hanan: Player = {
    name: 'maruf',
    club: "kolabagan",
    salary: 2000
}

interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}

interface Developer {
    language: string,
    codeEditor: string,
    typingSpeed: number,

}
