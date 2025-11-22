import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, FileText, MessageSquare, Calendar, Settings, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  role: 'student' | 'instructor';
}

export const DashboardSidebar = ({ role }: SidebarProps) => {
  const { t } = useTranslation();
  const location = useLocation();

  const studentLinks = [
    { icon: Home, label: t('student.sidebar.home'), path: '/student' },
    { icon: FileText, label: t('student.sidebar.sessions'), path: '/student/sessions' },
    { icon: MessageSquare, label: t('student.sidebar.messages'), path: '/student/messages' },
    { icon: Calendar, label: t('student.sidebar.appointments'), path: '/student/appointments' },
    { icon: Settings, label: t('student.sidebar.settings'), path: '/student/settings' },
  ];

  const instructorLinks = [
    { icon: Home, label: t('instructor.sidebar.home'), path: '/instructor' },
    { icon: User, label: t('instructor.sidebar.profile'), path: '/instructor/profile' },
    { icon: MessageSquare, label: t('instructor.sidebar.messages'), path: '/instructor/messages' },
    { icon: Calendar, label: t('instructor.sidebar.appointments'), path: '/instructor/appointments' },
    { icon: Settings, label: t('instructor.sidebar.settings'), path: '/instructor/settings' },
  ];

  const links = role === 'student' ? studentLinks : instructorLinks;

  return (
    <aside className="w-64 bg-sidebar border-r min-h-[calc(100vh-4rem)] sticky top-16">
      <nav className="flex flex-col gap-1 p-4">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;

          return (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all hover-lift",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
