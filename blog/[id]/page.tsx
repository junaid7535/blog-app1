import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, categories } from '@/lib/data';
import BlogLayout from '@/components/BlogLayout';

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    notFound();
  }

  const category = categories.find(cat => cat.id === post.category);
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Generate TOC from content sections
  const toc = post.content.map((section, index) => ({
    id: section.id || `section-${index}`,
    title: section.heading,
    level: 1
  }));

  // Add additional TOC items if needed
  if (relatedPosts.length > 0) {
    toc.push({
      id: 'related-posts',
      title: 'Related Posts',
      level: 1
    });
  }

  // Blog metadata
  const blogMeta = {
    title: post.title,
    author: post.author,
    date: post.date,
    readTime: post.readTime,
    tags: [category?.name || 'Uncategorized', ...(post.tags || [])],
    views: post.views || undefined
  };

  return (
    <BlogLayout toc={toc} meta={blogMeta}>
      {/* Blog Content */}
      <div className="prose prose-lg max-w-none">
        {/* Featured Image */}
        {post.imageUrl && (
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6 not-prose">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href={`/categories/${post.category}`} className="hover:text-blue-600">
            {category?.name}
          </Link>
          {' > '}
          <span className="text-gray-800 font-medium">{post.title}</span>
        </nav>

        {/* Main Content Sections */}
        <div className="space-y-12">
          {post.content.map((section, index) => (
            <section
              key={index}
              id={section.id || `section-${index}`}
              className="scroll-mt-24" // Offset for fixed header
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {section.heading}
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg my-6">
                <p className="text-blue-900 font-medium whitespace-pre-line">
                  {section.body}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section id="related-posts" className="mt-16 pt-8 border-t scroll-mt-24">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
                  <h4 className="font-bold text-gray-800 mb-2">
                    <Link href={`/blog/${relatedPost.id}`} className="hover:text-blue-600">
                      {relatedPost.title}
                    </Link>
                  </h4>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{relatedPost.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{relatedPost.date}</span>
                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Back Button */}
        <div className="mt-12 text-center not-prose">
          <Link
            href={`/categories/${post.category}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to {category?.name} category
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}