import { notFound } from 'next/navigation';
import BlogCard from '@/components/BlogCard';
import { categories, blogPosts } from '@/lib/data';
import BlogCardSquare from '@/components/BlogCardSquare';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  
  const categoryData = categories.find(cat => cat.id === category);
  const categoryPosts = blogPosts.filter(post => post.category === category);
  
  if (!categoryData) {
    notFound();
  }

  return (
    <div className="font-serif py-12 bg-[#f5f5f7]">
      <div className="container mx-auto px-4">
        <div className={`inline-block ${categoryData.color} px-6 py-2 rounded-lg mb-4`}>
          <span className="font-medium">{categoryData.name}</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{categoryData.name} Blogs</h1>
        <p className="text-gray-600 text-lg mb-8">{categoryData.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryPosts.length > 0 ? (
            categoryPosts.map((post) => (
              <BlogCardSquare key={post.id} post={post} showCategory={false} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-xl">No posts found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}
