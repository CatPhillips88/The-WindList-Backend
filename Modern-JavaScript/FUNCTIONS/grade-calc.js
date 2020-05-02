// Mini function project - Grade Calculator

// student score
// total possible score

// generate the letter grade and percentage

// 15/20 - you got a c (75%)!
// A: 90 -100, B: 80 -89, C:70-79, D: 60-69, E: 0-59

const totalScore = function (studentScore, totalScore = 20) {
    const scoreCalculation = (studentScore / totalScore) * 100
    let letterGrade = ''

    //     if (scoreCalculation >= 90) {
    //         return `You got a A (${scoreCalculation}%)`
    //     } else if (scoreCalculation >= 80) {
    //         return `You got a B (${scoreCalculation}%)`
    //     } else if (scoreCalculation >= 70) {
    //         return `You got a C (${scoreCalculation}%)`
    //     } else if (scoreCalculation >= 60) {
    //         return `You got a D (${scoreCalculation}%)`
    //     } else {
    //         return `You got a E (${scoreCalculation}%)`
    //     }
    // }

    if (scoreCalculation >= 90) {
        letterGrade = 'A'
    } else if (scoreCalculation >= 80) {
        letterGrade = 'B'
    } else if (scoreCalculation >= 70) {
        letterGrade = 'C'
    } else if (scoreCalculation >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'E'
    }

    return `You got a ${letterGrade} (${scoreCalculation}%) `
}


const results = totalScore(0)
console.log(results)

