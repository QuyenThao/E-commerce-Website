import React from 'react';

const Description = ({ product }) => {
  const { description } = product;
  return (
    <div style={{ color: '#666', fontSize: '14px', lineHeight: '26px' }}>
      {description}
    </div>
  );
};

export default Description;
