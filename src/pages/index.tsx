import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Villager } from '../types/types';
import styles from '../styles/Home.module.css';
import GetApiData from '../service/fetch';
import VillagersList from '../components/VillagersList';

const Home: NextPage = () => {
  const [villagers, setVillagers] = useState<Villager[]>([]);

  useEffect(() => {
    GetApiData().then((dataApi) => {
      console.log(dataApi);
      setVillagers(dataApi);
    });
  }, []);
  return (
    <h1>
      <VillagersList villagers={villagers} />
    </h1>
  );
};

export default Home;
