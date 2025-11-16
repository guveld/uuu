/**
 * Define the Course and Assignment concepts using the class notations
 */

//Creates Assignment class
class Assignment {
    //defines constructor method with two arguments
    constructor(title, dueDate) {
        //initializes properties
        this.title = title;
        this.dueDate = dueDate;
    }

    //defines printAssignment method
    printAssignment() {
        //prints assignment details
        console.log("   Title: " + this.title + " | Due Date: " + this.dueDate);
    }
}

//Creates Course class
class Course {
    //defines constructor method with four arguments
    constructor(courseName, instructor, creditHours, assignments) {
        //initializes properties
        this.courseName = courseName; //String
        this.instructor = instructor; //String
        this.creditHours = creditHours; //Number
        this.assignments = assignments; //Array of Assignment objects
    }

    //defines courseInfo method
    courseInfo() {
        //prints course details
        console.log(
            "Course: " +
            this.courseName +
            " | Instructor: " +
            this.instructor +
            " | Credit Hours: " +
            this.creditHours
        );

        //prints assignments header
        console.log("Assignments >>>");
        //iterates through assignments and calls printAssignment method
        for (let a of this.assignments) {
            //calls printAssignment method of each assignment
            a.printAssignment();
        }
    }
}


//creates four instances of the Assignment class with two String arguments
let a1 = new Assignment("Project Proposal", "Jan 15");
let a2 = new Assignment("Midterm Report", "Feb 20");
let a3 = new Assignment("Final Report", "Mar 30");
let a4 = new Assignment("Presentation", "Apr 10");

//creates an instance of the Course constructor function with two String arguments, one Number argument, and an array of Assignment objects
let c1 = new Course(
    //String arguments
    "Software Engineering",
    "Dr. Pepper",
    //Number argument
    3,
    //Array argument
    [a1, a2]
);

//creates an instance of the Course constructor function with two String arguments, one Number argument, and an array of Assignment objects
let c2 = new Course(
    //String arguments
    "Data Science",
    "Dr. Evil",
    //Number argument
    6,
    //Array argument
    [a3, a4]
);

//calls courseInfo method of c1 and c2 instances to display course information
c1.courseInfo();
c2.courseInfo();
