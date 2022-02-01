import useSubmit from 'ecologia/lib/submit'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Productores: NextPage = () => {
  const submit = useSubmit('/gracias-colaboradores')

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
          Colaboradores
        </h2>

        <p>
          Si te gusta la propuesta, y quieres ayudar que esto salga adelante, te agradeceríamos mucho que nos dejes tu correo electrónico y nos digas cómo quieres ayudar.
        </p>

        <p>
          Te prometo que no usaremos tu correo para enviarte publicidad, ni para meterte en una lista de correo semanal.<br/>
        </p>

        <p>
          También puedes echar un ojo al repo. Aunque de momento no hay mucho que ver, solo tenemos la landing.
          <br/>
          <a href="https://github.com/hacknlove/eco">github</a>
        </p>

        <form onSubmit={submit}>
          <fieldset>
            <label htmlFor='name'>
              Nombre
            </label>
            <input type="text" id="name" name="nombre" placeholder='Tu nombre o el de tu empresa, lo que tú prefieras'/>
          </fieldset>
          <fieldset>
            <label htmlFor="email">
              Correo electrónico
            </label>
            <input type="text" name="email" id="email" placeholder='Para ponernos en contacto contigo cuando esto vaya a empezar'/>
          </fieldset>
          <fieldset>
            <label htmlFor="productos">
              Ayuda
            </label>
            <textarea name="productos" id="productos" placeholder='Cómo quieres ayudar?'></textarea>
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
