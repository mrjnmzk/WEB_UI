/task 1/

class Student {
  constructor(fullName, direction) {
    this._fullName = fullName;
    this._direction = direction;
  }

  showFullName() {
    return this._fullName;
  }

  nameIncludes(data) {
    return this._fullName.includes(data) ? true : false;
  }

  static studentBuilder() {
    return new Student('Ihor Kohut', 'qc');
  }

  get direction() {
    return this._direction;
  }

  set direction(direction) {
    this._direction = direction;
  }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder();

// Usage example:
// const stud1 = new Student('Ivan Petrenko', 'web');
// stud1.nameIncludes('Ivan');   // true
// stud1.nameIncludes('Denysenko'); // false
    
/task 2/

class Person { 
    constructor(name, surname) { 
        this.name = name;
        this.surname = surname;
    }
    showFullName() { 
        console.log(this.name + ' ' + this.surname);
    }
}

class Student1 extends Person { 
    constructor(name, surname, year) { 
        super(name, surname);
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    showFullName(midleName) { 
        this.midleName = midleName;
        let fullName = this.name + ' ' + this.surname + ' ' + this.midleName;
        // console.log(fullName);
        return fullName;
    }
    showCourse() { 
        let date = new Date();
        let currentYear = date.getFullYear();
        let startYear = currentYear - this.year;
        return startYear;
    }

}
const stud11 = new Student1("Petro", "Petrenko", 2017);
console.log(stud11.showFullName("Petrovych")); 
console.log("Current course: " + stud11.showCourse());

/task 3/

class Worker {
    #experience = 1.2
    get experience() {
        return this.#experience;
    }

    set experience(value) {
        this.#experience = value;
    }
    constructor(fullName, dayRate, workingDays) { 
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    salaryCalc() { 
        return this.dayRate * this.workingDays;
    }
    showSalary() { 
        let salary = this.salaryCalc();
        console.log(`${this.fullName} salary: ${salary}`);
    }
    calcSalaryWithExperience() { 
        let withExperience = this.salaryCalc() * this.#experience;
        return withExperience;
    }
    showSalaryWithExperience() { 
        console.log(`${this.fullName} salary- ${this.calcSalaryWithExperience()}`);
    }
    static salarySort(employers) {
        employers.sort(function(employeeA, employeeB) {
            return employeeA.calcSalaryWithExperience() - employeeB.calcSalaryWithExperience();
        })
        console.log('Sorted salaries:');
        for (let i = 0; i < employers.length; i++) {
            console.log(`${employers[i].fullName}: ${employers[i].calcSalaryWithExperience()}`)
        }
    }

}

const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log('New experience: ' + worker1.experience);
worker1.showSalaryWithExperience();
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();

const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log('New experience: ' + worker2.experience);
worker2.showSalaryWithExperience();
worker2.experience = 1.5;
console.log("New experience: " + worker2.experience);
worker2.showSalaryWithExperience();

const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log('New experience: ' + worker3.experience);
worker3.showSalaryWithExperience();
worker3.experience = 1.5;
console.log("New experience: " + worker3.experience);
worker3.showSalaryWithExperience();


const workers = [worker1, worker2, worker3];
Worker.salarySort(workers); 