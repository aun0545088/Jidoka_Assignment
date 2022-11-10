class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = [];
  getInfo() {
    return {
      name: this.name,
      email: this.email,
    };
  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCourseList() {
    return this.#courseList;
  }
  getMessage() {
    return `hi ${this.name}`;
  }
  login() {
    return "You are logged in !";
  }
}

class SubAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "I am subadmin";
  }
  login() {
    return "login for admin only";
  }
}
const aman = new User("aman", "aman@gmail.com");
console.log(aman.getInfo());
aman.enrollCourse("React dev");
console.log(aman.getCourseList())
console.log(aman.getMessage())

const rohit = new SubAdmin("rohit", "rohit@gmail.com");
console.log(rohit.getInfo())
console.log(rohit.getAdminInfo());
console.log(rohit.getMessage());
