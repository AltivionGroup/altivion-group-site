import Image from "next/image";

export default function JesseLattimoreCard() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 max-w-4xl w-full shadow-xl flex flex-col md:flex-row gap-6 items-center">
        {/* Profile Image */}
        <div className="relative group pt-4">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-600 group-hover:border-orange-500 transition duration-300">
            <Image
              src="/businesscards/jlatt.png"
              alt="Jesse Lattimore"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI-generated based on realistic images
          </p>
        </div>

        {/* Text & Logos */}
        <div className="flex-1 text-left space-y-2">
          {/* Logos and Company Centered Above Name */}
          <div className="flex flex-col items-center gap-2 mt-4">
            {/* Altivion Logo */}
             <Image
              src="/logo.png"
              alt="Altivion Logo"
              width={60}
              height={60}
              className="mx-auto"
            />

            {/* Venture Logos Side-by-Side */}
            <div className="flex justify-center gap-4 mt-2">
               <Image
                src="/venturelogo/wpg-rbg-logo.png"
                alt="Waypoint Geospatial"
                width={100}
                height={35}
                className="object-contain"
              />
              <Image
                src="/venturelogo/fuel-rbg-logo.png"
                alt="Fuelify"
                width={100}
                height={35}
                className="object-contain"
              />
              <Image
                src="/venturelogo/b8-rbg-logo.png"
                alt="Fuelify"
                width={100}
                height={35}
                className="object-contain"
              />
            </div>
          </div>

          {/* Name & Titles */}
          <h1 className="text-3xl font-bold text-gray-300 drop-shadow-[0_1.5px_1.5px_rgba(255,255,255,0.3)]">
            Jesse Lattimore
          </h1>

          <div className="text-gray-300 text-sm">
            <p>Partner | Chief Logistics Officer – Altivion Group</p>
            <p>Co-Founder | Director of Field Ops – Bravo Eight</p>
          </div>

          {/* Contact */}
          <div className="mt-4 space-y-1 text-gray-400 text-sm">
            <p>
              Email:{" "}
              <a
                href="mailto:altiviongroup@gmail.com"
                className="text-blue-400"
              >
                altiviongroup@gmail.com
              </a>
            </p>
            <p>Location: Hastings, FL</p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://altivion-group-site.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 text-black px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              View Site
            </a>
            <a
              href="tel:+14787503476"
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
