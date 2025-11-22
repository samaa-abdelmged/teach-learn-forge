import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useUser } from '@/contexts/UserContext';
import { FileText, TrendingUp } from 'lucide-react';

const InstructorDashboard = () => {
  const { t } = useTranslation();
  const { userName } = useUser();

  const posts = [
    {
      id: 1,
      content: 'New course on Advanced Machine Learning techniques starting next week! Join us to explore cutting-edge AI algorithms.',
      date: '1 day ago',
      skill: 'AI Fundamentals',
      section: 'Technology Section',
      likes: 45,
      comments: 12
    },
    {
      id: 2,
      content: 'Check out my latest project on building AI-powered chatbots. Students can now learn practical implementation.',
      date: '3 days ago',
      skill: 'Advanced Python',
      section: 'Programming Section',
      likes: 67,
      comments: 23
    },
    {
      id: 3,
      content: 'Exciting workshop on Design Thinking principles this weekend. Limited spots available!',
      date: '5 days ago',
      skill: 'Design Principles',
      section: 'Art & Design Section',
      likes: 34,
      comments: 8
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <DashboardSidebar role="instructor" />

        <main className="flex-1 p-8">
          {/* Welcome Section */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">{t('instructor.dashboard')}</h1>
            <p className="text-muted-foreground">
              {t('instructor.welcome', { name: userName })}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 animate-scale-in">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Students</p>
                    <p className="text-3xl font-bold mt-2">1,234</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Courses</p>
                    <p className="text-3xl font-bold mt-2">8</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. Rating</p>
                    <p className="text-3xl font-bold mt-2">4.8/5</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <span className="text-2xl">⭐</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Posts Section */}
          <section className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{t('instructor.posts')}</h2>
              <Button className="bg-gradient-to-r from-primary to-diamond hover:opacity-90">
                Create New Post
              </Button>
            </div>

            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id} className="hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{post.content}</CardTitle>
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                            {post.skill}
                          </Badge>
                          <Badge variant="outline">{post.section}</Badge>
                          <span className="text-sm text-muted-foreground">{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span>❤️ {post.likes} likes</span>
                        <span>💬 {post.comments} comments</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        {t('instructor.viewPost')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline" size="lg">
                {t('instructor.explorePosts')}
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default InstructorDashboard;
