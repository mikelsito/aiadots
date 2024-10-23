import Image from "next/image";

import image1 from "../../public/static/images/image1.jpg";
import image2 from "../../public/static/images/image2.jpg";
import image3 from "../../public/static/images/image3.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-screen-lg p-12 m-auto text-xl">
      <Image src={image2} width={500} height={500} alt="" />
      <p className="text-base text-right w-500">
        <i>
          Dreaming New Worlds Are Possible in a Tree of Worth by Ella Quainton
        </i>
      </p>
      <ul className="list-disc p-12">
        <li className="p-3">
          Ableism is when non-disabled people get to decide what quality of life
          looks like.
        </li>
        <li className="p-3">
          Ableism works through a system that requires you to live in poverty in
          order to receive services while punishing us for being poor, for
          needing care, and for relying on that system and those with agency
          within that system in the first place.
        </li>
        <li className="p-3">
          Ableism survives because it lives in our hearts, in our minds, in our
          bodies, and in our scars. Because it is leveraged in every single
          system of oppression. Because it was invented to make oppression
          justifiable.
        </li>
      </ul>
      <Image src={image3} width={500} height={500} alt="" />
      <p className="text-base text-right w-500">
        <i>
          When Technology Can Assist But Not Control Nature by Sishir Bommakanti
        </i>
      </p>
      <ul className="list-disc p-12">
        <li className="p-3">
          Ableism asks why won’t you die and then has the audacity to be
          inspired when we live.
        </li>
        <li className="p-3">
          Ableism is half of covid deaths being disabled people but those
          communities not being prioritized to receive a vaccine or be given
          care.
        </li>
        <li className="p-3">
          Ableism is hidden in bold headlines that should read “another person
          in mental distress has been murdered at the hands of the police” and
          ableism is solidified when there is insufficient consequence for that
          murder.
        </li>
      </ul>
      <Image src={image1} width={500} height={500} alt="" />
      <p className="text-base text-right w-500">
        <i>Wounded Bird in the Sky Delivers a Message by Shaista Langaria</i>
      </p>
      <ul className="list-disc p-12">
        <li className="p-3">
          Ableism feels like a knife cutting you open bit by bit while people
          stare and remind you that it only hurt because you haven’t overcome
          its wound.
        </li>
        <li className="p-3">
          Ableism is thinking disability will never happen to you.
        </li>
        <li className="p-3">
          Ableism is given through encouraging words from a society that tells
          parents and caregivers it’s okay that you killed them… they were a
          burden and of course you couldn’t take it anymore.
        </li>
      </ul>
      <p className="text-base text-right w-500">
        <i>
          "Ableism Is..." Commandments turned into bullet points by Brittanie
          Hernandez Wilson from the poem{" "}
          <a
            className="hover:underline"
            href="https://cripstory.wordpress.com/2017/04/01/naming-ableism/"
          >
            "Naming Ableism" by Maria R. Palacios
          </a>
        </i>
      </p>
    </main>
  );
}
