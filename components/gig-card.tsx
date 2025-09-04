'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';
import { Avatar } from '@/components/ui/avatar';
import { Clock, MapPin, DollarSign, Users } from 'lucide-react';
import { Gig } from '@/lib/types';
import { formatTimeAgo } from '@/lib/utils';

interface GigCardProps {
  gig: Gig;
  onApply?: (gigId: string) => void;
  onViewProfile?: (fid: string) => void;
}

export function GigCard({ gig, onApply, onViewProfile }: GigCardProps) {
  return (
    <Card className="w-full hover:shadow-hover transition-all duration-base ease-smooth">
      <CardHeader className="pb-md">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-sm">
            <Avatar 
              src={gig.poster?.avatar_url} 
              alt={gig.poster?.username}
              size="sm"
            />
            <div>
              <CardDescription className="text-xs">
                {gig.poster?.username || `User ${gig.poster_fid.slice(0, 6)}`}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center text-accent font-bold">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>${gig.payment}</span>
          </div>
        </div>
        <CardTitle className="text-lg">{gig.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-sm">
        <p className="text-body text-foreground">{gig.description}</p>
        
        <div className="flex items-center space-x-md text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span className="text-xs">{gig.location}</span>
          </div>
          {gig.deadline && (
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span className="text-xs">Due {formatTimeAgo(gig.deadline)}</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <Users className="h-3 w-3" />
            <span className="text-xs">{gig.applied_by.length} applied</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {gig.skills_required.map((skill, index) => (
            <Tag key={index} variant="skill">
              {skill}
            </Tag>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => onViewProfile?.(gig.poster_fid)}
        >
          View Profile
        </Button>
        <Button 
          size="sm"
          onClick={() => onApply?.(gig.id)}
          disabled={gig.status !== 'open'}
        >
          {gig.status === 'open' ? 'Apply' : gig.status}
        </Button>
      </CardFooter>
    </Card>
  );
}
