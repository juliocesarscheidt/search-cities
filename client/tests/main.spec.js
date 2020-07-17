import chai, { expect } from 'chai';
import { getStates, getCities } from '../src/services/getData.js';

describe('Get getStates', () => {
  it('Should get the states', () => {
    expect(getStates).to.exist;
  });

  it('Should be get the states', () => {
    getStates()
      .then(res => {
        const states = res.data.states;
        expect(states).to.be.an('array').that.is.not.empty;
      });
  });
});

describe('Get getCities', () => {
  it('Should get the states', () => {
    expect(getCities).to.exist;
  });

  it('Should be get the cities from state 1', () => {
    getCities(1)
      .then(res => {
        const cities = res.data.cities;
        expect(cities).to.be.an('array').that.is.not.empty;
      });
  });
});
