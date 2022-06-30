import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Villager } from '../../types/types';
import styles from '../styles/Home.module.css';
import GetApiData from '../../service/fetch';
import Filters from '../../components/villagers/Filters';
import VillagersList from '../../components/villagers/VillagersList';
interface HomePageProps {
  filterName: string;
}
const Home: NextPage = () => {
  const [villagers, setVillagers] = useState<Villager[]>([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    GetApiData().then((dataApi) => {
      console.log(dataApi);
      setVillagers(dataApi);
    });
  }, []);
  return (
    <h1>
      <Filters />
      <VillagersList villagers={villagers} />
    </h1>
  );
};

export default Home;
