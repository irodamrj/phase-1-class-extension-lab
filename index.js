// Your code here
class Polygon {
  constructor(sideArray) {
    this._sideArray = sideArray;
  }

  get countSides() {
    return this._sideArray.length;
  }

  get perimeter() {
    let perimeter = this._sideArray.reduce((acc, item) => {
      return acc + item;
    }, 0);
    return perimeter;
  }
}

class Triangle extends Polygon {
  get isValid() {
    let temp12 = this._sideArray[0] + this._sideArray[1];
    let temp23 = this._sideArray[1] + this._sideArray[2];
    let temp13 = this._sideArray[0] + this._sideArray[2];
    if (
      temp12 > this._sideArray[2] &&
      temp23 > this._sideArray[0] &&
      temp13 > this._sideArray[1]
    ) {
      return true;
    }
    return false;
  }
}

class Square extends Polygon {
  get isValid() {
    let temp = true;
    for (let i = 0; i < this._sideArray.length - 1; i++) {
      if (this._sideArray[i] === this._sideArray[i + 1]) continue;
      else temp = false;
    }
    return temp;
  }

  get area() {
    return this._sideArray[0] ** 2;
  }
}
