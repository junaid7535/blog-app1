import Link from 'next/link';

export default function About() {
  return (
    <div className="font-serif py-12 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-800 mb-6">About StoriesStack</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Our Story */}
          <div className="bg-[#f5f5f7] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Story
            </h2>

            <p className="text-gray-700 leading-relaxed">
              StoriesStack is a platform dedicated to sharing insightful, practical,
              and easy-to-understand content on technology, development, and modern web
              trends.
              <br /><br />
              We believe that knowledge grows when it’s shared. That’s why we focus on
              creating high-quality articles, tutorials, and guides that help readers
              build real-world skills and stay up-to-date in a fast-changing digital
              world.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-[#f5f5f7] p-6 rounded-lg text-black">
            <h3 className="text-2xl font-bold text-black mb-4">
              Our Mission
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-black-500 mr-2">•</span>
                <span>Share clear, practical, and easy-to-understand blog content</span>
              </li>

              <li className="flex items-start">
              <span className="text-black-500 mr-2">•</span>
                <span>Help learners grow their skills through real-world examples</span>
              </li>

              <li className="flex items-start">
              <span className="text-black-500 mr-2">•</span>
                <span>Make technology and development concepts accessible to everyone</span>
              </li>

              <li className="flex items-start">
              <span className="text-black-500 mr-2">•</span>
                <span>Encourage continuous learning and knowledge sharing</span>
              </li>

              <li className="flex items-start">
              <span className="text-black-500 mr-2">•</span>
                <span>Build and user-friendly reading experience</span>
              </li>
            </ul>
          </div>

        </div>


        
      </div>
    </div>
  );
}