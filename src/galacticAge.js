export class User {
constructor(age, gender, lifestyle, residence) {
  this.age = age;
  this.gender = gender;
  this.lifestyle = lifestyle;
  this.residence = residence;
}

mercuryAge() {
  return this.age / .24;
}

venusAge() {
  return this.age / .62;
}

marsAge() {
  return this.age / 1.88;
}

jupiterAge() {
  return this.age / 11.86;
}

earthExpectancy() {
  let life = 0;
  if(this.residence == 'america'){
    if(this.gender == 'male'){
      life = 74.7;
      if(this.lifestyle == 'healthy'){
        life += 5;
      } else if(this.lifestyle == 'unhealthy'){
        life -=5;
      }
    } else if(this.gender == 'female'){
      life = 81.1;
      if(this.lifestyle == 'healthy'){
        life += 5;
      } else if(this.lifestyle == 'unhealthy'){
        life -=5;
      }
    }
    return life;
  }
  else if(this.residence == 'japan'){
    if(this.gender == 'male'){
      life = 80.5;
      if(this.lifestyle == 'healthy'){
        life += 5;
      } else if(this.lifestyle == 'unhealthy'){
        life -=5;
      }
    } else if(this.gender == 'female'){
      life = 86.8;
      if(this.lifestyle == 'healthy'){
        life += 5;
      } else if(this.lifestyle == 'unhealthy'){
        life -=5;
      }
    }
    return life;
  }
  else if(this.residence == 'sierraLeone'){
    if(this.gender == 'male'){
      life = 49.3;
      if(this.lifestyle == 'healthy'){
        life += 5;
      } else if(this.lifestyle == 'unhealthy'){
        life -=5;
      }
    } else if(this.gender == 'female'){
      life = 50.8;
      if(this.lifestyle == 'healthy'){
        life += 5;
      } else if(this.lifestyle == 'unhealthy'){
        life -=5;
      }
    }
    return life;
  }
}

timeLeft() {
  return this.earthExpectancy() - this.age;
}

mercuryExpectancy() {
  return Math.round(this.timeLeft() / .24 * 100) / 100;

}

venusExpectancy() {
  return Math.round(this.timeLeft() / .62 * 100) / 100;
}

marsExpectancy() {
  return Math.round(this.timeLeft() / 1.88 * 100) / 100;
}

jupiterExpectancy() {
  return Math.round(this.timeLeft() / 11.86 * 100) / 100;
}
}
