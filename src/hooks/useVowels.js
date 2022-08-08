import axios from 'axios';
import { useState, useEffect } from 'react';

const ENDPOINT = 'https://my-json-server.typicode.com/yamoo9/assets/vowels';

export function useVowels() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(ENDPOINT)
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, error, data };
}

export function useVowel(uid) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/?uid=${uid}`)
      .then(({ data }) => {
        setData(data[0]);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [uid]);

  return { loading, error, data };
}
