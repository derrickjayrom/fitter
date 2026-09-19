import React, { useState } from 'react';
import { BLOG_POSTS_DATA } from '../data/initialData';
import { useApp } from '../context/AppContext';
import { ContactCTA } from '../components/ContactCTA';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';

export const BlogView: React.FC = () => {
  const { setSelectedBlog } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Maintenance', 'Diagnostics', 'Electrical'];

  const filteredPosts = activeCategory === 'All'
    ? BLOG_POSTS_DATA
    : BLOG_POSTS_DATA.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-16">
      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-workshop-900 border border-workshop-700 text-sm text-crimson-400 font-bold uppercase tracking-wider rounded">
          <BookOpen className="w-4 h-4" />
          <span>Automotive Knowledge & Maintenance</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Car Care Tips & Engineering Insights
        </h1>
        <p className="text-base sm:text-xl text-slate-200 leading-relaxed">
          Practical advice from certified technicians on extending vehicle life, recognizing warning signs, and maintaining reliability under Ghanaian driving conditions.
        </p>
      </div>

      {/* Filter Tabs (Extended across with generous spacing) */}
      <div className="flex flex-wrap items-center gap-3 pb-2 border-b border-workshop-800">
        <span className="text-sm text-workshop-400 font-bold uppercase tracking-wider mr-2">
          Category:
        </span>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 text-sm sm:text-base font-bold rounded transition-colors ${
              activeCategory === cat
                ? 'bg-crimson-600 text-white shadow'
                : 'bg-workshop-900 text-workshop-300 hover:text-white border border-workshop-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <article
            key={post.id}
            className="group bg-workshop-900 border border-workshop-800 hover:border-workshop-600 rounded overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-xl"
          >
            <div>
              <div className="relative h-56 w-full overflow-hidden bg-workshop-950">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-90 contrast-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-workshop-950/90 text-crimson-400 border border-crimson-900/60 rounded backdrop-blur-xs">
                  {post.category}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-xs sm:text-sm text-workshop-400">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-crimson-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => setSelectedBlog(post)}
                className="inline-flex items-center text-sm font-bold text-crimson-400 hover:text-crimson-300 group-hover:underline"
              >
                Read Article <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <ContactCTA />
    </div>
  );
};
