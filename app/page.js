"use client";
import React from "react";
import TeacherLayout from "@/components/teacher/TeacherLayout";
import QuickStats from "@/components/teacher/QuickStats";
import ProfileCard from "@/components/teacher/ProfileCard";
import StudentDataBlocks from "@/components/teacher/StudentDataBlocks";
import RecentSessions from "@/components/teacher/RecentSessions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, BookOpen, Clock, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TeacherDashboard() {
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
  ];

  const mockAttendance = [
    { session_id: "SE001", student_id: "S001", status: "present" },
    { session_id: "SE001", student_id: "S002", status: "absent" },
  ];

  return (
    <TeacherLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {mockTeacher.name}!
            </h1>
            <p className="text-gray-600 mt-1">
              Manage your classes and track attendance seamlessly
            </p>
          </div>
          <Link href="/CreateSession" className="w-full md:w-auto">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
              <BookOpen className="w-4 h-4 mr-2" />
              Create New Session
            </Button>
          </Link>
        </div>

        <QuickStats
          students={mockStudents}
          sessions={mockSessions}
          attendanceRecords={mockAttendance}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <ProfileCard teacher={mockTeacher} />
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/CreateSession">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" /> Create New Session
                </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="w-4 h-4 mr-2" /> View Active Sessions
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Trophy className="w-4 h-4 mr-2" /> Generate Reports
                </Button>
              </CardContent>
            </Card>
          </div>

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
      </div>
    </TeacherLayout>
  );
}
