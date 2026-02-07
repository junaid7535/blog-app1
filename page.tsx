import Link from 'next/link';
import BlogCardSquare from '@/components/BlogCardSquare';
import { categories, blogPosts } from '@/lib/data';
import FloatingIcons from '@/components/FloatingIcons';
import CategorySlides from '@/components/CategorySlides';


export default function Home() {
  // Get featured posts
  const featuredPosts = blogPosts.slice(0, 3);
  // Get latest posts for the square card section
  const latestPosts = blogPosts.slice(3, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="font-serif relative bg-white py-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">

          {/* Floating Icons */}
          <FloatingIcons />

          {/* Heading */}
          <h1 className="text-3xl md:text-2xl font-bold text-gray-900 leading-tight">
            Discover community-made{" "}
            <span className="text-gray-400 font-semibold">libraries,</span>
            <br />
            <span className="text-gray-400 font-semibold">plugins, </span>
            <span className="text-blue-600">icon sets</span>
            <span className="text-gray-400 font-semibold">, and more</span>
          </h1>

          {/* Search Bar */}
          <div className="mt-10 flex justify-center">
            <div className="relative w-full max-w-xs">

              <input
                type="text"
                placeholder='Search for stories'
                className="w-full h-2.5 pl-11 pr-4 py-4 rounded-full bg-[#f5f5f7] text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
     

      <section className="font-serif py-12 md:py-16 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Posts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="relative block cursor-pointer"
              >
                {/* Featured Badge */}
                {index < 3 && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-yellow-500 text-white px-3 py-1 text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                )}

                {/* Blog Card */}
                <BlogCardSquare post={post} />
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* LATEST POSTS Section with Square Cards */}
      
      <section id="latest" className="font-serif py-12 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">

          {/* Section Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Latest Posts</h2>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block"
              >
                <BlogCardSquare post={post} />
              </Link>
            ))}
          </div>

        </div>
      </section>




      {/* Categories Section */}


      <CategorySlides></CategorySlides>

      {/* Stats Section */}
      <section className="font-serif py-12 md:py-16 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">{blogPosts.length}</div>
              <div className="text-gray-600 font-medium">Total Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">{categories.length}</div>
              <div className="text-gray-600 font-medium">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">
                {Array.from(new Set(blogPosts.map(post => post.author))).length}
              </div>
              <div className="text-gray-600 font-medium">Contributing Authors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}