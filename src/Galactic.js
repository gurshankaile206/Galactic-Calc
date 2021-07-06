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


}

module.exports = Galactic;