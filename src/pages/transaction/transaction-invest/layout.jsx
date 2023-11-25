import Head from 'next/head'

export default function TransactionLayout({ children }) {
    return (
      <>
        <Head>
            <title>Transaction User | Campaign Mode</title>
            <meta name="description" content="Transaction pada Campaign anda"/>
        </Head>
        {children}
      </>
    );
  }
  