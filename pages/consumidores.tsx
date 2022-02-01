import useSubmit from 'ecologia/lib/submit'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Productores: NextPage = () => {
  const submit = useSubmit()

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
        <h1>Hacer las cosas bien es bueno</h1>
        <h2>
          Consumidores
        </h2>

        <p>
          Si te importa el impacto que tus hábitos de consumo tienen en tu salud, la economía local, y el medio ambiente, te agradeceríamos mucho que nos ayudases dándonos tu correo electrónico, y la clase de productos que te interesaría que te llevásen a casa periódicamente.
        </p>

        <p>
          Te prometo que no usaremos tu correo para enviarte publicidad, ni para meterte en una lista de correo semanal.<br/>
          De hecho no te enviaremos absolutamente ningún correo hasta que estemos listos para empezar y necesitemos organizar las rutas de reparto etc.
        </p>
        <p>
          En cualquier caso, esto no te compromete a nada. Si llegado el momento no te interesa los productos, fechas, precios o cualquier otra cosa, no te preocupes, habrá más oportunidades de que podamos ayudarnos mutuamente. Tal vez pasado un tiempo, cuando te apetezca pases a cotillear por la web que hagamos a ver qué tal nos va y en ese momento ya tengamos justo lo que necesitas.
        </p>

        <form onSubmit={submit}>
          <fieldset>
            <label htmlFor='name'>
              Nombre
            </label>
            <input type="text" id="name" name="nombre" placeholder='Para dirigirnos a ti'/>
          </fieldset>
          <fieldset>
            <label htmlFor="email">
              Correo electrónico
            </label>
            <input type="text" name="email" id="email" placeholder='Para ponernos en contacto contigo cuando esto vaya a empezar'/>
          </fieldset>
          <fieldset>
            <label htmlFor="poblacion">
              Población
            </label>
            <input type="text" name="poblacion" id="poblacion" placeholder='¿Dónde estás?'/>
          </fieldset>
          <fieldset>
            <label htmlFor="productos">
              Productos
            </label>
            <textarea name="productos" id="productos" placeholder='¿Qué tipo de productos te interesan?'></textarea>
          </fieldset>
          <fieldset>
            <label htmlFor="comentarios">
              Comentarios
            </label>
            <textarea name="comentarios" id="comentarios" placeholder='¿Alguna otra cosa que quieras decirnos?'></textarea>
          </fieldset>
          <fieldset>
            <button type="submit">
              Enviar
            </button>
          </fieldset>
        </form>
        <Link href="/" passHref><a>Volver</a></Link>
      </main>
    </div>
  )
}

export default Productores
