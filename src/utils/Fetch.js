import { useEffect, useState } from 'react';

function useFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api.json');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return { data };
}
export default useFetch;

/*import { useEffect, useState } from 'react';
import Context from './Context';

function useFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api.json');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return <Context.Provider value={data}>{data}</Context.Provider>;
}
export default useFetch;*/
