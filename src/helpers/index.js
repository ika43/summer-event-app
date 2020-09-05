import moment from 'moment';

export const formatTimeStation = (time) => {
  return moment(time).format('HH:mm');
};

export const getSectionDuration = (arrivalTime, departureTime) => {
  const arrival = moment(arrivalTime);
  const departure = moment(departureTime);
  const minutes = arrival.diff(departure, 'minutes');
  if (minutes < 60) {
    return `${minutes}m`;
  }
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
};

export const getTransferDuration = (time) => {
  const splited = time.split('d')[1].split(':');
  // parse int to remove leading zero
  const hours = parseInt(splited[0], 10);
  const minutes = parseInt(splited[1], 10);
  if (hours) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
};
