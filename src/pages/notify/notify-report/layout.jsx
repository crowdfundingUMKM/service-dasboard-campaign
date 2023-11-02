import Head from 'next/head'

export default function NotifReportLayout({ children }) {
    return (
      <>
        <Head>
            <title>Lapor Ke Admin | Campaign Mode</title>
        </Head>
        {children}
      </>
    );
  }
  