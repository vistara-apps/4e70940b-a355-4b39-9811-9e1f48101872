'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';
import { Avatar } from '@/components/ui/avatar';
import { Clock, MapPin, DollarSign } from 'lucide-react';
import { Task } from '@/lib/types';
import { formatTimeAgo, formatDistance } from '@/lib/utils';

interface TaskCardProps {
  task: Task;
  onApply?: (taskId: string) => void;
  onViewProfile?: (fid: string) => void;
}

export function TaskCard({ task, onApply, onViewProfile }: TaskCardProps) {
  return (
    <Card className="w-full hover:shadow-hover transition-all duration-base ease-smooth">
      <CardHeader className="pb-md">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-sm">
            <Avatar 
              src={task.poster?.avatar_url} 
              alt={task.poster?.username}
              size="sm"
            />
            <div>
              <CardTitle className="text-sm">
                {task.poster?.username || `User ${task.poster_fid.slice(0, 6)}`}
              </CardTitle>
              <CardDescription className="text-xs">
                {formatTimeAgo(task.time_posted)}
              </CardDescription>
            </div>
          </div>
          {task.payment_offered && (
            <div className="flex items-center text-accent font-semibold">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>${task.payment_offered}</span>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-sm">
        <p className="text-body text-foreground">{task.description}</p>
        
        <div className="flex items-center space-x-md text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span className="text-xs">{task.location}</span>
          </div>
          {task.deadline && (
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span className="text-xs">Due {formatTimeAgo(task.deadline)}</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-1">
          {task.skills_required.map((skill, index) => (
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
          onClick={() => onViewProfile?.(task.poster_fid)}
        >
          View Profile
        </Button>
        <Button 
          size="sm"
          onClick={() => onApply?.(task.id)}
          disabled={task.status !== 'open'}
        >
          {task.status === 'open' ? 'Apply' : task.status}
        </Button>
      </CardFooter>
    </Card>
  );
}
