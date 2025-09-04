import { User, Task, Gig, Session } from '@/lib/types';

export const mockUsers: User[] = [
  {
    fid: 'user1',
    username: 'alex_dev',
    bio: 'Full-stack developer with 5 years experience',
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    location_preferences: 'San Francisco, CA',
    avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex'
  },
  {
    fid: 'user2',
    username: 'sarah_design',
    bio: 'UI/UX Designer passionate about user-centered design',
    skills: ['Figma', 'Sketch', 'Prototyping', 'User Research'],
    location_preferences: 'San Francisco, CA',
    avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah'
  },
  {
    fid: 'user3',
    username: 'mike_writer',
    bio: 'Content writer and marketing specialist',
    skills: ['Content Writing', 'SEO', 'Marketing', 'Social Media'],
    location_preferences: 'San Francisco, CA',
    avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike'
  }
];

export const mockTasks: Task[] = [
  {
    id: 'task1',
    poster_fid: 'user1',
    description: 'Need help fixing a WordPress plugin compatibility issue. Should take 2-3 hours.',
    skills_required: ['WordPress', 'PHP', 'JavaScript'],
    location: 'Remote / San Francisco',
    time_posted: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    deadline: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
    status: 'open',
    payment_offered: 150,
    poster: mockUsers[0]
  },
  {
    id: 'task2',
    poster_fid: 'user2',
    description: 'Looking for someone to help move furniture to new apartment. Will provide lunch!',
    skills_required: ['Physical Labor'],
    location: 'Mission District, SF',
    time_posted: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    status: 'open',
    payment_offered: 80,
    poster: mockUsers[1]
  },
  {
    id: 'task3',
    poster_fid: 'user3',
    description: 'Need help creating social media content for local restaurant. Creative input welcome.',
    skills_required: ['Social Media', 'Content Creation', 'Photography'],
    location: 'Castro, SF',
    time_posted: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    status: 'open',
    poster: mockUsers[2]
  }
];

export const mockGigs: Gig[] = [
  {
    id: 'gig1',
    poster_fid: 'user2',
    title: 'UI/UX Design for Mobile App',
    description: 'Looking for an experienced designer to create wireframes and high-fidelity mockups for a fitness tracking app. Project duration: 2-3 weeks.',
    skills_required: ['UI Design', 'UX Design', 'Figma', 'Mobile Design'],
    location: 'Remote / SF Bay Area',
    payment: 2500,
    status: 'open',
    applied_by: ['user1'],
    poster: mockUsers[1]
  },
  {
    id: 'gig2',
    poster_fid: 'user1',
    title: 'Full-Stack Developer for E-commerce',
    description: 'Need a developer to build a custom e-commerce platform with React and Node.js. Must have experience with payment integrations.',
    skills_required: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    location: 'San Francisco, CA',
    payment: 5000,
    status: 'open',
    applied_by: [],
    poster: mockUsers[0]
  }
];

export const mockSessions: Session[] = [
  {
    id: 'session1',
    organizer_fid: 'user1',
    title: 'React Best Practices Workshop',
    description: 'Join us for a hands-on workshop covering React hooks, performance optimization, and testing strategies.',
    topic: 'React',
    location: 'WeWork SOMA, SF',
    datetime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    attendees_fids: ['user2', 'user3'],
    organizer: mockUsers[0]
  },
  {
    id: 'session2',
    organizer_fid: 'user2',
    title: 'Design Thinking for Developers',
    description: 'Learn how to apply design thinking principles to create better user experiences in your applications.',
    topic: 'Design',
    location: 'SF Public Library',
    datetime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    attendees_fids: ['user1'],
    organizer: mockUsers[1]
  }
];
