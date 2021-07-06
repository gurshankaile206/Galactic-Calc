class Galactic{

  constructor(earthAge) {
    this.earthAge = earthAge
    this.mercuryAge=0; //.24 earth years
    this.venusAge=0; //.62 
    this.marsAge=0;//1.88
    this.jupiterAge=0; //11.86
    this.averageLife = 65;
  }

  getEarthAge() {
      return this.earthAge
  }

  getMerAge() {
      this.mercuryAge = this.earthAge*0.24;
      return Math.floor(this.mercuryAge);
  }

  getVenusAge() {
      this.venusAge = this.earthAge*0.62;
      return Math.floor(this.venusAge);
  }
}

module.exports = Galactic;