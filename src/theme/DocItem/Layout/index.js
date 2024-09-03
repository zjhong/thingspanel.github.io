import React from 'react';
import DocItemLayout from '@theme-original/DocItem/Layout';
import AdSense from '@site/src/components/AdSense';

export default function DocItemLayoutWrapper(props) {
  return (
    <>
      <DocItemLayout {...props} />
      <AdSense client="ca-pub-3936883179210897" slot="9166877410" />
    </>
  );
}