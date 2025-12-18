
import { Language, Participant, Inquiry } from './types';

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' }
];

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    nav: { home: 'Home', participants: 'Talent', contact: 'Inquiry', admin: 'Admin', aiTools: 'AI Platforms' },
    hero: {
      title: 'Bridging Talent & Global Industry',
      subtitle: 'KCB (Korea Career Bridge) leverages proprietary AI technology to connect elite institutions with world-class participants.',
      cta: 'Explore Talent'
    },
    features: {
      title: 'Our AI Ecosystem',
      subtitle: 'Advanced tools tailored for Korean corporate and global standards.'
    },
    contact: {
      title: 'Let\'s Connect',
      desc: 'Ready for a strategic partnership? Fill out the form and we\'ll reach out.',
      name: 'Full Name',
      company: 'Institution',
      email: 'Work Email',
      message: 'Message',
      submit: 'Send Inquiry'
    },
    admin: {
      title: 'KCB Control Center',
      inquiries: 'Inquiries',
      manageParticipants: 'Manage Talent',
      status: 'Status'
    }
  },
  ko: {
    nav: { home: '홈', participants: '인재 정보', contact: '문의하기', admin: '관리자', aiTools: 'AI 플랫폼' },
    hero: {
      title: '인재와 글로벌 산업의 가교',
      subtitle: 'KCB(Korea Career Bridge)는 독자적인 AI 기술을 통해 주요 기관과 세계적인 수준의 참가자를 연결합니다.',
      cta: '인재 목록 보기'
    },
    features: {
      title: 'KCB AI 에코시스템',
      subtitle: '한국 대기업 및 글로벌 표준에 최적화된 첨단 도구.'
    },
    contact: {
      title: '문의하기',
      desc: '전략적 파트너십에 관심이 있으신가요? 양식을 작성해주시면 연락드리겠습니다.',
      name: '성함',
      company: '회사/기관명',
      email: '이메일',
      message: '문의 내용',
      submit: '문의 제출'
    },
    admin: {
      title: 'KCB 관리 센터',
      inquiries: '문의 내역',
      manageParticipants: '인재 관리',
      status: '상태'
    }
  },
  ja: {
    nav: { home: 'ホーム', participants: '人材情報', contact: 'お問い合わせ', admin: '管理者', aiTools: 'AIプラットフォーム' },
    hero: {
      title: '才能とグローバル産業の架け橋',
      subtitle: 'KCB (Korea Career Bridge) は、独自のAI技術を活用して、主要な機関と世界クラスの参加者を結びつけます。',
      cta: '人材を探索する'
    },
    features: {
      title: 'KCB AIエコシステム',
      subtitle: '韓国企業およびグローバル標準に合わせた高度なツール。'
    },
    contact: {
      title: 'お問い合わせ',
      desc: '戦略的パートナーシップにご興味がありますか？ 以下のフォームにご記入ください。',
      name: 'お名前',
      company: '会社・機関名',
      email: 'メールアドレス',
      message: 'メッセージ',
      submit: '問い合わせを送信'
    },
    admin: {
      title: 'KCB管理センター',
      inquiries: '問い合わせ管理',
      manageParticipants: '人材管理',
      status: 'ステータス'
    }
  }
};

export const MOCK_PARTICIPANTS: Participant[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    background: 'Master of Computer Science from Stanford University',
    skills: ['Full-stack Development', 'AI/ML', 'Cloud Architecture'],
    experience: '5 years at leading tech firms, specialized in scalable systems.',
    resumeUrl: '#',
    profileImage: 'https://picsum.photos/seed/sarah/200/200'
  },
  {
    id: '2',
    name: 'Min-ho Kim',
    background: 'Ph.D. in Data Science, Seoul National University',
    skills: ['Data Analysis', 'Python', 'Statistical Modeling'],
    experience: 'Research lead for multiple government-funded tech initiatives.',
    resumeUrl: '#',
    profileImage: 'https://picsum.photos/seed/minho/200/200'
  },
  {
    id: '3',
    name: 'Yuki Tanaka',
    background: 'MBA, University of Tokyo',
    skills: ['Business Strategy', 'Market Analysis', 'Project Management'],
    experience: '8 years in international business development across APAC.',
    resumeUrl: '#',
    profileImage: 'https://picsum.photos/seed/yuki/200/200'
  }
];

export const MOCK_INQUIRIES: Inquiry[] = [
  {
    id: '101',
    name: 'Robert Smith',
    company: 'Global Tech Corp',
    email: 'robert@globaltech.com',
    message: 'We are interested in hiring 5 participants for our summer internship.',
    date: '2024-05-15',
    status: 'new'
  },
  {
    id: '102',
    name: 'Ji-won Park',
    company: 'Innovate Korea',
    email: 'jwpark@innovate.kr',
    message: 'Looking for a partnership agreement for our next tech summit.',
    date: '2024-05-14',
    status: 'read'
  }
];
