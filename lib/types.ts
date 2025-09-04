export interface User {
  fid: string;
  username: string;
  bio?: string;
  skills: string[];
  location_preferences: string;
  wallet_address?: string;
  avatar_url?: string;
}

export interface Task {
  id: string;
  poster_fid: string;
  description: string;
  skills_required: string[];
  location: string;
  time_posted: Date;
  deadline?: Date;
  status: 'open' | 'accepted' | 'completed' | 'cancelled';
  payment_offered?: number;
  accepted_by?: string;
  poster?: User;
}

export interface Gig {
  id: string;
  poster_fid: string;
  title: string;
  description: string;
  skills_required: string[];
  location: string;
  deadline?: Date;
  payment: number;
  status: 'open' | 'filled' | 'completed' | 'cancelled';
  applied_by: string[];
  poster?: User;
}

export interface Session {
  id: string;
  organizer_fid: string;
  title: string;
  description: string;
  topic: string;
  location: string;
  datetime: Date;
  attendees_fids: string[];
  organizer?: User;
}

export interface Connection {
  id: string;
  from_fid: string;
  to_fid: string;
  status: 'pending' | 'accepted' | 'rejected';
}
