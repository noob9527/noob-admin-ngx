import { AbstractRestResource } from './na-rest-request.domain';

describe('AbstractRestResource', () => {
  class Sample extends AbstractRestResource {
    foo: string;
    bar: string;

    get id(): any {
      return this.foo;
    }
  }

  it('constructor', () => {
    const dto = { foo: 'foo', bar: 'bar' };
    const res = new Sample(dto);
    expect({ ...res }).toEqual(dto);
  });

  it('copy should return equivalent object', () => {
    const dto = { foo: 'foo', bar: 'bar' };
    const sample = new Sample(dto);
    const res = sample.copy();
    expect(res).not.toBe(sample);
    expect(res).toEqual(sample);
  });

  it('copy with patch function', () => {
    const dto = { foo: 'foo', bar: 'bar' };
    const sample = new Sample(dto);
    const res = sample.copy(e => e.foo = 'bar');
    expect(res.foo).toBe('bar');
    expect(res.bar).toBe('bar');
  });

  it('copy with patch object', () => {
    const dto = { foo: 'foo', bar: 'bar' };
    const sample = new Sample(dto);
    const res = sample.copy({ foo: 'bar' });
    expect(res.foo).toBe('bar');
    expect(res.bar).toBe('bar');
  });
});
