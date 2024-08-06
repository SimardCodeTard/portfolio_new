import Link from "next/link";
import './page.css';

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen">
      <div className="flex flex-col p-1">
        <div className="w-fit max-w-[100vw]">
          <h1 className="mt-[20%] text-gradient">Portfolio</h1>
          <h2 className="my-2">Simon Menard</h2>
          <div className="vertical-separator"></div>
        </div>
        <h3 className="text-center mb-5">
          Découvrez mon <Link href='/profile' className="profile-link">profil</Link>
          , mes <br></br> <Link href='/skills' className="skills-link">compétences
          </Link> et mes <Link className="projects-link" href='/projects'>projets</Link></h3>
        <div className="flex mt-24 justify-center">
          <button>Let&apos;s go !</button>
        </div>
      </div>
    </main>
  );
}
