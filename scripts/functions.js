'use strict'

function addGrades(grades, newGrades) {
	let notas = newGrades.split(',');
	return grades.concat(notas);;
}

function clearGrades(grades) {
	let newGrades = grades.map(nota => Number(nota));
	return newGrades.filter(nota => (nota >= 0 && nota <= 10) && !isNaN(nota));
}

function firstFailed(grades) {
	return grades.find(nota => nota < 5);
}

function passedGrades(grades) {
	return grades.filter(nota => nota > 5);
}

function avgGrade(grades) {
	const avg = grades.reduce((total,nota)  => total +  nota)
	return (avg / grades.length).toFixed(2);
}

function finalGrades(grades, increment) {
	return grades.map(nota  => (nota + (nota * increment) / 100).toFixed(0));
}

module.exports = {
	addGrades,
	clearGrades,
	firstFailed,
	passedGrades,
	avgGrade,
	finalGrades
}