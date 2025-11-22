import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ExternalLink, Award } from 'lucide-react';

const InstructorProfile = () => {
  const { t } = useTranslation();

  const instructor = {
    name: 'Dr. Omar Sherif',
    role: 'AI & Machine Learning Instructor',
    rating: 4.8,
    totalRatings: 250,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Omar',
    badges: ['🏆', '🥇', '⭐']
  };

  const skills = [
    { name: 'Python', level: 'Advanced', projects: 45, hours: 120 },
    { name: 'Machine Learning', level: 'Expert', projects: 32, hours: 150 },
    { name: 'Deep Learning', level: 'Advanced', projects: 28, hours: 100 }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI Powered Tutoring System',
      description: 'An intelligent tutoring system using NLP and ML',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Certified Python Developer App',
      description: 'Comprehensive Python certification platform',
      status: 'In Progress'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <DashboardSidebar role="student" />

        <main className="flex-1 p-8">
          {/* Profile Header */}
          <Card className="mb-8 animate-fade-in">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="relative">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-32 h-32 rounded-full ring-4 ring-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 flex gap-1">
                    {instructor.badges.map((badge, i) => (
                      <div key={i} className="w-8 h-8 bg-white dark:bg-card rounded-full flex items-center justify-center shadow-lg">
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{instructor.name}</h1>
                  <p className="text-lg text-muted-foreground mb-4">{instructor.role}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{instructor.rating}/5</span>
                      <span className="text-sm text-muted-foreground">
                        ({instructor.totalRatings} {t('profile.ratings')})
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="bg-gradient-to-r from-primary to-diamond hover:opacity-90">
                      {t('profile.sendMessage')}
                    </Button>
                    <Button variant="outline">
                      {t('profile.follow')}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* About Me */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>{t('profile.about')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate AI educator with over 5 years of experience in teaching machine learning 
                  and artificial intelligence. Dedicated to making complex concepts accessible and 
                  engaging for students at all levels.
                </p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle>{t('profile.skills')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold">{skill.name}</span>
                        <Badge variant="secondary" className="ml-2">{skill.level}</Badge>
                      </div>
                    </div>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{skill.projects} Projects</span>
                      <span>{skill.hours} Hours</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Links */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle>{t('profile.links')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  linkedin.com/in/omarsherif
                </a>
                <Button variant="outline" className="w-full">
                  {t('profile.viewAllProjects')}
                </Button>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle>{t('profile.experience')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  5+ Years of Teaching Experience, focused on transforming complex AI concepts into 
                  practical, engaging modules for over 500 students.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Projects */}
          <Card className="mt-8 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle>{t('profile.projects')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="flex items-start justify-between p-4 border rounded-lg hover-lift">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                    <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    {t('profile.viewProject')}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default InstructorProfile;
