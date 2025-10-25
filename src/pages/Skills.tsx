import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import VideoBackground from '@/components/VideoBackground';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML/CSS', level: 98 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'Design Tools',
      skills: [
        { name: 'Figma', level: 92 },
        { name: 'Adobe XD', level: 88 },
        { name: 'Photoshop', level: 85 },
        { name: 'Illustrator', level: 82 },
      ],
    },
    {
      title: 'Other Skills',
      skills: [
        { name: 'Git/GitHub', level: 93 },
        { name: 'Agile/Scrum', level: 88 },
        { name: 'UI/UX Design', level: 90 },
        { name: 'Responsive Design', level: 95 },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <VideoBackground />
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            I have expertise across the full stack of web development, with a particular focus on creating beautiful, performant user interfaces.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-8 bg-primary/5">
            <h3 className="text-xl font-bold mb-4">Additional Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Responsive Design',
                'Performance Optimization',
                'SEO',
                'Accessibility (A11y)',
                'Testing (Jest, Cypress)',
                'CI/CD',
                'Docker',
                'AWS',
                'Project Management',
                'Team Leadership',
                'Client Communication',
                'Problem Solving',
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-background rounded-full text-sm font-medium border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
