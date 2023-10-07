import { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardDetails from './CardDetails';

const CardLoader = () => {
  const [load, setLoads] = useState([]);

  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(idInt);

  const loadAll = useLoaderData();

  useEffect(() => {
    const loadFinding = loadAll?.find(load => load.id === idInt);
    setLoads(loadFinding);
  }, [idInt, loadAll]);
  console.log(load);
  return <CardDetails load={load}></CardDetails>;
};

export default CardLoader;
