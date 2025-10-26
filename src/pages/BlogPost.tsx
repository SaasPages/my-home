import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft, Share2, BookmarkPlus } from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';

const BlogPost = () => {
  const { id } = useParams();

  // In a real app, you'd fetch the post data based on the id
  const blogPosts: any = {
    '1': {
      title: 'The Future of Web Development: Trends to Watch in 2025',
      author: 'John Doe',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop',
      content: `
        <p>The web development landscape is constantly evolving, and 2025 promises to bring exciting innovations that will reshape how we build digital experiences. As technology advances at an unprecedented pace, developers must stay ahead of the curve to remain competitive and deliver cutting-edge solutions.</p>

        <h2>AI-Powered Development Tools</h2>
        <p>Artificial Intelligence is revolutionizing the development workflow. Modern AI assistants can now generate code, suggest optimizations, and even predict potential bugs before they occur. These tools are not replacing developers but augmenting their capabilities, allowing them to focus on creative problem-solving rather than repetitive tasks.</p>

        <h2>Serverless Architecture</h2>
        <p>Serverless computing continues to gain momentum, offering developers the ability to build and deploy applications without managing infrastructure. This paradigm shift enables faster development cycles, automatic scaling, and cost-effective solutions for businesses of all sizes.</p>

        <h2>WebAssembly Goes Mainstream</h2>
        <p>WebAssembly (Wasm) is transforming web performance by enabling near-native speed for web applications. Languages like Rust, C++, and Go can now run in the browser, opening up new possibilities for performance-critical applications such as video editing, 3D rendering, and scientific computing.</p>

        <h2>Progressive Web Apps (PWAs) Evolution</h2>
        <p>PWAs continue to bridge the gap between web and native applications. With improved offline capabilities, push notifications, and device integration, PWAs are becoming the go-to solution for businesses wanting to provide app-like experiences without the overhead of maintaining separate native applications.</p>

        <h2>Enhanced Security Practices</h2>
        <p>As cyber threats become more sophisticated, security must be integrated into every stage of development. Zero-trust architectures, advanced authentication methods, and automated security testing are becoming standard practices in modern web development.</p>

        <h2>Conclusion</h2>
        <p>The future of web development is bright and full of opportunities. By embracing these trends and continuously learning, developers can create innovative, secure, and performant applications that meet the evolving needs of users worldwide. The key is to remain adaptable, curious, and committed to excellence in this ever-changing field.</p>
      `
    },
    '2': {
      title: 'Mastering UI/UX Design: Creating User-Centered Experiences',
      author: 'Jane Smith',
      date: 'January 10, 2025',
      readTime: '7 min read',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
      content: `
        <p>User experience design is more than just making things look pretty—it's about creating intuitive, accessible, and delightful experiences that solve real user problems. In this comprehensive guide, we'll explore the fundamental principles and advanced techniques that separate good design from great design.</p>

        <h2>Understanding Your Users</h2>
        <p>The foundation of exceptional UX design is a deep understanding of your users. This involves conducting user research through interviews, surveys, and observational studies. Creating detailed user personas helps teams empathize with their audience and make informed design decisions.</p>

        <h2>Information Architecture</h2>
        <p>Before diving into visual design, it's crucial to organize information in a way that makes sense to users. Card sorting, site mapping, and user flow diagrams help create logical navigation structures that guide users effortlessly through your application.</p>

        <h2>Wireframing and Prototyping</h2>
        <p>Low-fidelity wireframes allow you to iterate quickly on ideas without getting bogged down in visual details. As concepts solidify, high-fidelity prototypes enable user testing and stakeholder feedback before investing in development.</p>

        <h2>Visual Design Principles</h2>
        <p>Great visual design follows established principles: hierarchy, balance, contrast, and consistency. Typography, color theory, and spacing all play crucial roles in creating interfaces that are both beautiful and functional.</p>

        <h2>Accessibility Matters</h2>
        <p>Inclusive design ensures your product is usable by everyone, regardless of abilities. Following WCAG guidelines, implementing keyboard navigation, and providing alternative text for images are essential practices for modern designers.</p>

        <h2>Continuous Improvement</h2>
        <p>UX design is an iterative process. Regular user testing, analytics review, and feedback collection help identify areas for improvement and ensure your product continues to meet user needs as they evolve.</p>
      `
    },
    '3': {
      title: 'Building Scalable Applications with Modern JavaScript Frameworks',
      author: 'Mike Johnson',
      date: 'January 5, 2025',
      readTime: '10 min read',
      category: 'JavaScript',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop',
      content: `
        <p>Modern JavaScript frameworks have revolutionized how we build web applications. React, Vue, and Angular provide powerful tools for creating complex, scalable applications, but choosing the right architecture and patterns is crucial for long-term success.</p>

        <h2>Component Architecture</h2>
        <p>Breaking your application into reusable components is fundamental to maintainability. Smart and dumb components, composition patterns, and proper prop drilling avoidance create codebases that are easy to understand and extend.</p>

        <h2>State Management</h2>
        <p>As applications grow, state management becomes increasingly complex. Whether using Redux, Vuex, or Context API, choosing the right state management solution and following best practices prevents bugs and improves developer experience.</p>

        <h2>Performance Optimization</h2>
        <p>Lazy loading, code splitting, memoization, and virtual scrolling are essential techniques for maintaining performance as applications scale. Understanding when and how to apply these optimizations prevents premature optimization while addressing real bottlenecks.</p>

        <h2>Testing Strategies</h2>
        <p>Comprehensive testing ensures your application behaves correctly. Unit tests, integration tests, and end-to-end tests each serve different purposes in maintaining code quality and preventing regressions.</p>

        <h2>Build and Deployment</h2>
        <p>Modern build tools like Vite and webpack optimize your code for production. Implementing CI/CD pipelines automates testing and deployment, ensuring consistent and reliable releases.</p>
      `
    },
    '4': {
      title: 'The Art of Responsive Design: Mobile-First Approach',
      author: 'Sarah Williams',
      date: 'December 28, 2024',
      readTime: '6 min read',
      category: 'Responsive Design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
      content: `
        <p>With mobile devices accounting for over 60% of web traffic, responsive design is no longer optional—it's essential. The mobile-first approach ensures your designs work beautifully on all devices while prioritizing the constraints and opportunities of mobile screens.</p>

        <h2>Why Mobile-First?</h2>
        <p>Starting with mobile forces you to focus on what's truly important. With limited screen space, you must prioritize content and features, resulting in cleaner, more focused designs that scale up gracefully to larger screens.</p>

        <h2>Flexible Grid Systems</h2>
        <p>CSS Grid and Flexbox provide powerful tools for creating responsive layouts. Understanding when to use each and how to combine them creates layouts that adapt seamlessly to any screen size.</p>

        <h2>Responsive Typography</h2>
        <p>Text that's readable on all devices requires careful attention. Using relative units, fluid typography, and appropriate line lengths ensures comfortable reading experiences across devices.</p>

        <h2>Touch-Friendly Interactions</h2>
        <p>Mobile interactions differ from desktop. Ensuring touch targets are large enough, implementing appropriate gestures, and avoiding hover-dependent functionality creates interfaces that feel natural on touchscreens.</p>

        <h2>Performance on Mobile</h2>
        <p>Mobile devices often have slower connections and less processing power. Optimizing images, minimizing JavaScript, and lazy loading content ensures fast experiences even on slower devices and networks.</p>
      `
    },
    '5': {
      title: 'API Design Best Practices: Building RESTful Services',
      author: 'David Brown',
      date: 'December 20, 2024',
      readTime: '8 min read',
      category: 'Backend',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop',
      content: `
        <p>Well-designed APIs are the backbone of modern applications. Whether building REST or GraphQL APIs, following best practices ensures your API is intuitive, maintainable, and scalable.</p>

        <h2>RESTful Principles</h2>
        <p>REST APIs should be stateless, cacheable, and follow HTTP conventions. Using appropriate HTTP methods (GET, POST, PUT, DELETE), status codes, and resource naming conventions creates predictable, easy-to-understand APIs.</p>

        <h2>Versioning Strategy</h2>
        <p>APIs evolve over time, and proper versioning prevents breaking changes from affecting existing clients. URL versioning, header versioning, or content negotiation each have their trade-offs.</p>

        <h2>Authentication and Authorization</h2>
        <p>Securing your API is crucial. JWT tokens, OAuth 2.0, and API keys provide different security models. Understanding their strengths and weaknesses helps you choose the right approach for your use case.</p>

        <h2>Error Handling</h2>
        <p>Clear, consistent error messages help developers integrate with your API. Providing meaningful error codes, messages, and documentation makes debugging easier for API consumers.</p>

        <h2>Rate Limiting and Throttling</h2>
        <p>Protecting your API from abuse requires rate limiting. Implementing appropriate limits and providing clear feedback when limits are exceeded maintains service quality for all users.</p>

        <h2>Documentation</h2>
        <p>Comprehensive documentation is essential for API adoption. Tools like Swagger/OpenAPI provide interactive documentation that allows developers to explore and test your API easily.</p>
      `
    },
    '6': {
      title: 'Optimizing Web Performance: Speed Matters',
      author: 'Emily Davis',
      date: 'December 15, 2024',
      readTime: '9 min read',
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      content: `
        <p>Website performance directly impacts user experience, conversion rates, and SEO rankings. A one-second delay in page load time can result in a 7% reduction in conversions. Let's explore proven techniques to make your website blazingly fast.</p>

        <h2>Image Optimization</h2>
        <p>Images often account for the majority of page weight. Using modern formats like WebP, implementing responsive images with srcset, and lazy loading off-screen images dramatically reduces load times.</p>

        <h2>Code Splitting</h2>
        <p>Loading only the JavaScript needed for the current page prevents unnecessary downloads. Dynamic imports and route-based splitting ensure users only download what they need, when they need it.</p>

        <h2>Caching Strategies</h2>
        <p>Effective caching reduces server load and improves load times for returning visitors. HTTP caching headers, service workers, and CDN caching each play important roles in a comprehensive caching strategy.</p>

        <h2>Critical Rendering Path</h2>
        <p>Understanding how browsers render pages helps identify bottlenecks. Inlining critical CSS, deferring non-critical resources, and eliminating render-blocking resources improve perceived performance.</p>

        <h2>Performance Monitoring</h2>
        <p>Tools like Lighthouse, WebPageTest, and real user monitoring help identify performance issues and track improvements over time. Regular performance audits ensure your site stays fast as it evolves.</p>

        <h2>Server-Side Optimization</h2>
        <p>Backend performance matters too. Database query optimization, server-side caching, and choosing appropriate hosting solutions ensure fast server response times.</p>
      `
    }
  };

  const post = blogPosts[id || '1'];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <VideoBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="mb-6">
            <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <BookmarkPlus className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden glass border border-primary-foreground/20">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="glass p-8 md:p-12 rounded-2xl backdrop-blur-md border border-primary-foreground/20">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-primary-foreground prose-p:text-muted-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8 prose-p:mb-4 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Related Posts */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-primary-foreground">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(blogPosts)
                .filter(([postId]) => postId !== id)
                .slice(0, 2)
                .map(([postId, relatedPost]: any) => (
                  <Link 
                    key={postId}
                    to={`/blog/${postId}`}
                    className="glass p-6 rounded-xl backdrop-blur-md border border-primary-foreground/20 hover:border-primary/40 transition-all duration-300 hover-scale"
                  >
                    <span className="text-xs font-semibold text-primary mb-2 block">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-primary-foreground mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {relatedPost.readTime}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
