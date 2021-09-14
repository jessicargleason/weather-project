import React, { forwardRef } from 'react';

const City = forwardRef((props, ref) => (
    <input id="city" type="text" className="city-search" placeholder="Milwaukee" ref={ref} />
));

export default City;