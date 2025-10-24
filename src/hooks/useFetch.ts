import { useState, useEffect } from 'react';
import api from '../services/api';

export function useFetch(endpoint: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(endpoint)
      .then(res => setData(res.data))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading };
}
