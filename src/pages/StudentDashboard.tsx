import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Award, BookOpen, TrendingUp } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { Progress } from '@/components/ui/progress';

const StudentDashboard = () => {
  const { t } = useTranslation();
  const { userName } = useUser();

  const topInstructors = [
    {
      id: 1,
      name: 'Dr. Omar Sherif',
      specialty: 'AI & Machine Learning',
      rating: 4.8,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Omar'
    },
    {
      id: 2,
      name: 'Fatima Mansour',
      specialty: 'AI & Machine Learning',
      rating: 4.8,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima'
    }
  ];

  const sections = [
    { id: 1, name: 'Artificial Intelligence', courses: 25, icon: '🤖' },
    { id: 2, name: 'Data Science', courses: 32, icon: '📊' },
    { id: 3, name: 'Web Development', courses: 45, icon: '💻' },
  ];

  const recentPosts = [
    {
      id: 1,
      content: 'Looking for a study partner for Advanced Python course...',
      date: '2 days ago',
      skill: 'Python',
      section: 'Programming'
    },
    {
      id: 2,
      content: 'Anyone interested in building a machine learning project together?',
      date: '5 days ago',
      skill: 'Machine Learning',
      section: 'AI & ML'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header showSearch />
      
      <div className="flex">
        <DashboardSidebar role="student" />

        <main className="flex-1 p-8">
          {/* Welcome Section */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">{t('student.dashboard')}</h1>
            <p className="text-muted-foreground">
              {t('student.welcome', { name: userName })}
            </p>
          </div>

          <div className="grid gap-8">
            {/* Top Rated Instructors */}
            <section className="animate-scale-in">
              <h2 className="text-2xl font-bold mb-4">{t('student.topInstructors')}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {topInstructors.map((instructor) => (
                  <Card key={instructor.id} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={instructor.image}
                          alt={instructor.name}
                          className="w-16 h-16 rounded-full ring-2 ring-primary/20"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{instructor.name}</h3>
                          <p className="text-sm text-muted-foreground">{instructor.specialty}</p>
                          <div className="flex items-center gap-1 mt-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{instructor.rating}/5</span>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        {t('student.viewProfile')}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Badge Progress */}
            <section className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-diamond/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary" />
                    {t('student.achievements')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-badge-silver to-white flex items-center justify-center shadow-lg">
                        <Award className="h-12 w-12 text-primary" />
                      </div>
                      <Progress value={62.5} className="mt-4 w-24" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-2">
                        {t('student.badge.message', { completed: 5, remaining: 3 })}
                      </p>
                      <div className="flex items-center gap-2 mt-4">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">10 Total Sessions</span>
                      </div>
                      <Button className="mt-4 bg-gradient-to-r from-primary to-diamond hover:opacity-90">
                        {t('student.continue')}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Explore Sections */}
            <section className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold mb-4">{t('student.exploreSections')}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {sections.map((section) => (
                  <Card key={section.id} className="hover-lift">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{section.icon}</div>
                      <h3 className="font-semibold mb-2">{section.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {section.courses} {t('student.courses')}
                      </p>
                      <Button variant="outline" className="w-full">
                        {t('student.viewCourses')}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Posts */}
            <section className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-bold mb-4">{t('student.recentPosts')}</h2>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="mb-3">{post.content}</p>
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary">{post.skill}</Badge>
                            <Badge variant="outline">{post.section}</Badge>
                            <span className="text-sm text-muted-foreground">{post.date}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          {t('student.viewPost')}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
