import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
};

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the cutting-edge technologies and methodologies shaping the future of web development. From AI-powered tools to serverless architecture, discover what\'s next in the digital landscape.',
      author: 'John Doe',
      date: 'Jan 15, 2025',
      readTime: '5 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
    },
    {
      id: '2',
      title: 'Mastering UI/UX Design: Creating User-Centered Experiences',
      excerpt: 'Learn the fundamental principles of creating intuitive and engaging user interfaces. Dive deep into user research, wireframing, prototyping, and testing methodologies that lead to exceptional digital products.',
      author: 'Jane Smith',
      date: 'Jan 10, 2025',
      readTime: '7 min read',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
    },
    {
      id: '3',
      title: 'Building Scalable Applications with Modern JavaScript Frameworks',
      excerpt: 'A comprehensive guide to architecting large-scale applications using React, Vue, and Angular. Discover best practices for state management, performance optimization, and code organization.',
      author: 'Mike Johnson',
      date: 'Jan 5, 2025',
      readTime: '10 min read',
      category: 'JavaScript',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop'
    },
    {
      id: '4',
      title: 'The Art of Responsive Design: Mobile-First Approach',
      excerpt: 'Understand the importance of mobile-first design and how to create seamless experiences across all devices. Learn advanced CSS techniques, breakpoint strategies, and progressive enhancement.',
      author: 'Sarah Williams',
      date: 'Dec 28, 2024',
      readTime: '6 min read',
      category: 'Responsive Design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
    },
    {
      id: '5',
      title: 'API Design Best Practices: Building RESTful Services',
      excerpt: 'Master the art of designing clean, maintainable, and scalable APIs. From RESTful principles to GraphQL implementation, learn how to create APIs that developers love to use.',
      author: 'David Brown',
      date: 'Dec 20, 2024',
      readTime: '8 min read',
      category: 'Backend',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
    },
    {
      id: '6',
      title: 'Optimizing Web Performance: Speed Matters',
      excerpt: 'Discover proven techniques to boost your website\'s performance. Learn about code splitting, lazy loading, image optimization, and caching strategies that dramatically improve user experience.',
      author: 'Emily Davis',
      date: 'Dec 15, 2024',
      readTime: '9 min read',
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <VideoBackground />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Blog & Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, stories, and ideas about web development, design, and technology
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="glass rounded-2xl overflow-hidden backdrop-blur-md border border-primary-foreground/20 hover:border-primary/40 transition-all duration-300 hover-scale group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold mb-3 text-primary-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link to={`/blog/${post.id}`}>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group/btn hover:bg-primary/10"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 md:p-12 rounded-3xl backdrop-blur-md border border-primary-foreground/20 text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest articles and insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-primary-foreground/20 text-primary-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
