'use client';

import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Settings, Bell, Search } from 'lucide-react';

interface NavHeaderProps {
  title: string;
  user?: {
    username: string;
    avatar_url?: string;
  };
}

export function NavHeader({ title, user }: NavHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-md">
        <div className="flex items-center space-x-md">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">S</span>
            </div>
            <h1 className="text-heading text-foreground">{title}</h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="icon" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="icon" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="icon" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          {user && (
            <Avatar 
              src={user.avatar_url} 
              alt={user.username}
              size="default"
            />
          )}
        </div>
      </div>
    </header>
  );
}
