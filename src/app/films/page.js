export default function Films() {
  const films = [
    {
      title: "Crip Camp: A Disability Revolution (2020)",
      description:
        "A documentary about a groundbreaking summer camp for teens with disabilities that sparked a disability rights movement.",
    },
    {
      title: "The Theory of Everything (2014)",
      description:
        "A biographical drama about the life of theoretical physicist Stephen Hawking, his battle with ALS, and his groundbreaking work in cosmology.",
    },
    {
      title: "Ray (2004)",
      description:
        "A biographical movie about the life of legendary musician Ray Charles, who lost his sight at a young age and went on to become a pioneer of soul music.",
    },
    {
      title: "Walk. Ride. Rodeo. (2019)",
      description:
        "A biopic about the life of rodeo barrel racer Amberley Snyder, who returned to competition after a car accident left her paralyzed from the waist down.",
    },
    {
      title: "Breathe (2017)",
      description:
        "A film chronicling the life of Robin Cavendish, who became a pioneering advocate for disabled people after being paralyzed by polio.",
    },
    {
      title: "The Peanut Butter Falcon (2019)",
      description:
        "A comedy-drama about a young man with Down syndrome who runs away to pursue his dream of becoming a professional wrestler.",
    },
    {
      title: "I Am Sam (2001)",
      description:
        "A drama about a man with an intellectual disability fighting for custody of his daughter.",
    },
    {
      title: "Still Alice (2014)",
      description:
        "A drama about a linguistics professor diagnosed with early-onset Alzheimer's disease.",
    },
    {
      title: "The Fundamentals of Caring (2016)",
      description:
        "A comedy-drama about a writer who becomes a caregiver for a young man with Duchenne muscular dystrophy.",
    },
    {
      title: "A Quiet Place (2018)",
      description:
        "A horror film that features a deaf character and uses American Sign Language as a primary form of communication.",
    },
    {
      title: "The Terry Fox Story (1983)",
      description:
        "A biographical film about the Canadian athlete and cancer research activist who embarked on a cross-Canada run to raise money and awareness for cancer research.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="font-godfather text-3xl pb-12">Films</h1>
      <div className="max-w-4xl w-full">
        <div className="space-y-8">
          {films.map((film, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2 text-gfblack">{film.title}</h2>
              <p className="text-base text-gray-700">{film.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
