import { User } from './../src/galacticAge.js'

describe('User', () => {
  test('should correctly give users age on Mercury', () => {
    let inputUser = new User(100, 'male', 'healthy', 'america');
    expect(inputUser.mercuryAge()).toEqual(24);
  });
  test('should correctly give users age on Venus', () => {
    let inputUser = new User(100, 'male', 'healthy', 'america');
    expect(inputUser.venusAge()).toEqual(62);
  });
  test('should correctly give users age on Mars', () => {
    let inputUser = new User(100, 'male', 'healthy', 'america');
    expect(inputUser.marsAge()).toEqual(188);
  });
  test('should correctly give users age on Jupiter', () => {
    let inputUser = new User(100, 'male', 'healthy', 'america');
    expect(inputUser.jupiterAge()).toEqual(1186);
  });
  test('should correctly give users life expectancy in America', () => {
    let inputUser = new User(20, 'male', 'healthy', 'america');
    expect(inputUser.earthExpectancy()).toEqual(81);
  });
  test('should correctly give users life expectancy in Canada', () => {
    let inputUser = new User(20, 'male', 'healthy', 'america');
    expect(inputUser.earthExpectancy()).toEqual(81);
  });
  test('should correctly give users life expectancy in Sierra Leone', () => {
    let inputUser = new User(20, 'male', 'healthy', 'america');
    expect(inputUser.earthExpectancy()).toEqual(81);
  });
});
