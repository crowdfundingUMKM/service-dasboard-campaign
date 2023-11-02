import Head from 'next/head'

export default function TransactionLayout({ children }) {
    return (
      <>
        <Head>
            <title>Transaction User | Campaign Mode</title>
        </Head>
        {children}
      </>
    );
  }
  