import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/layout.module.css';

const name = 'Anderson Reis'
export const siteTitle = 'Anderson Reis - Desenvolvedor Front-End'

export default function Layout({ home, children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Anderson Reis - Desenvolvedor Front-End" />
        <meta name="title" content={siteTitle} />
      </Head>

      <header className={styles.header}>
        {home ? (
            <>
              <img
                src="/images/eu.png" className={`${styles.headerHomeImage} ${styles.borderCircle}`} alt={name} />
              <h1 className={styles.heading2XL}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <img src="/images/eu.png"className={`${styles.headerImage} ${styles.borderCircle}`} alt={name} />
              </Link>
              <h2 className={styles.headingLg}>
                <Link href="/" className={styles.colorLink}>
                  {name}
                </Link>
              </h2>
            </>
          )
        }
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            ⬅️ Voltar para a página inicial
          </Link>
        </div>
      )}
    </div>
  )
}