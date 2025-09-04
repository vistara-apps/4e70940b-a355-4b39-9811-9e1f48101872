'use client';

import { useState } from 'react';
import { NavHeader } from '@/components/nav-header';
import { TaskCard } from '@/components/task-card';
import { GigCard } from '@/components/gig-card';
import { SessionCard } from '@/components/session-card';
import { DashboardStats } from '@/components/dashboard-stats';
import { MapPreview } from '@/components/map-preview';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Filter, MapPin, Users, Briefcase, Calendar } from 'lucide-react';
import { mockTasks, mockGigs, mockSessions, mockUsers } from '@/lib/mock-data';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'tasks' | 'gigs' | 'sessions'>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const currentUser = mockUsers[0]; // Mock current user
  
  const stats = {
    totalTasks: 12,
    completedTasks: 8,
    connections: 24,
    earnings: 1250
  };

  const handleApplyForTask = (taskId: string) => {
    console.log('Applying for task:', taskId);
    // Handle task application
  };

  const handleApplyForGig = (gigId: string) => {
    console.log('Applying for gig:', gigId);
    // Handle gig application
  };

  const handleJoinSession = (sessionId: string) => {
    console.log('Joining session:', sessionId);
    // Handle session join
  };

  const handleViewProfile = (fid: string) => {
    console.log('Viewing profile:', fid);
    // Handle profile view
  };

  const filteredTasks = mockTasks.filter(task =>
    task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.skills_required.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredGigs = mockGigs.filter(gig =>
    gig.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    gig.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    gig.skills_required.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredSessions = mockSessions.filter(session =>
    session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    session.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    session.topic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen gradient-bg">
      <NavHeader title="SkillSwap Local" user={currentUser} />
      
      <div className="container max-w-6xl mx-auto px-md py-lg">
        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-lg bg-black/20 p-2 rounded-lg backdrop-blur">
          {[
            { key: 'dashboard', label: 'Dashboard', icon: MapPin },
            { key: 'tasks', label: 'Tasks', icon: Briefcase },
            { key: 'gigs', label: 'Gigs', icon: Users },
            { key: 'sessions', label: 'Sessions', icon: Calendar },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center space-x-2 px-md py-sm rounded-md text-sm font-medium transition-all duration-base ${
                activeTab === key
                  ? 'bg-accent text-accent-foreground shadow-card'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Search and Filter Bar */}
        {activeTab !== 'dashboard' && (
          <div className="flex space-x-md mb-lg">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={`Search ${activeTab}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
              <Filter className="h-4 w-4" />
            </Button>
            <Button className="bg-accent hover:bg-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              New {activeTab.slice(0, -1)}
            </Button>
          </div>
        )}

        {/* Content Based on Active Tab */}
        {activeTab === 'dashboard' && (
          <div className="grid lg:grid-cols-3 gap-lg">
            {/* Left Column - Stats and Quick Actions */}
            <div className="lg:col-span-1 space-y-lg">
              <DashboardStats stats={stats} />
              
              <Card className="gradient-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Plus className="h-5 w-5 mr-2" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-md">
                  <Button 
                    className="w-full justify-start bg-accent/20 hover:bg-accent/30 text-accent border-accent/30"
                    variant="outline"
                  >
                    <Briefcase className="h-4 w-4 mr-2" />
                    Post New Task
                  </Button>
                  <Button 
                    className="w-full justify-start bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border-blue-500/30"
                    variant="outline"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Create Gig
                  </Button>
                  <Button 
                    className="w-full justify-start bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 border-purple-500/30"
                    variant="outline"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Organize Session
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Map and Recent Activity */}
            <div className="lg:col-span-2 space-y-lg">
              <Card className="gradient-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Local Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MapPreview tasks={mockTasks} />
                </CardContent>
              </Card>

              <Card className="gradient-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Recent Tasks</CardTitle>
                </CardHeader>
                <CardContent className="space-y-md">
                  {mockTasks.slice(0, 2).map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onApply={handleApplyForTask}
                      onViewProfile={handleViewProfile}
                    />
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onApply={handleApplyForTask}
                onViewProfile={handleViewProfile}
              />
            ))}
          </div>
        )}

        {activeTab === 'gigs' && (
          <div className="grid md:grid-cols-2 gap-lg">
            {filteredGigs.map((gig) => (
              <GigCard
                key={gig.id}
                gig={gig}
                onApply={handleApplyForGig}
                onViewProfile={handleViewProfile}
              />
            ))}
          </div>
        )}

        {activeTab === 'sessions' && (
          <div className="grid md:grid-cols-2 gap-lg">
            {filteredSessions.map((session) => (
              <SessionCard
                key={session.id}
                session={session}
                onJoin={handleJoinSession}
                onViewProfile={handleViewProfile}
              />
            ))}
          </div>
        )}

        {/* Empty States */}
        {((activeTab === 'tasks' && filteredTasks.length === 0) ||
          (activeTab === 'gigs' && filteredGigs.length === 0) ||
          (activeTab === 'sessions' && filteredSessions.length === 0)) && (
          <div className="text-center py-xl">
            <div className="text-6xl mb-md">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-sm">
              No {activeTab} found
            </h3>
            <p className="text-white/70 mb-lg">
              {searchQuery
                ? `No ${activeTab} match your search "${searchQuery}"`
                : `No ${activeTab} available right now`}
            </p>
            <Button className="bg-accent hover:bg-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              Create New {activeTab.slice(0, -1)}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
