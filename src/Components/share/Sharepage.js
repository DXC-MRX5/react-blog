import React from 'react';
import { ShareButton } from 'react-share';

const SharePageButton = ({ url, title }) => {
  return (
    <>
      <ShareButton url={url} title={title}>
        Share this page
      </ShareButton>
    </>
  );
};

export default SharePageButton;
