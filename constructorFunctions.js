/**
 * Define the Course and Assignment concepts using the constructor functions
 */

//creates Assignment constructor function with two parameters
function Assignment(title, dueDate) {
    //initializes properties
    this.title = title;
    this.dueDate = dueDate;
}

//defines printAssignment method for Assignment prototype
Assignment.prototype.printAssignment = function () {
    //prints assignment details
    console.log("   Title: " + this.title + " | Due Date: " + this.dueDate);
};

//creates Course constructor function with four parameters
function Course(courseName, instructor, creditHours, assignments) {
    //initializes properties
    this.courseName = courseName; //String
    this.instructor = instructor; //String
    this.creditHours = creditHours; //Number
    this.assignments = assignments; //Array of Assignment objects
}

//defines courseInfo method for Course prototype
Course.prototype.courseInfo = function () {
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
};


//creates four instances of the Assignment constructor function with two string arguments
let a1 = new Assignment("Project Proposal", "Jan 15");
let a2 = new Assignment("Midterm Report", "Feb 20");
let a3 = new Assignment("Final Report", "Mar 30");
let a4 = new Assignment("Presentation", "Apr 10");

//creates an instance of the Course constructor function with two String arguments, one number argument, and an array of Assignment objects
let c1 = new Course(
    //String arguments
    "Software Engineering",
    "Dr. Pepper",
    //Number argument
    3,
    //Array argument
    [a1, a2]
);

//creates an instance of the Course constructor function with two String arguments, one number argument, and an array of Assignment objects
let c2 = new Course(
    //String arguments
    "Data Science",
    "Dr. Evil",
    //Number argument
    6,
    //Array argument
    [a3, a4]
);

//calls courseInfo method for both Course instances to display information
c1.courseInfo();
c2.courseInfo();

