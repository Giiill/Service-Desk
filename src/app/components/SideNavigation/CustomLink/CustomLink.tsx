import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles.css'

interface CustomLinkProps {
    href:string,
    src:string,
    alt:string,
    className:string
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, src, alt, className }) => {
  return (
    <div className={className}>
      <Link href={href}>
        <Image
          src={src}
          alt={alt}
          className={`${className}-image`}
          width={80}
          height={80}
        />
      </Link>
    </div>
  );
};

export default CustomLink;
