import Link from 'next/link';

export default function Contact() {
  return (
    <div className="font-serif py-12 bg-[#f5f5f7]">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              We’d love to hear from you! <br /> <br />

              Whether you have a question, feedback, a collaboration idea,
              or just want to say hello — feel free to reach out.
            </p>

            <div className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#f5f5f7] rounded-full flex items-center justify-center">
                    <img
                      src="/icon/location.png"
                      alt="Location"
                      className="w-5 h-5"
                    />
                  </div>

                  <div>
                    <p className="font-medium text-black">Location</p>
                    <p className="text-black text-sm">New Delhi, India</p>
                  </div>
                </div>
              </div>


              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#f5f5f7] rounded-full flex items-center justify-center">
                  <img
                    src="/icon/email.png"
                    alt="Email"
                    className="w-5 h-5"
                  />
                </div>

                <div>
                  <p className="font-medium text-black">Email</p>
                  <p className="text-black text-sm">mohdjunaid17797@gmail.com</p>
                </div>
              </div>

            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}