const {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
} = require('./main.js')

const template1 = {
  firstName: 'Colin',
  lastName: 'Jaffe',
  age: 39,
  married: true,
  spouseName: 'Sarah Jaffe'
};
const template2 = {
  firstName: 'Mesuara',
  lastName: 'Kaleziq',
  age: 29,
  married: false,
};
const template3 = {
  firstName: 'Anthony',
  lastName: 'DeRosa',
  age: 40,
  married: false,
}
const person1 = {};
const person2 = {};
const person3 = {};

beforeEach(() => {
  // Object.keys(person1).forEach((key) => {
  //   delete person1[key];
  // })

  // Object.keys(person2).forEach((key) => {
  //   delete person2[key];
  // })

  Object.assign(person1, template1);
  Object.assign(person2, template2);
  Object.assign(person3, template3);
})


describe('getFirstName', () => {
  it(`returns the first name of the given person`, () => {
    expect(getFirstName(person1)).toBe('Colin')
    expect(getFirstName(person2)).toBe('Mesuara')
  })
});

describe('getLastName', () => {
  it(`returns the last name of the given person`, () => {
    expect(getLastName(person1)).toBe('Jaffe')
    expect(getLastName(person2)).toBe('Kaleziq')
  })
});

describe('getFullName', () => {
  it(`returns the first name and last name of the given person, with a space in the middle`, () => {
    expect(getFullName(person1)).toBe('Colin Jaffe')
    expect(getFullName(person2)).toBe('Mesuara Kaleziq')
  })
})

describe('setFirstName', () => {
  it('gives the given name to the person object as its firstName property', () => {
    setFirstName(person1, 'Anthony');
    expect(person1.firstName).toBe('Anthony');
  })
})

describe(`setAge`, () => {
  it(`sets age on the given person`, () => {
    setAge(person1, 45);
    expect(person1.age).toBe(45)
    setAge(person2, 35);
    expect(person2.age).toBe(35)
  })
})

describe('giveBirthday', () => {
  it(`ages the given person up by 1`, () => {
    giveBirthday(person1);
    giveBirthday(person1);
    giveBirthday(person2);
    giveBirthday(person2);
    giveBirthday(person2);
    expect(person1.age).toBe(41);
    expect(person2.age).toBe(32);
  })

  it(`gives the person an age of 1 if they didn't previously have an age`, () => {
    const baby = {};
    giveBirthday(baby);
    expect(baby.age).toBe(1);
  })
})

describe('marry', () => {
  it(`sets the marital status of both given people to true`, () => {
    person1.married = false;
    marry(person1, person2);
    expect(person1.married && person2.married).toBe(true);
  })
  
  it(`sets the spouse of each given person to be the full name of the other`, () => {
    marry(person1, person2);
    expect(person1.spouseName).toBe(`Mesuara Kaleziq`);
    expect(person2.spouseName).toBe(`Colin Jaffe`);
    
    marry(person1, person3);
    expect(person1.spouseName).toBe('Anthony DeRosa')
    expect(person3.spouseName).toBe('Colin Jaffe')
  })
})

describe('divorce', () => {
  it(`sets the marital status of both people to false`, () => {
    person3.married = true;
    divorce(person1, person3);
    expect(!person1.married && !person3.married).toBe(true);
    
    person1.married = true;
    person2.married = true;
    divorce(person1, person2);
    expect(!person1.married && !person2.married).toBe(true);
  })

  it(`removes the marital status property entirely from both people`, () => {
    person1.spouseName = 'Mesuara Kaleziq';
    person2.spouseName = 'Colin Jaffe';
    divorce(person1, person2)
    expect('spouseName' in person1).toBe(false)
    expect('spouseName' in person2).toBe(false)
  })
})

