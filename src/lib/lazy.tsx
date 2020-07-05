import React, { Suspense } from 'react';

const LazyImport: React.FC<{ load: () => Promise<{ default: any }> }> = (props) => {
  const Component = React.lazy(props.load);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default LazyImport;
