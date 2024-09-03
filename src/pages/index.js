import React from 'react';
import Layout from '@theme/Layout';
import AdSense from '@site/src/components/AdSense';

function Home() {
  return (
    <Layout>
      <main>
        {/* 您的页面内容 */}
        <AdSense client="ca-pub-3936883179210897" slot="您的实际广告单元slot" />
        {/* 更多页面内容 */}
      </main>
    </Layout>
  );
}

export default Home;