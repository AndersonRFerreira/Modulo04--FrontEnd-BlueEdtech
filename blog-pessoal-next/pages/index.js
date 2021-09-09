import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/layout.module.css';
import { pegarPostsPorData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ dadosDosPosts }) {
  console.log(dadosDosPosts)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section>
        <p>Hi! Me chamo anderson e tenho 31 anos, estou em transição de carreira, iniciei na programação em fevereiro de 2021
         </p>
      </section>

      <section>
        <h2>Artigos</h2>
        <ul>
          {
            dadosDosPosts.map( ({id, date, title}) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  {title}
                </Link>
                <small>
                  <Date dateString={date}/>
                </small>
              </li>
            ))
          }
        </ul>
      </section>
      
    </Layout>
  )
}

export async function getStaticProps() {
  const dadosDosPosts = pegarPostsPorData();
  return {
    props: {
      dadosDosPosts
    }
  }
}