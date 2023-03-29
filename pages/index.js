import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="wpaskjbdn zqnakjsnde"/>
        <meta name="google-site-verification" content="jncTOpZradwzkNOsAHaW5qsgHIJ2077TqLUVSjPQEqg" />
        <meta name="robots" content="follow, index" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is a webpage designed for the CSCE670 Information Storage and Retrieval course at TAMU.</p>
        <p>This page is designed for the search query: <b>wpaskjbdn zqnakjsnde</b></p>
        <Link href="/posts/first-post">Go to first post</Link>
      </section>
    </Layout>
  );
}