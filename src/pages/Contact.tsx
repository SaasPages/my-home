import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <VideoBackground />
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project inquiry" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-4">Why Work With Me?</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Fast turnaround times
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Clear communication throughout
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    High-quality, maintainable code
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Post-launch support included
                  </li>
                </ul>
              </Card>
            </div>

            <div>
              <Card className="p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary">
                        hello@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </Card>

              <Card className="p-6 gradient-bg text-center">
                <h3 className="font-bold mb-2 text-primary-foreground">Available for Freelance</h3>
                <p className="text-sm text-primary-foreground/90">
                  Currently accepting new projects for 2024
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
