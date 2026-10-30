// Assignment 1: Student marks analyser


let name = "Rahul Kumar";
let rollNo = 101;
let department = "Computer Science";
let marks = [78, 85, 62, 91, 34];

// Calculate total marks
function calculateTotal(marks) {
    let total = 0;
 
    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }

    return total;
}

// Calculate percentage
function calculatePercentage(marks) {
    return calculateTotal(marks) / marks.length;
}

// Find highest mark
function findHighest(marks) {
    let highest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }

    return highest;
}

// Find lowest mark
function findLowest(marks) {
    let lowest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] < lowest) {
            lowest = marks[i];
        }
    }

    return lowest;
}

// Count passed subjects (40 or above)
function countPassed(marks) {
    let count = 0;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 40) {
            count++;
        }
    }

    return count;
}

// Student name information
let upperName = name.toUpperCase();
let nameLength = name.length;

// Performance category
function getPerformance(marks) {
    let percentage = calculatePercentage(marks);

    if (percentage >= 80) {
        return "Excellent";
    } else if (percentage >= 60) {
        return "Good";
    } else if (percentage >= 40) {
        return "Average";
    } else {
        return "Needs Improvement";
    }
}


// Final report: 

console.log("Student:", upperName);
console.log("Roll Number:", rollNo);
console.log("Department:", department);
console.log("Name Length:", nameLength);
console.log("Marks:", marks);
console.log("Total Marks:", calculateTotal(marks));
console.log("Percentage:", calculatePercentage(marks) + "%");
console.log("Highest Marks:", findHighest(marks));
console.log("Lowest Marks:", findLowest(marks));
console.log("Subjects Passed:", countPassed(marks));
console.log("Performance:", getPerformance(marks));


//Output :
// Student: RAHUL KUMAR
// Roll Number: 101
// Department: Computer Science
// Name Length: 11
// Marks: [ 78, 85, 62, 91, 34 ]
// Total Marks: 350
// Percentage: 70%
// Highest Marks: 91
// Lowest Marks: 34
// Subjects Passed: 4
// Performance: Good


