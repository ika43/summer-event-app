import { useState, useEffect } from 'react';
import { doGet } from '../api';

export const useDirections = (directions) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (directions.from && directions.to) {
      setData([]);
      setError(null);
      setIsLoading(true);
      doGet(process.env.REACT_APP_DIRECTIONS_URL, directions)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err.response) {
            setError(err.response.data.message);
          } else if (err.request) {
            setError('Server is temporary down.');
          } else {
            setError(err.message);
          }
          setIsLoading(false);
        });
    }
  }, [directions]);
  return { error, data, isLoading };
};
