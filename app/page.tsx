import Link from "next/link";
import './page.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen">
      <div className="flex flex-col p-1 max-w-md items-center">
        <div className="w-fit max-w-[100vw]">
          <h1 className="mt-[20%] text-gradient">Portfolio</h1>
          <h2 className="my-2">Simon Menard</h2>
          <div className="vertical-separator"></div>
        </div>
        <h3 className="text-center mb-5 w-full">
          Découvrez mon <Link href='/profile' className="profile-link"><AccountBoxIcon/>profil</Link>
          , mes<Link href='/skills' className="skills-link"> <SchoolIcon/>compétences
          </Link> et mes <Link className="projects-link" href='/projects'><BuildIcon/>projets</Link></h3>
        <div className="button-wrapper flex mt-12 justify-center">
          <button>Let&apos;s go !</button>
        </div>
      </div>
    </main>
  );
}
