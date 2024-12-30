import Image from "next/image";
import { aboutContent, aboutStats } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          {aboutContent.title}
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src={aboutContent.image}
              alt={aboutContent.title}
              width={400}
              height={600}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-6">{aboutContent.description}</p>
            <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
            <ul className="list-disc list-inside mb-6">
              {aboutContent.achievements.map((achievement, index) => (
                <li key={index} className="mb-2">
                  {achievement}
                </li>
              ))}
            </ul>
            <blockquote className="border-l-4 border-yellow-400 pl-4 italic">
              &quot;{aboutContent.quote}&quot;
            </blockquote>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {aboutStats.map((stat, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </h3>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
