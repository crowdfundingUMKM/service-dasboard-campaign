import Head from 'next/head'

export default function DashboardLayout({ children }) {
    return (
      <>
        <Head>
            <title>Dashboard | Campaign Mode</title>
        </Head>
        {children}
      </>
    );
  }
  