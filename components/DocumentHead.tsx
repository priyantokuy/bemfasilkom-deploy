import Head from "next/head";

type Props = {
  pageTitle?: string;
  children?: React.ReactNode;
};

export const DocumentHead = ({ pageTitle }: Props) => {
  return (
    <Head>
      <link
        rel="shortcut icon"
        href="/favicon.ico"
        type="image/x-icon"
      />
      <title>
        {pageTitle ? `${pageTitle} | ` : null} {'BEM FASILKOM UPN "Veteran" Jawa Timur'}
      </title>
      <meta name="description" content={pageTitle==='Homepage' ? `Website Resmi BEM FASILKOM UPN Veteran Jawa Timur sebagai wadah untuk KM Fasilkom agar lebih mengenal kami` : `${pageTitle} BEM FASILKOM UPN Veteran Jawa Timur`} />
    </Head>
  );
};
