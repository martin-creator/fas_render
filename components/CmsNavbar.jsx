import Image from 'next/image';
import React from 'react'
import LogoLong from "../public/FAS1.png";
import Link from 'next/link';
const CmsNavbar = () => {
  return (
    <div className={`sticky top-0 left-0 z-20 bg-primary`}>
      <Link href="/">
        <Image
          height={50}
          src={LogoLong}
          alt="Future African Scientist Logo"
        />
      </Link>
    </div>
  );
}

export default CmsNavbar
