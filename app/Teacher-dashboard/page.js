"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Clock, Trophy, Settings, Home, FileText } from "lucide-react";

import ProfileCard from "@/components/teacher/ProfileCard";
import StudentDataBlocks from "@/components/teacher/StudentDataBlocks";
import RecentSessions from "@/components/teacher/RecentSessions";
import QuickStats from "@/components/teacher/QuickStats";

// Mock data
const mockTeacher = {
  id: "T001",
  name: "John Doe",
  email: "johndoe@example.com",
  subscription_status: true,
};

const mockStudents = [
  { id: "S001", name: "Alice", semester: 3, section: "A" },
  { id: "S002", name: "Bob", semester: 3, section: "A" },
];

const mockSessions = [
  {
    id: "SE001",
    topic_covered: "React Basics",
    period: "9:00 - 10:00 AM",
    semester: 3,
    section: "A",
    geofence_radius: 50,
    status: "active",
    created_date: new Date(),
  },
  {
    id: "SE002",
    topic_covered: "JavaScript ES6",
    period: "10:00 - 11:00 AM",
    semester: 3,
    section: "A",
    geofence_radius: 50,
    status: "completed",
    created_date: new Date(Date.now() - 86400000),
  },
];

const mockAttendance = [
  { session_id: "SE001", student_id: "S001", status: "present" },
  { session_id: "SE001", student_id: "S002", status: "absent" },
  { session_id: "SE002", student_id: "S001", status: "present" },
];

export default function TeacherDashboard() {
  const [currentTeacher, setCurrentTeacher] = useState(mockTeacher);

  const handleSubscriptionToggle = (enabled) => {
    setCurrentTeacher({ ...currentTeacher, subscription_status: enabled });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm flex flex-col justify-between">
        <div>
          <div className="px-6 py-4">
            <h1 className="text-xl font-bold text-blue-600">ClassMaster</h1>
            <p className="text-sm text-gray-500">Teacher Portal</p>
          </div>
          <nav className="px-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BookOpen className="w-4 h-4 mr-2" />
              Create Session
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Clock className="w-4 h-4 mr-2" />
              Active Sessions
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="w-4 h-4 mr-2" />
              Reports
            </Button>
          </nav>
        </div>

        {/* Bottom Profile */}
        <div className="px-4 py-3 border-t">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              {currentTeacher.name[0]}
            </div>
            <div>
              <p className="font-medium">{currentTeacher.name}</p>
              <p className="text-xs text-gray-500">{currentTeacher.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 space-y-8 bg-gray-50">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {currentTeacher.name}!
            </h1>
            <p className="text-gray-600 mt-1">
              Manage your classes and track attendance seamlessly
            </p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
            <BookOpen className="w-4 h-4 mr-2" />
            Create New Session
          </Button>
        </div>

        {/* Quick Stats */}
        <QuickStats
          students={mockStudents}
          sessions={mockSessions}
          attendanceRecords={mockAttendance}
        />

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <ProfileCard
              teacher={currentTeacher}
              onSubscriptionToggle={handleSubscriptionToggle}
            />

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Create New Session
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="w-4 h-4 mr-2" />
                  View Active Sessions
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Trophy className="w-4 h-4 mr-2" />
                  Generate Reports
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            <StudentDataBlocks
              students={mockStudents}
              attendanceRecords={mockAttendance}
            />
            <RecentSessions
              sessions={mockSessions}
              attendanceRecords={mockAttendance}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
