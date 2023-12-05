import Head from 'next/head'

export default function FundDonationLayout({ children }) {
    return (
      <>
        <Head>
            <title>Dana Donasi | Campaign Mode</title>
            <meta name="description" content="Silahkan lakukan pengajuan penarikan dana Crowdfunding UMKM"/>
        </Head>
        {children}
      </>
    );
  }
  