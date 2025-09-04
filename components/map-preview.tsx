'use client';

import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Task } from '@/lib/types';

interface MapPreviewProps {
  tasks: Task[];
}

export function MapPreview({ tasks }: MapPreviewProps) {
  return (
    <Card className="w-full gradient-card border-white/10">
      <CardContent className="p-md">
        <div className="relative h-48 bg-muted/20 rounded-md border border-white/10 flex items-center justify-center">
          {/* Simplified map visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4">
              {tasks.slice(0, 6).map((task, index) => (
                <div
                  key={task.id}
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    index % 3 === 0 ? 'bg-accent/30' : index % 3 === 1 ? 'bg-blue-500/30' : 'bg-purple-500/30'
                  }`}
                >
                  <MapPin className="h-4 w-4 text-white" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Map overlay info */}
          <div className="absolute bottom-2 left-2 text-xs text-muted-foreground">
            {tasks.length} local opportunities
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
