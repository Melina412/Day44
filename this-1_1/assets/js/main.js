// Aufgabe:

// In dieser Übung lernen wir this in JavaScript kennen.
// Teste den Code aus dem Kommentar.
// Ergänze das fehlende this, damit der Code funktioniert.
// Verwende dann console.log(person.fullName());

let person = {
  vorname: "Anton",
  nachname: "Fish",
  fullName: function () {
    return this.vorname + " " + this.nachname;
  },
};

console.log(person.fullName());
