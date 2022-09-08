import Head from "next/head";
import Image from "next/image";
import ImageColumn from "../components/ImageColumn";
import { imagesCol1, imagesCol2, imagesCol3 } from "../components/images";
import styles from "../styles/Home.module.css";

export default function Home() {
  const images = [imagesCol1, imagesCol2, imagesCol3];
  return (
    <div className={styles.container}>
      <Head>
        <title>Infinite Photo Scroll Experiment</title>
        <meta name="description" content="Infinite vertical photo scroll" />
        <link rel="icon" href="/scroll.png" />
      </Head>
      <div className="flex justify-between w-3/4 m-auto max-h-screen ">
        {images.map((image, index) => {
          return <ImageColumn numCol={index} key={index} images={image} />;
        })}
      </div>
    </div>
  );
}
