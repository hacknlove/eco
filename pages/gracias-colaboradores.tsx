import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Productores: NextPage = () => {
  return (
    <div>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
        <title>Hacer las cosas bien es bueno</title>
        <meta property="og:title" content="Hacer las cosas bien es bueno" />
        <meta name="description" content="Buscamos pioneros que quieran apoyar con un modelo de producción, distribución y consumo basado en que nos estamos ayudando y cuidando los unos a los otros." />
        <meta property="og:description" content="Buscamos pioneros que quieran apoyar con un modelo de producción, distribución y consumo basado en que nos estamos ayudando y cuidando los unos a los otros." />
      </Head>

      <main>
        <h1> Hacer las cosas bien es bueno</h1>
        <h2>
          Muchas gracias.
        </h2>

        <p>
          Pronto nos pondremos en contacto contigo.
        </p>
        <Link href="/" passHref><a>Volver</a></Link>
      </main>
    </div>
  )
}

export default Productores
