import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import GetApiData from '../service/fetch';
import { Villager } from '../types/types';

const Home: NextPage = () => {
  const [villagers, setVillagers] = useState<Villager[]>([]);

  useEffect(() => {
    GetApiData().then((dataApi) => {
      console.log(dataApi);
      setVillagers(dataApi);
    });
  }, []);
  return <h1>hola mundo</h1>;
};

export default Home;
