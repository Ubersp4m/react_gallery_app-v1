import { useEffect, useState } from 'react';
import apiKey from '../config';

export default function usePixabay(query) {
  const [state, setState] = useState({ data: null, status: 'idle', error: null });

  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();

    const fetchImages = async () => {
      setState({ data: null, status: 'loading', error: null });
      try {
        const q = encodeURIComponent(query);
        const res = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${q}`, { signal: controller.signal });
        if (!res.ok) throw new Error(res.statusText || `Status ${res.status}`);
        const json = await res.json();
        setState({ data: json.hits || [], status: 'success', error: null });
      } catch (err) {
        if (err.name === 'AbortError') return;
        setState({ data: null, status: 'error', error: err });
      }
    };

    fetchImages();
    return () => controller.abort();
  }, [query]);

  return state;
}
