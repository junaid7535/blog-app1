import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/" 
          className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700">
              This is a demonstration privacy policy for the BlogHub application.
              This is a static blog application built for educational purposes.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            Since this is a static website, we do not collect any personal information.
            The application is built with Next.js and serves static content only.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cookies</h2>
          <p className="text-gray-700 mb-4">
            This website does not use cookies for tracking purposes.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}