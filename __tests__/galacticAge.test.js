import { User } from './../src/galacticAge.js'

describe('User', () => {

  test('should correctly give users age on Mercury', () => {
    var inputUser = new User(100, 'male', 'healthy', 'america');
    expect(inputUser.mercuryAge()).toEqual('24');
  });
});
