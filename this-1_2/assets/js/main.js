// Aufgabe:

// In dieser Übung lernen wir this in JavaScript kennen.
// Verwende den Code aus dem Kommentarbereich.
// Baue in der Funktion profil deines Objektes ein hübsch formatiertes Profil der Person aus.
// Validiere dein HTML auf Korrektheit.

let person = {
  vorname: "Anton",
  nachname: "Nüssler",
  alter: 34,
  familienstand: "ledig",
  groesse: "178cm",
  profil: function () {
    return `Name: ${this.vorname} ${this.nachname} </br>
    Alter: ${this.alter} Jahre </br>
    Körpergröße: ${this.groesse} </br>
    Familienstand: ${this.familienstand}`;
  },
};
document.getElementById("person").innerHTML = person.profil();
