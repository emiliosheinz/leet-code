
import { isValid } from './valid-parentheses';

describe('isValid', () => {
  it('should return true for a single valid pair ()', () => {
    expect(isValid('()')).toBe(true);
  });

  it('should return true for multiple valid pairs ()[]{}', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  it('should return true for nested valid brackets ([])', () => {
    expect(isValid('([])')).toBe(true);
  });

  it('should return false for mismatched brackets (]', () => {
    expect(isValid('(]')).toBe(false);
  });

  it('should return false for wrong order ([)', () => {
    expect(isValid('([)]')).toBe(false);
  });

  it('should return false for opening without closing', () => {
    expect(isValid('(((')).toBe(false);
  });

  it('should return false for closing without opening', () => {
    expect(isValid(')))')).toBe(false);
  });

  it('should return false for mix of valid and invalid pairs', () => {
    expect(isValid('({[})]')).toBe(false);
  });

  it('should return true for deeply nested valid brackets', () => {
    expect(isValid('{[()()()[]]}')).toBe(true);
  });

  it('should return false for incomplete pairs', () => {
    expect(isValid('{[(')).toBe(false);
  });

  it('should return false for extra closing brackets', () => {
    expect(isValid('([]))')).toBe(false);
  });

  it('should handle long valid string', () => {
    const input = '()'.repeat(5000); // length = 10,000
    expect(isValid(input)).toBe(true);
  });
});
