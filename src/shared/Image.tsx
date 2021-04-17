import React from 'react';

interface Props {
  src: string;
  fallback: string;
  type?: string;
}
const Image = ({ src, fallback, type = 'image/webp' }: Props) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} />
    </picture>
  );
};

export default Image;
