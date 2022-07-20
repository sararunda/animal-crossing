import type { NextPage } from 'next';
import styles from './home.module.scss';
import Image from 'next/image';
import AcPic from '../../public/ac.png';
import Fish from '../../public/fish.jpg';
import Fossil from '../../public/fossil.jpg';
import Insect from '../../public/insect.jpg';
import Villagers from '../../public/villager.jpg';
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            width={0}
            height={0}
            src={AcPic}
            alt="animal crossing photo"
          ></Image>
        </div>
      </header>
      <main className={styles.main}>
        <Link href="./villagers/">
          <div className={styles.photoMinina}>
            <Image
              src={Villagers}
              width={0}
              height={0}
              alt="villager photo"
            ></Image>
            <p className={styles.name_item}>Villagers</p>
          </div>
        </Link>
        <Link href="./fossils/">
          <div className={styles.photoHome}>
            <Image src={Fossil} width={0} height={0} alt="Fossil photo"></Image>
            <p className={styles.name_item}>Fossils</p>
          </div>
        </Link>
        <Link href="">
          <div className={styles.photoHome}>
            <Image src={Insect} width={0} height={0} alt="Insect photo"></Image>
            <p className={styles.name_item}>Insects</p>
          </div>
        </Link>
        <Link href="">
          <div className={styles.photoHome}>
            <Image src={Fish} width={0} height={0} alt="Fish photo"></Image>
            <p className={styles.name_item}>Fish</p>
          </div>
        </Link>
      </main>
      <footer className={styles.footer}>
        <p>Sara Ferández Ramos ©</p>
      </footer>
    </>
  );
};

export default Home;
