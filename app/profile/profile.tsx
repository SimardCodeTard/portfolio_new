"use client";
import Image from "next/image";

import './profile.css';

export default function ProfilePage() {
    return (
        <div className="profile-page card mx-6">
            <div className="card-header flex justify-center">
                <h2>A propos de moi</h2>
            </div>
            <div className="card-content space-x-4 sm:space-x-6">
                <Image src="/profile.png" height="500" width="500" alt=":)" className="aspect-square w-48 h-48"></Image>
                <div className="space-y-4">
                    <p>Je suis Simon, <b>développeur web fullstack</b> (presque !) diplômé d&apos;un BUT en informatique après trois ans de formation.</p>
                    <p>Solitaire de nature, j’ai toujours passé beaucoup de temps libre sur un ordinateur et me suis lancé dans le développement en 2021.</p>
                    <p>En dehors du code, j’adore m’immerger dans des <b>jeux vidéo</b> variés, explorer notre univers à travers <b>l’astronomie et la physique</b>, et comprendre notre monde grâce aux récits épiques de notre <b>histoire</b>.</p>
                    <p>J’apprécie aussi <b>philosopher avec mes amis</b>, en discutant et débattant pendant de longues heures de sujets variés. Notre question du moment est de savoir si l’Homme dispose d’un réel libre arbitre et si il arrive à s&apos;abstraire du déterminisme de l’univers. En grand optimiste, je defends corps et âme le oui !</p>
                    <p>Explorez ce site pour en apprendre plus sur ma pratique du développement à travers mes projets et sur ma formation en découvrant mes compétences.</p>
                </div>
            </div>
        </div>
    );
}