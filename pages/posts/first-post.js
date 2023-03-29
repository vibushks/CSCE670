import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <meta name="description" content="wpaskjbdn zqnakjsnde"/>
        <meta name="robots" content="follow, index" />
      </Head>
      <h1>First Post</h1>
      <p>This is a webpage designed for the CSCE670 Information Storage and Retrieval course at TAMU.</p>
      <p>This page is designed for the search query: <b>wpaskjbdn zqnakjsnde</b></p>
    </Layout>
  );
}