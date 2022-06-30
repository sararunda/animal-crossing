import type { NextPage } from 'next';
import styles from './home.module.scss';
import Image from 'next/image';
import AcPic from '../../public/ac.png';
const Home: NextPage = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image width={0} height={0} src={AcPic} alt="foto camiseta"></Image>
        </div>
      </header>
      <main>hola</main>
      <footer>hola</footer>
    </>
  );
};

export default Home;
