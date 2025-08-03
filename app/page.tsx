import Image from 'next/image';

import logo from './logo.svg';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main>
        <div className="font-title flex flex-row items-end text-9xl">
          <span>Build it</span>
          <Image
            src={logo}
            alt="Agin"
            width={231}
            height={142}
            className="ml-[38px]"
          />
          <span>.</span>
        </div>
      </main>
    </div>
  );
}
