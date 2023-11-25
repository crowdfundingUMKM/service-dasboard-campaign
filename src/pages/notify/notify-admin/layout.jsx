import Head from 'next/head'

export default function NotifAdminLayout({ children }) {
    return (
      <>
        <Head>
            <title>Notifikasi Admin | Campaign Mode</title>
            <meta name="description" content="Notifikasi dari admin."/>
        </Head>
        {children}
      </>
    );
  }
  