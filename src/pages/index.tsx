import type { NextPage } from 'next';
import styles from './home.module.scss';
import Image from 'next/image';
import AcPic from '../../public/ac.png';
import Fish from '../../public/fish.jpg';
import Villagers from '../../public/villager.jpg';
import Fossil from '../../public/fossil.jpg';
import Insect from '../../public/insect.jpg';
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image width={0} height={0} src={AcPic} alt="foto camiseta"></Image>
        </div>
      </header>
      <main className={styles.main}>
        <Link href="">
          <div>
            <Image src={Insect} width={0} height={0} alt=""></Image>
            <p>Insects</p>
          </div>
        </Link>
        <Link href="">
          <Image src={Fossil} width={0} height={0} alt="Fossil photo"></Image>
        </Link>
        <Link href="./villagers/">
          <Image
            src={Villagers}
            width={0}
            height={0}
            alt="Villagers photo"
          ></Image>
        </Link>
        <Link href="">
          <Image src={Fish} width={0} height={0} alt="Fossil photo"></Image>
        </Link>
      </main>
      <footer>hola</footer>
    </>
  );
};

export default Home;
