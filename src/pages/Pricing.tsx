import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$999',
      period: 'per project',
      description: 'Perfect for small projects and startups',
      features: [
        'Responsive design',
        'Up to 5 pages',
        'Basic SEO optimization',
        '2 rounds of revisions',
        '30 days support',
        'Source code included',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: 'per project',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Basic',
        'Up to 15 pages',
        'Advanced SEO optimization',
        'Custom animations',
        '5 rounds of revisions',
        '90 days support',
        'CMS integration',
        'Performance optimization',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$5,999',
      period: 'per project',
      description: 'For complex applications',
      features: [
        'Everything in Professional',
        'Unlimited pages',
        'Custom backend development',
        'Third-party integrations',
        'Unlimited revisions',
        '180 days support',
        'Dedicated project manager',
        'Priority support',
        'Training sessions',
      ],
      popular: false,
    },
  ];

  const additionalServices = [
    { name: 'Additional page', price: '$150' },
    { name: 'Custom feature', price: '$500+' },
    { name: 'Monthly maintenance', price: '$299/month' },
    { name: 'SEO optimization', price: '$799' },
    { name: 'Performance audit', price: '$499' },
    { name: 'Training session (2hrs)', price: '$299' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <VideoBackground />
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Pricing Plans</h1>
          <div className="h-1 w-20 bg-primary mb-8 mx-auto"></div>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include source code and documentation.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, idx) => (
              <Card
                key={idx}
                className={`p-8 relative ${
                  plan.popular ? 'border-primary shadow-lg scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Additional Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((service, idx) => (
                <Card key={idx} className="p-4 flex items-center justify-between">
                  <span className="font-medium">{service.name}</span>
                  <span className="text-primary font-bold">{service.price}</span>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-muted/50">
            <h2 className="text-2xl font-bold mb-4">Custom Solutions</h2>
            <p className="text-muted-foreground mb-6">
              Need something specific? I offer custom packages tailored to your unique requirements. 
              Whether it's a complex web application, mobile app, or design system, let's discuss your project.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Schedule Consultation</Button>
              <Button size="lg" variant="outline">View Portfolio</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
