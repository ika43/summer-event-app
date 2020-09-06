import {
  getTransferDuration,
  formatTimeStation,
  getSectionDuration,
} from '../helpers';

describe('Helpers function', () => {
  it('should return valid date format', () => {
    const result = getTransferDuration('00d01:41:00');
    expect(result).toEqual('1h 41m');
  });
  it('should format valid date to HH:mm', () => {
    const result = formatTimeStation('2020-09-06T13:49:00+0200');
    expect(result).toEqual('13:49');
  });
  it('should calculate valid time duration', () => {
    const result = getSectionDuration(
      '2020-09-06T13:52:00+0200',
      '2020-09-06T13:49:00+0200'
    );
    expect(result).toEqual('3m');
  });
});
