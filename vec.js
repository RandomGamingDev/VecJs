class Vec {
  constructor(length) {
    this.list = Array(length).fill(0);
  }
  
  static fromList(list) {
    let toReturn = new Vec(0);
    toReturn.list = list;
    return toReturn;
  }
  
  static mono(num, length) {
    return Vec.fromList(Array(length).fill(num));
  }
  
  ind(i) {
    return this.list[i];
  }
  
  setInd(i, num) {
    this.list[i] = num;
    return this;
  }
  
  length() {
    return this.list.length;
  }
  
  forEach(func) {
    for (let i in this.list)
      this.list[i] = func(this.list, this.list[i], i);
    return this;
  }
  
  abs() {
    return this.forEach((l, v, i) => Math.abs(v));
  }
  
  floor() {
    return this.forEach((l, v, i) => Math.floor(v));
  }
  
  ceil() {
    return this.forEach((l, v, i) => Math.ceil(v));
  }
  
  round() {
    return this.forEach((l, v, i) => Math.round(v));
  }
  
  addNum(num) {
    return this.forEach((l, v, i) => v + num);
  }
  
  subNum(num) {
    return this.forEach((l, v, i) => v - num);
  }
  
  numSub(num) {
    return this.forEach((l, v, i) => num - v);
  }
  
  mulNum(num) {
    return this.forEach((l, v, i) => v * num);
  }
  
  divNum(num) {
    return this.forEach((l, v, i) => v / num);
  }
  
  numDiv(num) {
    return this.forEach((l, v, i) => num / v);
  }
  
  powNum(num) {
    return this.forEach((l, v, i) => v ** num);
  }
  
  numPow(num) {
    return this.forEach((l, v, i) => num ** v);
  }
  
  flip() {
    return this.mulNum(-1);
  }
  
  inv() {
    return this.numDiv(1);
  }
  
  addVec(vec) {
    return this.forEach((l, v, i) => v + vec.ind(i));
  }
  
  subVec(vec) {
    return this.forEach((l, v, i) => v - vec.ind(i));
  }
  
  mulVec(vec) {
    return this.forEach((l, v, i) => v * vec.ind(i));
  }
  
  divVec(vec) {
    return this.forEach((l, v, i) => v / vec.ind(i));
  }
  
  powVec(vec) {
    return this.forEach((l, v, i) => v ** vec.ind(i));
  }
  
  equ(vec) {
    if (this.list.length != vec.list.length)
      return false;
    for (let i in this.list)
      if (this.ind(i) != vec.ind(i))
        return false;
    return true;
  }
  
  copy() {
    return Vec.fromList([...this.list]);
  }
  
  slice(start, end) {
    return Vec.fromList(this.list.slice(start, end));
  }
    
  miniVec(i, length) {
    return this.slice(i, i + length);
  }
}
