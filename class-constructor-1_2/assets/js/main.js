// Aufgabenstellung

// Im folgenden Code existiert die Klasse Person. Deine Aufgabe ist es, den Code zuende zu schreiben.
// Du musst die Constructor-Methode programmieren. Diese soll einen Namen (string) und ein Alter (number) als Parameter akzeptieren.
// Die Methode Info() soll den Namen und das Alter als Zeichenkette zurückgeben.
// Instanziiere ein Objekt mit dieser Klasse und rufe die Info-Methode auf. Der Wert soll in der Konsole ausgegeben werden.

class Person {
  constructor(name, age) {
    this.setName(name);
    this.setAge(age);
  }
  setName(name) {
    if (typeof name === "string") {
      this.name = name;
    } else {
      this.name = "--not a string--";
    }
  }

  setAge(age) {
    if (typeof age === "number") {
      this.age = age;
    } else {
      this.age = "--not a number--";
    }
  }

  info() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

const person1 = new Person("Emanuela", 18);
person1.info();

const person2 = new Person(23, 24);
person2.info();

const person3 = new Person("Emanuela", person2);
person3.info();
