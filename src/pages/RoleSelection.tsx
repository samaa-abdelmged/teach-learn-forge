import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Presentation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useUser } from '@/contexts/UserContext';
import { Header } from '@/components/Header';

const RoleSelection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setRole } = useUser();

  const handleRoleSelection = (selectedRole: 'student' | 'instructor') => {
    setRole(selectedRole);
    navigate(selectedRole === 'student' ? '/student' : '/instructor');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-diamond bg-clip-text text-transparent">
            {t('role.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('role.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Student Card */}
          <Card className="p-8 hover-lift cursor-pointer group border-2 hover:border-primary transition-all animate-scale-in">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all" />
                <div className="relative bg-gradient-to-br from-primary to-diamond p-6 rounded-full">
                  <GraduationCap className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl font-bold">{t('role.student.title')}</h2>
                <p className="text-muted-foreground">
                  {t('role.student.description')}
                </p>
              </div>

              <Button
                onClick={() => handleRoleSelection('student')}
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-diamond hover:opacity-90 text-white shadow-glow"
              >
                {t('role.student.button')}
              </Button>
            </div>
          </Card>

          {/* Instructor Card */}
          <Card className="p-8 hover-lift cursor-pointer group border-2 hover:border-primary transition-all animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all" />
                <div className="relative bg-gradient-to-br from-primary to-diamond p-6 rounded-full">
                  <Presentation className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl font-bold">{t('role.instructor.title')}</h2>
                <p className="text-muted-foreground">
                  {t('role.instructor.description')}
                </p>
              </div>

              <Button
                onClick={() => handleRoleSelection('instructor')}
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-diamond hover:opacity-90 text-white shadow-glow"
              >
                {t('role.instructor.button')}
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default RoleSelection;
