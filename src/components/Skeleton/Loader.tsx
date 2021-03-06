import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={3}
    width={800}
    height={1200}
    viewBox="0 0 600 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#с3с3с3"
    style={{ background: '#cccccc' }}
  >
    <circle cx="-233" cy="353" r="15" />

    <rect x="914" y="107" rx="2" ry="2" width="140" height="10" />
    <rect x="34" y="78" rx="6" ry="6" width="295" height="40" />
    <rect x="160" y="48" rx="6" ry="6" width="75" height="21" />
    <rect x="220" y="56" rx="0" ry="0" width="11" height="8" />
    <rect x="201" y="59" rx="0" ry="0" width="8" height="8" />
    <rect x="34" y="47" rx="6" ry="6" width="108" height="21" />
    <rect x="76" y="64" rx="0" ry="0" width="23" height="4" />
    <rect x="33" y="131" rx="6" ry="6" width="475" height="40" />
    <rect x="31" y="210" rx="6" ry="6" width="439" height="22" />
    <rect x="32" y="244" rx="6" ry="6" width="391" height="20" />
    <rect x="32" y="276" rx="6" ry="6" width="439" height="22" />

    <rect x="34" y="345" rx="6" ry="6" width="439" height="22" />
    <rect x="35" y="379" rx="6" ry="6" width="391" height="20" />
    <rect x="35" y="411" rx="6" ry="6" width="439" height="22" />

    <rect x="34" y="465" rx="6" ry="6" width="439" height="22" />
    <rect x="35" y="499" rx="6" ry="6" width="391" height="20" />
    <rect x="35" y="531" rx="6" ry="6" width="439" height="22" />

    <rect x="34" y="465" rx="6" ry="6" width="439" height="22" />
    <rect x="35" y="499" rx="6" ry="6" width="391" height="20" />
    <rect x="35" y="531" rx="6" ry="6" width="439" height="22" />
  </ContentLoader>
);

export default MyLoader;
