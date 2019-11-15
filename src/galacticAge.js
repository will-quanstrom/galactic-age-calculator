export function User(age, gender, lifestyle, residence) {
  this.age = age,
  this.gender = gender,
  this.lifestyle = lifestyle,
  this.residence = residence
}

User.prototype.mercuryAge = function () {
  return this.age * .24;
}

User.prototype.venusAge = function () {
  return this.age * .62;
}

User.prototype.marsAge = function () {
  return this.age * 1.88;
}

User.prototype.jupiterAge = function () {
  return this.age * 11.86;
}

User.prototype.mercuryExpectancy = function () {

}

User.prototype.venusExpectancy = function () {

}

User.prototype.marsExpectancy = function () {

}

User.prototype.jupiterExpectancy = function () {

}
