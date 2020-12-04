import React, { useState } from 'react';

import Layout from '../Layout';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function App () {
  const [isJsonView, setIsJsonView] = useState(false);

  return (
    <Layout>
      <Header title="User projects" />
      <Main isJsonView={isJsonView} />
      <Footer isJsonView={isJsonView} setIsJsonView={setIsJsonView} />
    </Layout>
  );
}

export default App;
