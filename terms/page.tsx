import Link from 'next/link';

export default function Terms() {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/" 
          className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700">
              These Terms of Service are for demonstration purposes only. 
              BlogHub is a static blog application built with Next.js.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing this website, you agree to be bound by these Terms of Service.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Use License</h2>
          <p className="text-gray-700 mb-4">
            Permission is granted to temporarily view the materials on BlogHub's website.
            This is the grant of a license, not a transfer of title.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            The materials on BlogHub's website are provided on an 'as is' basis.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Limitations</h2>
          <p className="text-gray-700 mb-4">
            In no event shall BlogHub be liable for any damages arising out of the use.
          </p>
        </div>
      </div>
    </div>
  );
}