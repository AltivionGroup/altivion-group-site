import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Altivion Logo" width={40} height={40} />
          <span className="text-xl font-bold text-white">Altivion Group</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-6 py-12">
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#C0C0C0" }}>
            Altivion Group
          </h1>
          <p className="text-xl text-gray-300">
            Building the Future Across Industries.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">
            About Us
          </h2>
          <p className="text-lg text-gray-400">
            Altivion Group is a bold, multi-sector holding company redefining
            what's possible in Energy, Real Estate, Logistics, Smart Tech, and
            GIS. We're not just building companies — we're building an empire.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
            Active Ventures
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                name: "Fuelify – Mobile Fuel Delivery",
                url: "https://fuelifyme-mocha.vercel.app",
              },
              {
                name: "Waypoint Geospatial – Drone + GIS",
                url: "https://jjones1026.github.io/waypoint-geospatial/",
              },
            ].map((venture) => (
              <a
                key={venture.name}
                href={venture.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 bg-gray-800 rounded-xl border border-green-600 shadow-md hover:bg-gray-700 transition relative"
              >
                {venture.name}
                <span className="absolute top-2 right-2 text-xs text-green-400 hidden group-hover:block">
                  ✅ Active
                </span>
              </a>
            ))}
          </ul>

          <h2 className="text-2xl font-medium text-gray-400 mb-4">
            Ventures Coming Soon
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-90">
            {[
              "TBD – Real Estate Division",
              "New Name – AI Smart Systems",
              "Nomadic Pour – Mobile Bar Experience",
              "Bravo Eight – Logistics & Freight",
            ].map((venture) => (
              <li
                key={venture}
                className="group p-4 bg-gray-800 rounded-xl border border-gray-600 relative transition"
              >
                {venture}
                <span className="absolute top-2 right-2 text-xs text-yellow-400 hidden group-hover:block">
                  🚧 Coming Soon
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
