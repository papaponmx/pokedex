import uniqArray from '../uniqArray';

describe('uniqArray()', () => {
  const fixture = ['Alex', 'Alex', 'Veronica'];
  it('Should return an array', () => {
    const expected = ['Alex', 'Veronica'];
    expect(uniqArray(fixture)).toEqual(expected);
  });

  it('Should not contain duplicates', () => {
    expect(uniqArray(fixture).length).toEqual(2);
  });
});
