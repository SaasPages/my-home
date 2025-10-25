import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import VideoBackground from '@/components/VideoBackground';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Innovators Inc.',
      position: 'Senior Frontend Developer',
      period: '2021 - Present',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern design systems.',
      achievements: [
        'Improved app performance by 40%',
        'Built design system used across 5 products',
        'Mentored 6 junior developers',
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      company: 'Digital Solutions Ltd.',
      position: 'Full Stack Developer',
      period: '2019 - 2021',
      description: 'Developed and maintained multiple client projects, focusing on both frontend and backend development.',
      achievements: [
        'Delivered 15+ projects on time',
        'Increased client satisfaction by 30%',
        'Implemented automated testing pipeline',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      company: 'Creative Web Studio',
      position: 'Junior Frontend Developer',
      period: '2018 - 2019',
      description: 'Worked on various web projects, creating responsive and accessible user interfaces.',
      achievements: [
        'Contributed to 10+ client projects',
        'Improved website accessibility scores',
        'Learned modern frontend frameworks',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <VideoBackground />
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Work Experience</h1>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground mb-12">
            My professional journey has been focused on creating exceptional digital experiences and continuously learning new technologies.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <Card key={idx} className="p-6 relative">
                {idx !== experiences.length - 1 && (
                  <div className="absolute left-6 top-full w-0.5 h-8 bg-border"></div>
                )}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIdx) => (
                      <li key={achIdx} className="flex items-start text-muted-foreground">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
