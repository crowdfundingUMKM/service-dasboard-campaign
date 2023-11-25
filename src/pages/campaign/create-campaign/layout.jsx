import Head from 'next/head'

export default function CreateCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Buat Campaign | Campaign Mode</title>
            <meta name="description" content="Silahkan Buat Campaign Crowdfiunding UMKM"/>
        </Head>
        {children}
      </>
    );
  }
  