import Link from "next/link";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import ProfilePage from "./profile/profile";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen snap-y snap-mandatory overflow-y-scroll">

      <div className="flex flex-col p-1 min-h-screen items-center snap-always snap-start mb-24">
        <div className="w-fit max-w-[100vw]">
          <h1 className="mt-[20%] text-gradient">Portfolio</h1>
          <h2 className="my-2">Simon Menard</h2>
          <div className="vertical-separator"></div>
        </div>
        <h3 className="text-center mt-6 mb-5 w-full">
          Découvrez mon <Link href='#profile' className="profile-link"><AccountBoxIcon fontSize="large"/>profil</Link>
          , mes<Link href='#skills' className="skills-link"> <SchoolIcon fontSize="large"/>compétences
          </Link> et mes <Link className="projects-link" href='#projects'><BuildIcon fontSize="large"/>projets</Link></h3>
        <div className="button-wrapper flex mt-auto mb-12 justify-center">
          <button>Me contacter</button>
        </div>
      </div>

      <div className="min-h-screen flex items-center snap-always snap-start">
        <ProfilePage></ProfilePage>
      </div>
    </main>
  );
}
