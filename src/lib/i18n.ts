import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.sections": "Sections",
      "nav.about": "About Us",
      "nav.contact": "Contact",
      "nav.signup": "Sign Up",
      "nav.login": "Login",
      
      // Role Selection
      "role.title": "Choose Your Path",
      "role.subtitle": "How would you like to use Learn & Teach today?",
      "role.student.title": "Continue as Student",
      "role.student.description": "Learn new skills, enroll in courses, and track your progress.",
      "role.student.button": "Proceed as Student",
      "role.instructor.title": "Continue as Instructor",
      "role.instructor.description": "Share your knowledge, create courses, and mentor others.",
      "role.instructor.button": "Proceed as Instructor",
      
      // Student Dashboard
      "student.dashboard": "Student Dashboard",
      "student.welcome": "Welcome, {{name}}! Ready to learn something new today?",
      "student.topInstructors": "Top Rated Instructors",
      "student.viewProfile": "View Profile",
      "student.achievements": "Your Achievements",
      "student.badge.message": "Congratulations! You have completed {{completed}} sessions. {{remaining}} sessions left to get the Silver Badge 🥈! Hurry to be among the first to receive this award.",
      "student.continue": "Continue Learning",
      "student.exploreSections": "Explore New Sections",
      "student.enrollNow": "Enroll Now",
      "student.viewCourses": "View Courses",
      "student.recentPosts": "Your Recent Posts",
      "student.viewPost": "View Post",
      "student.sidebar.home": "Home",
      "student.sidebar.sessions": "My Sessions & Files",
      "student.sidebar.messages": "Messages",
      "student.sidebar.appointments": "Appointments",
      "student.sidebar.settings": "Settings",
      "student.courses": "Courses",
      
      // Instructor Dashboard
      "instructor.dashboard": "Instructor Dashboard",
      "instructor.welcome": "Welcome, {{name}}! Ready to inspire and be inspired?",
      "instructor.posts": "Posts",
      "instructor.viewPost": "View Post",
      "instructor.explorePosts": "Explore All Posts",
      "instructor.sidebar.home": "Home",
      "instructor.sidebar.profile": "Profile",
      "instructor.sidebar.messages": "Messages",
      "instructor.sidebar.appointments": "Appointment Schedule",
      "instructor.sidebar.settings": "Settings",
      
      // Profile
      "profile.about": "About Me",
      "profile.skills": "Skills",
      "profile.links": "Links",
      "profile.projects": "Projects",
      "profile.experience": "Experience",
      "profile.viewProject": "View Project",
      "profile.viewAllProjects": "View All Projects",
      "profile.sendMessage": "Send Message",
      "profile.follow": "Follow",
      "profile.ratings": "ratings",
      
      // Common
      "common.premium": "PREMIUM",
      "common.search": "Search for courses...",
      "common.searchStudents": "Search for students...",
      "common.notifications": "Notifications",
      "common.rating": "Rating",
    }
  },
  ar: {
    translation: {
      // Navigation
      "nav.home": "الرئيسية",
      "nav.sections": "الأقسام",
      "nav.about": "من نحن",
      "nav.contact": "اتصل بنا",
      "nav.signup": "التسجيل",
      "nav.login": "تسجيل الدخول",
      
      // Role Selection
      "role.title": "اختر مسارك",
      "role.subtitle": "كيف تود استخدام Learn & Teach اليوم؟",
      "role.student.title": "الاستمرار كـ طالب",
      "role.student.description": "تعلم مهارات جديدة، سجل في الدورات، وتتبع تقدمك.",
      "role.student.button": "المتابعة كـ طالب",
      "role.instructor.title": "الاستمرار كـ مدرب",
      "role.instructor.description": "شارك معرفتك، أنشئ دورات، ووجّه الآخرين.",
      "role.instructor.button": "المتابعة كـ مدرب",
      
      // Student Dashboard
      "student.dashboard": "لوحة تحكم الطالب",
      "student.welcome": "مرحبًا، {{name}}! هل أنت مستعد لتعلم شيء جديد اليوم؟",
      "student.topInstructors": "المدربون الأعلى تقييمًا",
      "student.viewProfile": "عرض الملف الشخصي",
      "student.achievements": "إنجازاتك",
      "student.badge.message": "تهانينا! لقد انتهيت من {{completed}} جلسات. باقي {{remaining}} جلسات وتحصل على الجائزة الفضية 🥈! سارع لتكون من أوائل الحاصلين على هذه الجائزة.",
      "student.continue": "متابعة التعلم",
      "student.exploreSections": "استكشف أقسامًا جديدة",
      "student.enrollNow": "انضم الآن",
      "student.viewCourses": "شاهد الدورات",
      "student.recentPosts": "منشوراتك الأخيرة",
      "student.viewPost": "عرض المنشور",
      "student.sidebar.home": "الرئيسية",
      "student.sidebar.sessions": "جلساتي وملفاتي",
      "student.sidebar.messages": "الرسائل",
      "student.sidebar.appointments": "المواعيد",
      "student.sidebar.settings": "الإعدادات",
      "student.courses": "الدورات",
      
      // Instructor Dashboard
      "instructor.dashboard": "لوحة تحكم المدرب",
      "instructor.welcome": "مرحبًا، {{name}}! هل أنت مستعد للإلهام وأن تكون مصدر إلهام؟",
      "instructor.posts": "منشورات المدرب",
      "instructor.viewPost": "عرض المنشور",
      "instructor.explorePosts": "استكشاف جميع المنشورات",
      "instructor.sidebar.home": "الرئيسية",
      "instructor.sidebar.profile": "الملف الشخصي",
      "instructor.sidebar.messages": "الرسائل",
      "instructor.sidebar.appointments": "جدول المواعيد",
      "instructor.sidebar.settings": "الإعدادات",
      
      // Profile
      "profile.about": "عني",
      "profile.skills": "المهارات",
      "profile.links": "الروابط",
      "profile.projects": "المشاريع",
      "profile.experience": "الخبرة",
      "profile.viewProject": "عرض المشروع",
      "profile.viewAllProjects": "عرض جميع المشاريع",
      "profile.sendMessage": "إرسال رسالة",
      "profile.follow": "متابعة",
      "profile.ratings": "تقييم",
      
      // Common
      "common.premium": "بريميوم",
      "common.search": "ابحث عن الدورات...",
      "common.searchStudents": "ابحث عن الطلاب...",
      "common.notifications": "الإشعارات",
      "common.rating": "التقييم",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
