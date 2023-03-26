import { Star } from '@src/components/icons'
import style from './about.module.scss'

const QnA = [
  {
    name: 'detail-one',
    question: 'Becario / Junior Dev - Erona',
    date: 'Enero 2022 - Agosto 2022',
    answer: 'Desarrollo Backend con Python y uso de framework como Django, despliegue de los sitios web de la empresa asi como su mantenimiento y actualizaciones con React JavaScript con frameworks como; Gatsby y Next JS.'
  },
  {
    name: 'detail-two',
    question: 'Semi Senior Dev - Invercratos',
    date: 'Septiembre 2022 - Actual',
    answer: 'Desarrollo de aplicaciones web, conexión con API’s externas y comunicación con Back-End, despliegue de aplicaciones con Netlify, mejoramiento y soporte continuo de las aplicaciones existentes.'
  }
]

const About = () => {
  return (
    <div className={style.tab_wrapper}>
      <div className={style.content}>
        <div className={style.description}>
          Hola mi nombre es Mario Alemán, soy desarrollador Frontend, me gustan los videojuegos y la programacion.
          Experiencia en JavaScript, TypeScript, Python.
        </div>
        <div className={style.info_personal}>
          <ul>
            <li className={style.list}>
              No me importa aprender nuevas herramientas o lenguajes.
            </li>
            <li className={style.list}>
              Interesado en aprender Inteligencia Artificial relacionado al DL/ML.
            </li>
            <li className={style.list}>
              Fui Platino V en LoL.
            </li>
            <li className={style.list}>
              Me gusta cualquier tipo de música pero no las fiestas.
            </li>
            <li className={style.list}>
              Practiaba karate y boxeo pero no dure mas de 1 mes.
            </li>
            <li className={style.list}>
              03/07/1997 | Veracruz, México
            </li>
          </ul>
        </div>
        <div className={style.experience}>
          <h1 className='sm-text'>Experiencia Laboral:</h1>
          {
            QnA.map((faqs) => {
              return (
                <details className={style.content_question} key={faqs.name}>
                  <summary className={style.question + ' ' + 'bold xsm-text'}>
                    {faqs.question}
                  </summary>
                  <div className={style.content}>
                    <h2 className='xsm-text'>
                      Tareas:
                    </h2>
                    <p>
                      {faqs.answer}
                    </p>
                  </div>
                </details>
              )
            })
        }
        </div>
        <div className={style.language}>
          <h1 className='sm-text'>
            Lenguajes:
          </h1>

          Español nativo

          <div className={style.english}>
            Inglés
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
