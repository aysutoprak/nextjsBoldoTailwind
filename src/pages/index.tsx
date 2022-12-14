import React from 'react';
//import Layout from '@app/layouts/MainLayout';
//import useTranslation from 'next-translate/useTranslation';
import Header from '@app/components/Header';
//import HelloWorld from '@app/components/HelloWorld';
import Navbar from '@app/components/Navbar';
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner';
import Leaders from '../components/Leaders'
import Stats from '../components/Stats'
import Values from '../components/Values'



function Index(): JSX.Element {
  // const { t } = useTranslation();
  // const title = useMemo(() => t('home:title'), [t]);
  // const description = useMemo(() => t('home:description'), [t]);
  const headerFirst = 'About' ;
  const headerSecond = 'We love to make great things, things that matter.';
  const headerThird = 'Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.';

  return (
    <>
      <Header headerFirst={headerFirst} headerSecond={headerSecond} headerThird={headerThird}>
      <Navbar/>
      </Header>
      <HeroBanner />
      <Stats />
      <Leaders />
      <Values />
      <Footer/>
    </>
  );
}

export default Index;
