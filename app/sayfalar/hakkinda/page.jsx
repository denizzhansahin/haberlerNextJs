import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import E from "./playstore.png"

function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-rows-4 lg:text-left">
      <a
        href="https://www.linkedin.com/in/denizzhan-sahin/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
        Proje Hakkında{" "}

        </h2>
        <p className="m-0 max-w text-sm opacity-50">
        Haberler 2024 projesi ücretsiz olarak ve reklamsız olarak yapay zeka görsel oluşturma ve özgün olarak hazırlanan içeriklerin paylaşılması için oluşturulmuştur. Her hafta sadece önemli olan haberlerin eklenmesi ve paylaşılması üzerine geliştirilmektedir.
        </p>
      </a>

      <a
        href="https://www.linkedin.com/in/denizzhan-sahin/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
        Kullanılan Teknolojiler{" "}

        </h2>
        <p className="m-0 max-w text-sm opacity-50">
        TypeScript dilinde geliştirilen projemiz WEB sitesi kısmında Redux Toolkit ve Next.JS kullanmaktadır. Android ve IOS cihazlar için ise React Native tabanlı uygulama geliştirilmiştir ve Redux Toolkit kullanılmıştır.
        Google Firebase ile birlikte veritabanı, depolama ve hosting işlemleri kullanılmaktaıdır. Uygulamanın çalışabilmesi için internet bağlantısı gerekmektedir.
        </p>
      </a>

      <a
        href="https://github.com/denizzhansahin/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Açık Kaynak Kodlar{" "}

        </h2>
        <p className="m-0 max-w text-sm opacity-50">
        Projenin geliştirilmesi için yazılan kodlar, GitHub üzerinden herkese erişilebilirdir. Projemize katkdıa bulunmak, kendi projenizi oluşturmak(GitHub adresini referans göstermek şartıyla) ve yapılan değişiklikleri takip etmek için kullanabilirsiniz.


        </p>
      </a>

      <a
        href="https://www.denizhansahin.com/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Geliştirici{" "}

        </h2>
        <p className="m-0 max-w text-balance text-sm opacity-50">
          Bu proje Denizhan Şahin tarafından geliştirilmiştir. Ayrıntılı bilgi için www.denizhansahin.com adresine gidebilirsiniz. Ayrıntılı bilgi için ayrıca bu adresi de ziyaret edebilirsiniz.
          https://www.linkedin.com/in/denizzhan-sahin/
        </p>
      </a>

      <div className="">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://play.google.com/store/apps/details?id=com.denizhan661907.haberler"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <Image
              src={E}
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={48}
              priority
            />
          </a>
        </div>
    </div>
  </main>
  )
}

export default page