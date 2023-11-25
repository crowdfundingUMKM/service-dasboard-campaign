import Head from 'next/head'

export default function NotifReportLayout({ children }) {
    return (
      <>
        <Head>
            <title>Lapor Ke Admin | Campaign Mode</title>
            <meta name="description" content="Buat report untuk admin."/>
        </Head>
        {children}
      </>
    );
  }
  