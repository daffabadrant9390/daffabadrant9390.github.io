import CommonContentLayout from '@/components/CommonContentLayout';
import React from 'react';

const AboutMe = () => {
  return (
    <CommonContentLayout
      title="About Me"
      subtitle="Platea cum diam lobortis sed in. In praesent magnis venenatis non viverra nisi."
      theme="light"
      backgroundImage={'bg-bg-about-me'}
    >
      <h1>About Me</h1>
    </CommonContentLayout>
  );
};

export default AboutMe;
