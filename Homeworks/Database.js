class Course {

    constructor(name = "", time = "", date = "", rooms = []) {
        this.name = name;
        this.time = time;
        this.date = date;
        this.rooms = rooms;

    }


}
class Student {
    constructor(id = 0, name = "", gpa = 0, courses = []) {
        this.id = id
        this.name = name
        this.gpa = gpa
        this.courses = courses
    }


}
class Database {

    constructor() {
        this.Filedata = "";
    }




}