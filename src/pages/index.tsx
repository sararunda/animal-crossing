import type { NextPage } from 'next';
import styles from './home.module.scss';
import Image from 'next/image';
import AcPic from '../../public/ac.png';
import Villagers from '../../public/minina.gif';
import Fossil from '../../public/fossil.jpg';
import Butterfly from '../../public/butterfly.png';
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
            <Image src={Butterfly} width={0} height={0} alt=""></Image>
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
      </main>
      <footer>hola</footer>
    </>
  );
};

export default Home;
