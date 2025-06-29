'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { PostMeta } from '@/lib/getPosts';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Star, Clock } from 'lucide-react';

export default function BlogPage() {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const fetchedPosts = await response.json();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const blogCategories = [
    {
      title: 'Siding Installation',
      description: 'Expert guides on vinyl, fiber cement, wood, and composite siding',
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-50 to-indigo-50 border-blue-100',
    },
    {
      title: 'Home Maintenance',
      description: 'Seasonal tips to protect and maintain your home exterior',
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      color: 'from-green-50 to-emerald-50 border-green-100',
    },
    {
      title: 'Storm Damage',
      description: 'Emergency response and insurance claim guidance',
      icon: <Star className="w-6 h-6 text-purple-600" />,
      color: 'from-purple-50 to-violet-50 border-purple-100',
    },
    {
      title: 'Industry News',
      description: 'Latest trends and innovations in construction',
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      color: 'from-orange-50 to-amber-50 border-orange-100',
    },
  ];

  const featuredTopics = [
    'Choosing the Right Siding Material',
    'Storm Damage Assessment Guide',
    'Energy Efficiency Improvements',
    'Seasonal Maintenance Checklist',
    'Insurance Claims Process',
    'Color Selection Tips',
  ];

  return (
    <>
      <Head>
        <title>Siding & Construction Blog – Expert Tips & Industry Insights | Anderson Siding</title>
        <meta name="description" content="Expert insights on siding installation, home maintenance, storm damage repair, and construction trends from Illinois' trusted siding professionals." />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">Siding & Construction Blog</h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Expert insights, maintenance tips, and industry knowledge from Illinois&apos; most trusted siding professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Get Expert Advice
                </button>
              </Link>
              <button
                onClick={() => document.getElementById('blog-articles')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Browse Articles
              </button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Popular Topics</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Explore our most helpful content categories</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {blogCategories.map((category, index) => (
                <div key={index} className={`group bg-gradient-to-br ${category.color} rounded-3xl p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-xl group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Topics */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">What Our Readers Love</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Most popular topics and frequently asked questions</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuredTopics.map((topic, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 font-medium">{topic}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Articles */}
        <section id="blog-articles" className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Latest Articles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Stay informed with our latest insights and expert advice</p>
            </div>

            {loading ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden animate-pulse">
                    <div className="p-8">
                      <div className="h-4 bg-gray-200 rounded mb-4 w-24"></div>
                      <div className="h-6 bg-gray-200 rounded mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded mb-6 w-3/4"></div>
                      <div className="flex justify-between">
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : posts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-4 leading-tight">{post.title}</h2>

                      <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          <span>Anderson Siding Team</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300 font-medium">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-100 max-w-2xl mx-auto">
                  <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon!</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We&apos;re working on creating valuable content to help you with your siding and home improvement projects. Check back soon for expert tips, maintenance guides, and industry
                    insights.
                  </p>
                  <Link href="/contact">
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Get Expert Advice Now
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-6">Stay Updated with Expert Tips</h2>
            <p className="text-xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">Get the latest siding maintenance tips, industry insights, and seasonal advice delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/20" />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-4">No spam, just valuable home improvement insights. Unsubscribe anytime.</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Have Questions About Your Siding Project?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t see what you&apos;re looking for? Our experts are here to provide personalized advice for your specific project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Ask Our Experts
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300">View Our Services</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
