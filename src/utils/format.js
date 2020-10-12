/* Dados */

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

/* Funcionalidades */

function getSubject(subjectsNumber){
    const position = +subjectNumber - 1
return subjects [position]
}

function convertHoursToMinutes(time) {
    const data = 0;
    const [hour, minutes] = time.split(":")
    return Number((hour *60) + minutes )

}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes

}