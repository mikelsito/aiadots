import Image from "next/image";

import image1 from "../../public/static/images/image1.jpg";
import image2 from "../../public/static/images/image2.jpg";
import image3 from "../../public/static/images/image3.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="font-godfather text-6xl pb-12">Home</h1>
      <Image src={image2} width={500} height={500} alt="" />
      <ul>
        <li>
          Ableism is when non-disabled people get to decide what quality of life
          looks like.
        </li>
        <li>
          Ableism works through a system that requires you to live in poverty in
          order to receive services while punishing us for being poor, for
          needing care, and for relying on that system and those with agency
          within that system in the first place.
        </li>
        <li>
          Ableism survives because it lives in our hearts, in our minds, in our
          bodies, and in our scars. Because it is leveraged in every single
          system of oppression. Because it was invented to make oppression
          justifiable.
        </li>
      </ul>
      <Image src={image3} width={500} height={500} alt="" />
      <ul>
        <li>
          Ableism asks why won’t you die and then has the audacity to be
          inspired when we live.
        </li>
        <li>
          Ableism is half of covid deaths being disabled people but those
          communities not being prioritized to receive a vaccine or be given
          care.
        </li>
        <li>
          Ableism is hidden in bold headlines that should read “another person
          in mental distress has been murdered at the hands of the police” and
          ableism is solidified when there is insufficient consequence for that
          murder.
        </li>
      </ul>
      <Image src={image1} width={500} height={500} alt="" />
      <ul>
        <li>
          Ableism feels like a knife cutting you open bit by bit while people
          stare and remind you that it only hurt because you haven’t overcome
          its wound.
        </li>
        <li>Ableism is thinking disability will never happen to you.</li>
        <li>
          Ableism is given through encouraging words from a society that tells
          parents and caregivers it’s okay that you killed them… they were a
          burden and of course you couldn’t take it anymore.
        </li>
      </ul>
    </main>
  );
}
