import Image from "next/image";

export default function WesleyJonesCard() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 max-w-4xl w-full shadow-xl flex flex-col md:flex-row gap-6 items-center">
        {/* Profile Image */}
        <div className="relative group">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-600 group-hover:border-orange-500 transition duration-300">
            <Image
              src="/ceo.png" // put your image here
              alt="Wesley Jones"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI-generated based on realistic images
          </p>
        </div>

        {/* Text & Roles */}
        <div className="flex-1 text-left space-y-2">
          {/* Logos and Company */}
          <div className="flex items-center justify-center md:justify-start gap-6">
            <Image src="/logo.png" alt="Altivion Logo" width={60} height={60} />
            <div className="text-sm text-gray-400 space-x-4">
              <span>Waypoint Geospatial</span>
              <span>Fuelify</span>
            </div>
          </div>

          {/* Name & Titles */}
          <h1 className="text-3xl font-bold text-orange-400">
            Wesley Jones, John
          </h1>

          <div className="text-gray-300 text-sm">
            <p>Founder | Chief Visionary Officer – Altivion</p>
            <p>Founder | Chief Geospatial Officer – Waypoint Geospatial</p>
            <p>Founder | Chief Operations Officer – Fuelify</p>
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
              className="bg-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-400"
            >
              View Site
            </a>
            <a
              href="tel:+1234567890"
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
