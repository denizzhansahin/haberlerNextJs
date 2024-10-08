import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link href="sayfalar/genelHaberler">
          Hemen Haberleri Okumak için Tıklayın! WEB Sitemiz üzerinden Okumak için Tıklayın ! Tüm Dünyanın Haberi Yanında!!!!&nbsp;

          </Link>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://play.google.com/store/apps/details?id=com.denizhan661907.haberler"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <Image
              src="./playstore.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={48}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="./screen2.svg"
          alt="Next.js Logo"
          width={270}
          height={50.5}
          priority
        />
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="./screen3.svg"
          alt="Next.js Logo"
          width={270}
          height={50.5}
          priority
        />
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="./screen1.svg"
          alt="Next.js Logo"
          width={360}
          height={74}
          priority
        />
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="./screen4.svg"
          alt="Next.js Logo"
          width={270}
          height={50.5}
          priority
        />
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="./screen5.svg"
          alt="Next.js Logo"
          width={270}
          height={50.5}
          priority
        />

      </div>


      <p className="">
          <Link href="sayfalar/genelHaberler">
          Hemen Haberleri Okumak için Tıklayın! WEB Sitemiz üzerinden Okumak için Tıklayın ! Tüm Dünyanın Haberi Yanında!&nbsp;

          </Link>
        </p>
        <div className="">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://play.google.com/store/apps/details?id=com.denizhan661907.haberler"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <Image
              src="./playstore.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={48}
              priority
            />
          </a>
        </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          Erişilebilirlik{" "}

          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Haberleri hızlıca ve kolayca okuyun
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          Cross Platform{" "}

          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Hem Android hem de IOS için kullanın. -IOS geliştirmesi üzerinde çalışmalar devam etmektedir.-
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Hızlı{" "}

          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Hızlıca ve reklamsız haberleri okuyun


          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            WEB Desteği{" "}

          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Next.Js ile hızılıca WEB üzerinde kullanabilmeniz için tasarlandı.
          </p>
        </a>
      </div>
    </main>
  );
}
