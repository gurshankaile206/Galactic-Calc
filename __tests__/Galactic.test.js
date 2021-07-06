//import Galctic from './src/Galactic.js';
const Galactic = require('../src/Galactic.js')

describe('Galactic', function(){
  let galacticAge;
  let galacticSurpassedYears;


  beforeEach(function(){
    galacticAge = new Galactic(25)
    galacticSurpassedYears = new Galactic(70)

  });
  test('returns input earth age', function(){
    expect(galacticAge.getEarthAge()).toEqual(25);
  });
  test('returns Mercury Age', function(){
    expect(galacticAge.getMerAge()).toEqual(6);
  });
  test('return Venus Age', function(){
    expect(galacticAge.getVenusAge()).toEqual(15)
  });
  test('return Mars Age', function(){
    expect(galacticAge.getMarsAge()).toEqual(47)
  });
  test('returns Jupiter Age', function(){
    expect(galacticAge.getJptAge()).toEqual(296);
  });
  test('returns life expectancy on Mercury', function(){
    expect(galacticAge.lifeExpOnMer()).toEqual(9);
  });
  test('return life expectancy on Venus', function(){
    expect(galacticAge.lifeExpOnVenus()).toEqual(24)
  }); 
  test('return life expectancy on Mars', function(){
    expect(galacticAge.lifeExpOnMars()).toEqual(75);
  });
  test('return life expectancy on Jupiter', function() {
    expect(galacticAge.lifeExpOnJp()).toEqual(474);
  });
  test('return surpassed years on Mercury', function() {
    expect(galacticSurpassedYears.lifeExpOnMer()).toEqual(1);
  });
  test('return surpassed years on Venus', function() {
    expect(galacticSurpassedYears.lifeExpOnVenus()).toEqual(3);
  });
  test('return surpassed years on Mars', function() {
    expect(galacticSurpassedYears.lifeExpOnMars()).toEqual(9);
  })
});