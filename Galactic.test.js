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
    expect(galacticAge.getMerAge());
  });

  test('return Venus Age', function(){
    expect(galacticAge.getVenusAge())
  });

  test('return Mars Age', function(){
    expect(galacticAge.getMarsAge())
  });
});