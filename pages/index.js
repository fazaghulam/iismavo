import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Faza's UK Story</title>
        <link rel="icon" href="/uk-flag.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="w-full h-full py-8 text-primary">
        <div className="w-full flex">
          <div className="w-3/4 pl-40 self-center">
            <div className="max-w-2xl">
              <p className="text-[64px] font-light mb-14">
                THE RECAP OF <span className="font-semibold">IISMAVO</span> JOURNEY IN UNITED KINGDOM
              </p>
              <p className="text-base mb-6">
                Hi, <span className="font-semibold">I'm Faza</span>
              </p>
              <p className="text-base max-w-xs">
                In this blog, I will share my experience as IISMAVO awardee for 4 months in the UK. Hope you enjoy the story
                :)
              </p>
            </div>
          </div>
          <Image src="/tower_bridge.jpg" alt="tower bridge" width={520} height={744} />
        </div>
      </div>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
