import React from 'react';

import { Puff } from  'react-loader-spinner';

const Loading = () => (
  <div className="flex justify-center items-center ">
    <Puff
        height="80"
        width="80"
        radisu={1}
        color="#4285f4"
        ariaLabel="puff-loading"
        visible={true}
    />
  </div>
);

export default Loading;