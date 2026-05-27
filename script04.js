function result() {

    var subjects = document.getElementById("sub").value;
    var total = 0;

    for (var i = 1; i <= subjects; i++) {
        var marks = prompt("Enter marks of subject " + i);
        total = total + Number(marks);
    }

    var average = total / subjects;
    var grade;

    if (average >= 60) {
        grade = "A";
    } 
    else if (average >= 50) {
        grade = "B";
    } 
    else if (average >= 40) {
        grade = "C";
    } 
    else {
        grade = "Fail";
    }

    document.getElementById("output").innerHTML =
        "Total Marks = " + total + "<br>" +
        "Average Marks = " + average + "<br>" +
        "Grade = " + grade;
}