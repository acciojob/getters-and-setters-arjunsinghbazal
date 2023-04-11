class Person {
	constructor (name,age){
		this._name=name;
		this._age=age;
	}
	get name(){
		return this._name;
	}
	set age(age){
		return this._age;
	}
}


class Student extends Person {
	study(){
		console.log(this.name+" is studying Age is "+this._age);
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name+" is teaching Age is "+this._age)
	}
}

let arjun = new Student("arjun",17);
arjun.study();
let sham = new Teacher("sham",45);
sham.teach();


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
