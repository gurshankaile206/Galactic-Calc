//import Galctic from './src/Galactic.js';
const Galactic = require('./src/Galactic.js')

describe('Galactic', function(){
  let galacticAge;


  beforeEach(function(){
    galacticAge = new Galactic(25)

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
});