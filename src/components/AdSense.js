import React, { useEffect } from 'react';

export default function AdSense(props) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={props.client}
      data-ad-slot={props.slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}