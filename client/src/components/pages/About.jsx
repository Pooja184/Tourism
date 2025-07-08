import React from "react";

function About() {
  return (
    <div className="px-6 py-8 md:py-12 lg:px-16 max-w-5xl mx-auto font-serif bg-orange-100 rounded-md m-4">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Welcome to{" "}
            <span className="uppercase text-orange-700 text-4xl md:text-5xl">
              Ratnagiri
            </span>
          </h3>
          <p className="text-gray-700 mt-4 md:text-lg">
            Ratnagiri, a coastal district in Maharashtra, India, is a treasure
            trove of natural beauty, rich history, and vibrant culture. Our
            website is your gateway to exploring the unspoiled charm of
            Ratnagiri.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-slate-50 rounded-md shadow-xl p-4 md:p-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Our Mission
          </h3>
          <p className="text-gray-700 mt-4 md:text-lg">
            Our mission is to promote sustainable tourism in Ratnagiri,
            showcasing its unique attractions, and providing a platform for
            tourists to plan their trip. We aim to preserve the natural and
            cultural heritage of Ratnagiri while ensuring a memorable experience
            for our visitors.
          </p>
        </section>

        {/* About Section */}
        <section className="bg-slate-50 rounded-md shadow-xl p-4 md:p-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            About Ratnagiri
          </h3>
          <p className="text-gray-700 mt-4 md:text-lg">
            Ratnagiri is situated on the Arabian Sea coast, approximately 350 km
            south of Mumbai. The district is blessed with a diverse landscape,
            featuring beaches, hills, forests, and waterfalls. Ratnagiri is also
            famous for its Alphonso mangoes, historic forts, and ancient
            temples.
          </p>
        </section>

        {/* Closing Statement */}
        <p className="text-center text-gray-700 mt-8 font-extrabold text-lg md:text-xl">
          We look forward to welcoming you to Ratnagiri!
        </p>
      </div>
    </div>
  );
}

export default About;