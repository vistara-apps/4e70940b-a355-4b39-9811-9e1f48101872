'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';
import { Avatar } from '@/components/ui/avatar';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Session } from '@/lib/types';

interface SessionCardProps {
  session: Session;
  onJoin?: (sessionId: string) => void;
  onViewProfile?: (fid: string) => void;
}

export function SessionCard({ session, onJoin, onViewProfile }: SessionCardProps) {
  return (
    <Card className="w-full hover:shadow-hover transition-all duration-base ease-smooth">
      <CardHeader className="pb-md">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-sm">
            <Avatar 
              src={session.organizer?.avatar_url} 
              alt={session.organizer?.username}
              size="sm"
            />
            <div>
              <CardDescription className="text-xs">
                Organized by {session.organizer?.username || `User ${session.organizer_fid.slice(0, 6)}`}
              </CardDescription>
            </div>
          </div>
        </div>
        <CardTitle className="text-lg">{session.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-sm">
        <p className="text-body text-foreground">{session.description}</p>
        
        <div className="flex items-center space-x-md text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span className="text-xs">{session.datetime.toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span className="text-xs">{session.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-3 w-3" />
            <span className="text-xs">{session.attendees_fids.length} attending</span>
          </div>
        </div>
        
        <Tag variant="skill">{session.topic}</Tag>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => onViewProfile?.(session.organizer_fid)}
        >
          View Organizer
        </Button>
        <Button 
          size="sm"
          onClick={() => onJoin?.(session.id)}
        >
          Join Session
        </Button>
      </CardFooter>
    </Card>
  );
}
