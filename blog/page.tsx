import BlogCardSquare from '@/components/BlogCardSquare';
import { blogPosts } from '@/lib/data';

export default function AllBlogsPage() {
  return (
    <div className="py-12 bg-[#f5f5f7] font-serif">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">All Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCardSquare key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}