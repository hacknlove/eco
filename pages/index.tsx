import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
        <title>Hacer las cosas bien es bueno</title>
        <meta property="og:title" content="Hacer las cosas bien es bueno" />
        <meta name="description" content="Buscamos pioneros que quieran apoyar con un modelo de producción, distribución y consumo basado en que nos estamos ayudando y cuidando los unos a los otros." />
        <meta property="og:description" content="Buscamos pioneros que quieran apoyar con un modelo de producción, distribución y consumo basado en que nos estamos ayudando y cuidando los unos a los otros." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hacer las cosas bien es bueno
        </h1>

        <p className={styles.description}>
          Buscamos pioneros que quieran apoyar con un modelo de producción, distribución y consumo basado en que nos estamos ayudando y cuidando los unos a los otros.
        </p>

        <div className={styles.grid}>
          <Link passHref href="/productores">
            <a className={styles.card}>
              <h2>Productores &rarr;</h2>
              <p>Si produces con cariño haz click aquí.</p>
            </a>
          </Link>

          <Link passHref href="/consumidores">
            <a className={styles.card}>
              <h2>Consumidores &rarr;</h2>
              <p>Si consumes con responsabilidad haz click aquí.</p>
            </a>
          </Link>

          <Link passHref href="/distribuidores">
            <a className={styles.card}>
              <h2>Distribuidores &rarr;</h2>
              <p>Si quieres ser el motor del cambio, haz click aquí.</p>
            </a>
          </Link>

          <Link passHref href="/colaboradores">
            <a className={styles.card}>
              <h2>Colaboradores &rarr;</h2>
              <p>Si quieres ayudar con la tecnología haz click aquí.</p>
            </a>
          </Link>
        </div>
        <hr/>
        <p>
          Por favor, si crees que esta propuesta puede ser positiva para tu entorno, compártela con quien creas que pueda estar interesado.
        </p>
      </main>
    </div>
  )
}

export default Home
