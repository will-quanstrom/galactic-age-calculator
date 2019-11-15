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
    expect(inputUser.earthExpectancy()).toEqual(79.7);
  });
  test('should correctly give users life expectancy in Japan', () => {
    let inputUser = new User(20, 'female', 'average', 'japan');
    expect(inputUser.earthExpectancy()).toEqual(86.8);
  });
  test('should correctly give users life expectancy in Sierra Leone', () => {
    let inputUser = new User(20, 'male', 'unhealthy', 'sierraLeone');
    expect(inputUser.earthExpectancy()).toEqual(44.3);
  });
  test('should correctly give the average amount of time left in users life', () => {
    let inputUser = new User(20, 'male', 'healthy', 'america');
    expect(inputUser.timeLeft()).toEqual(59.7);
  });
  test('should correctly give the average amount of time left in users life', () => {
    let inputUser = new User(20, 'female', 'unhealthy', 'japan');
    expect(inputUser.timeLeft()).toEqual(61.8);
  });
  test('should correctly give the average amount of time left in users life', () => {
    let inputUser = new User(20, 'female', 'healthy', 'sierraLeone');
    expect(inputUser.timeLeft()).toEqual(35.8);
  });

  test('should correctly give the average amount of time left in users life on Mercury', () => {
    let inputUser = new User(20, 'female', 'healthy', 'sierraLeone');
    expect(inputUser.mercuryExpectancy()).toEqual(149.17);
  });
  test('should correctly give the average amount of time left in users life on Venus', () => {
    let inputUser = new User(20, 'female', 'healthy', 'sierraLeone');
    expect(inputUser.venusExpectancy()).toEqual(57.74);
  });
  test('should correctly give the average amount of time left in users life on Mars', () => {
    let inputUser = new User(20, 'female', 'healthy', 'sierraLeone');
    expect(inputUser.marsExpectancy()).toEqual(19.04);
  });
  test('should correctly give the average amount of time left in users life on Jupiter', () => {
    let inputUser = new User(20, 'female', 'healthy', 'sierraLeone');
    expect(inputUser.jupiterExpectancy()).toEqual(3.02);
  });

});
