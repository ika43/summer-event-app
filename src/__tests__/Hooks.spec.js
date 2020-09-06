import { useDirections } from '../hooks';
import { renderHook } from '@testing-library/react-hooks';

describe('get directions', () => {
  it('return connections from data', () => {
    const { result } = renderHook(useDirections);
    expect(result.current).toHaveProperty('data');
    expect(result.current).toHaveProperty('error');
    expect(result.current).toHaveProperty('isLoading');
  });
});
