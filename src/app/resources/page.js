export default function Resources() {
  const resourceCategories = [
    {
      title: "Disability Justice is Collective Liberation",
      resources: [
        {
          href: "https://www.talilalewis.com/blog",
          title: "TALILA A. LEWIS - TL's BLOG",
          description:
            "A blog by Talila A. Lewis, a community lawyer and consultant, focusing on the intersection of disability, race, and gender.",
        },
        {
          href: "https://abolishtime.medium.com/identifying-and-rejecting-ableism-in-movement-work-322e2c85a80c",
          title: "Identifying And Rejecting Ableism In Movement Work",
          description:
            "An article on the connection between ableism, anti-Blackness, and oppressive divisions of labor.",
        },
        {
          href: "https://docs.google.com/document/d/1qkhYKLmNSulh1xyPBVxmgIMmM15MCFtrNH2Pqint5SY/mobilebasic?urp=gmail_link",
          title: "Disability Justice Resource Directory",
          description:
            "A comprehensive, evolving list of disability justice tools and resources.",
        },
        {
          href: "https://disabilityvisibilityproject.com/",
          title: "Disability Visibility Project",
          description:
            'An online community dedicated to creating, sharing, and amplifying disability media and culture. Features a wide range of content including blog posts, podcasts, and personal essays from disabled people.',
        },
        {
          href: "https://mrac.org/accessibility-resources/",
          title: "Accessibility for Arts Organizations",
          description:
            "A collection of online resources from the Metropolitan Regional Arts Council to assist arts organizations in becoming more accessible to participants of all abilities.",
        },
        {
          href: "https://www.disabilityintersectionalitysummit.com/",
          title: "Disability & Intersectionality Summit",
          description:
            "A biennial national conference that centers the multiple oppressions that shape the lived experiences of disabled individuals, as told by disabled people, in a setting organized by disabled activists.",
        },
      ],
    },
    {
      title: "The Medical Industrial Complex",
      resources: [
        {
          href: "https://leavingevidence.wordpress.com/2015/02/06/medical-industrial-complex-visual/",
          title: "Medical Industrial Complex Visual | Leaving Evidence",
          description:
            "A visual tool for understanding the Medical Industrial Complex (MIC) and its role in collective liberation. This resource helps to illustrate the network of institutions and systems that profit from sickness and disability.",
        },
        {
          href: "https://www.susanraffo.com/blog/healing-histories-disrupting-the-medical-industrial-complex-1",
          title:
            "Healing histories: disrupting the medical industrial complex — Susan Raffo",
          description:
            "A blog post introducing an interactive history of the US medical industrial complex, created by a team of organizers and practitioners. It aims to provide a deeper understanding of the historical roots of our current medical system.",
        },
      ],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <h1 className="font-godfather text-4xl pb-8">Resources</h1>
      <div className="max-w-4xl w-full">
        {resourceCategories.map((category, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-2xl font-bold underline mb-6 flex items-center justify-center">{category.title}</h2>
            <div className="space-y-6">
              {category.resources.map((resource, rIndex) => (
                <div key={rIndex}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-gfred hover:underline"
                  >
                    {resource.title}
                  </a>
                  <p className="mt-1 text-base">{resource.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
