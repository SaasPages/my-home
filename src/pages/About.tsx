import { Card } from '@/components/ui/card';
import VideoBackground from '@/components/VideoBackground';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <VideoBackground />
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          
          <Card className="p-8 mb-8">
            <p className="text-lg mb-6 leading-relaxed">
              I'm a passionate designer and developer with over 5 years of experience creating digital experiences that make a difference. My journey in tech started with a curiosity about how websites work, and it has evolved into a career dedicated to crafting beautiful, functional, and user-centered designs.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              I believe that great design is not just about aesthetics—it's about solving problems and creating meaningful connections between people and technology. Every project I take on is an opportunity to learn, innovate, and push the boundaries of what's possible.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the community through workshops and mentoring.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">My Approach</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  User-centered design thinking
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Agile development methodology
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Continuous learning and improvement
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Collaboration and communication
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Personal Info</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <span className="font-semibold">Location:</span> San Francisco, CA
                </li>
                <li>
                  <span className="font-semibold">Experience:</span> 5+ Years
                </li>
                <li>
                  <span className="font-semibold">Availability:</span> Open to opportunities
                </li>
                <li>
                  <span className="font-semibold">Languages:</span> English, Spanish
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
