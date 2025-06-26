export default function Films() {
  const films = [
    {
      title: "A Quiet Place (2018)",
      description:
        "A horror film that features a deaf character and uses American Sign Language as a primary form of communication.",
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
