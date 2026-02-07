import Link from 'next/link';
import { categories, blogPosts } from '@/lib/data';

// Use emojis as icons
const categoryIcons = {
  web: "💻",
  design: "🎨",
  food: "🍕",
  writing: "✍️",
  travel: "🧳",
  books: "📚",
  music: "🎵",
  photography: "📷",
  gaming: "🎮",
  lifestyle: "❤️",
  tech: "💡",
  business: "📈"
};

export default function CategoriesPage() {
  return (
    <div className="font-serif min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore <span className="text-blue-600">Categories</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover amazing content across various topics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const categoryPosts = blogPosts.filter(post => post.category === category.id);
            const icon = categoryIcons[category.id as keyof typeof categoryIcons] || "📄";
            
            return (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-blue-300"
              >
                {/* Emoji Icon */}
                <div className="mb-4 text-3xl">
                  {icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    {categoryPosts.length} posts
                  </span>
                  <span className="text-blue-600 text-sm font-medium">
                    View →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </div>
  );
}