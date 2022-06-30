import type { NextPage } from 'next';
import styles from './home.module.scss';
import Image from 'next/image';
import AcPic from '../../public/ac.png';
import Minina from '../../public/minina.gif';
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
        <a href="">
          <Link href="./villagers/">
            <div className={styles.minina}>
              <Image
                src={Minina}
                width={0}
                height={0}
                alt="Minina photo"
              ></Image>
              <p>Villagers</p>
            </div>
          </Link>
        </a>
      </main>
      <footer>hola</footer>
    </>
  );
};

export default Home;
