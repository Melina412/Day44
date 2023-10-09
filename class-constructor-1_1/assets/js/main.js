// Aufgabenstellung

// Regulärer Ball Super Ball

// Erstelle eine Klasse Ball.
// Ball-Objekt soll ein Argument "ballType" akzeptieren,
// Wenn keine Argumente angegeben werden, sollten Ball-Objekt mit dem "ballType" "regular" initialisiert werden.

class Ball {
  constructor(ballType) {
    this.setBallType(ballType);
  }
  setBallType(ballType) {
    if (ballType) {
      this.ballType = ballType;
    } else {
      this.ballType = "regular";
    }
  }
}

// Code zum Testen:
const ball1 = new Ball();
const ball2 = new Ball("super");

console.log(ball1.ballType); //=> "regular"
console.log(ball2.ballType); //=> "super"
