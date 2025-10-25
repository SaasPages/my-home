import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Web Development',
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms with real-time updates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
      category: 'Dashboard',
      link: '#',
      github: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with team features, deadlines, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2bb?w=800&h=500&fit=crop',
      technologies: ['Next.js', 'Tailwind', 'Supabase'],
      category: 'Productivity',
      link: '#',
      github: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with animations and dark mode support.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      category: 'Web Design',
      link: '#',
      github: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with detailed forecasts, maps, and location-based alerts.',
      image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&h=500&fit=crop',
      technologies: ['React', 'OpenWeather API', 'Mapbox'],
      category: 'Mobile',
      link: '#',
      github: '#',
    },
    {
      title: 'Blog Platform',
      description: 'Content management system with markdown support, SEO optimization, and analytics.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      category: 'CMS',
      link: '#',
      github: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <VideoBackground />
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            A collection of my recent work spanning web development, design, and full-stack applications.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 right-4">{project.category}</Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
