import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '../sass/main.scss';
import { useRouter } from 'next/dist/client/router';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <DefaultSeo
        titleTemplate="needwork | %s"
        description="We have the best workspace for you. For Everyone!"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: router.pathname,
          site_name: 'needwork',
        }}
        twitter={{
          handle: '@needwork',
          site: '@needwork',
          cardType: 'summary_large_image',
        }}
        canonical={router.pathname}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
