import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Stanford University',
      period: '2016 - 2018',
      description: 'Specialized in Human-Computer Interaction and Web Technologies',
      gpa: '3.9/4.0',
      achievements: [
        "Dean's List all semesters",
        'Research published in ACM Conference',
        'Graduate Teaching Assistant',
      ],
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of California, Berkeley',
      period: '2012 - 2016',
      description: 'Focus on Software Engineering and User Experience Design',
      gpa: '3.8/4.0',
      achievements: [
        'Summa Cum Laude',
        'Outstanding Student Award',
        'President of Tech Club',
      ],
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2022',
    },
    {
      name: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      year: '2021',
    },
    {
      name: 'Google UX Design Certificate',
      issuer: 'Google',
      year: '2020',
    },
    {
      name: 'Advanced React and Redux',
      issuer: 'Udemy',
      year: '2019',
    },
  ];

  const courses = [
    'Advanced Web Development',
    'Machine Learning',
    'Data Structures & Algorithms',
    'User Interface Design',
    'Database Systems',
    'Mobile App Development',
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <VideoBackground />
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Education</h1>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground mb-12">
            My educational background has provided a strong foundation in computer science and design principles.
          </p>

          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Academic Degrees</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <Card key={idx} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-lg text-primary font-semibold">{edu.institution}</p>
                    </div>
                    <Badge variant="secondary" className="mt-2 md:mt-0">
                      {edu.period}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-3">{edu.description}</p>
                  <p className="font-semibold mb-3">GPA: {edu.gpa}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="flex items-start text-muted-foreground">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <Card key={idx} className="p-4">
                  <h3 className="font-bold mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <Badge variant="outline">{cert.year}</Badge>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Relevant Coursework</h2>
            </div>
            <Card className="p-6">
              <div className="flex flex-wrap gap-3">
                {courses.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
