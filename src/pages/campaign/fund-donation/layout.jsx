import Head from 'next/head'

export default function FundDonationLayout({ children }) {
    return (
      <>
        <Head>
            <title>Dana Donasi | Campaign Mode</title>
        </Head>
        {children}
      </>
    );
  }
  