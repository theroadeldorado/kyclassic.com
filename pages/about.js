import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>KY Classic | History</title>
        <meta name="description" content="The Teams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container grow">
        <h1 className="my-4 text-4xl font-bold text-center">The Teams</h1>
      </main>
    </div>
  );
}
