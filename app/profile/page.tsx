import Image from "next/image";

export default function ProfilePage() {
    return <main className="flex justify-center min-h-screen">
        <Image src="/shrek.png" height="500" width="500" alt=":)"></Image>
        <div>
            <h1>This is me !</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perferendis non suscipit modi quos necessitatibus neque quis, dolorum rerum, cumque, facere ducimus dicta iste cum veniam! Officiis animi quia ad.</p>
        </div>
    </main>
}