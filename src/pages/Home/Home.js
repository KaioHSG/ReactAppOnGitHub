import React, { useState } from 'react';
import Header from '../../components/Header/Index';
import Section from '../../components/Section/Index';
import FakeAPI from '../../service/data.json';

const Home = () => {
  const [data] = useState(FakeAPI);

  return (
    <>
      <body>
        <Header img={data.profile.img} />
        <main>
          <Section profile={data.profile} />
        </main>
      </body>
    </>
  );
};

export default Home;
