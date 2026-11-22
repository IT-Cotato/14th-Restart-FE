import { describe, expect, it } from 'vitest';
import { cn } from './cn';

describe('cn', () => {
  it('충돌하는 Tailwind 클래스는 뒤의 것만 남긴다', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });

  it('거짓 값은 무시한다', () => {
    expect(cn('p-2', false, null, undefined)).toBe('p-2');
  });
});
