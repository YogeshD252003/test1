"use client";
import React, { useState } from "react";
import {
  LayoutDashboard,
  UserPlus,
  Users,
  GraduationCap,
  BookOpen,
  BarChart3,
  LogOut,
  Activity, // ✅ added so no error
} from "lucide-react";
import { motion } from "framer-motion";

import StatsCard from "@/components/dashboard/StatsCard";
import QuickOverview from "@/components/dashboard/QuickOverview";
import RecentActivity from "@/components/dashboard/RecentActivity";

// ----------------- Sidebar -----------------
function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col justify-between">
      {/* Logo / Header */}
      <div>
        <div className="px-6 py-6 flex items-center gap-2 border-b">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-xl">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">EduAdmin</h1>
            <p className="text-xs text-slate-500">Teacher Management Portal</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="mt-6 px-4 space-y-6">
          {/* Dashboard */}
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-2">DASHBOARD</p>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </a>
          </div>

          {/* Teachers */}
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-2">TEACHERS</p>
            <div className="space-y-1">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
              >
                <UserPlus className="w-5 h-5" />
                Create Teacher
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
              >
                <Users className="w-5 h-5" />
                View Teachers
              </a>
            </div>
          </div>

          {/* Students */}
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-2">STUDENTS</p>
            <div className="space-y-1">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
              >
                <GraduationCap className="w-5 h-5" />
                Create Student
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
              >
                <BookOpen className="w-5 h-5" />
                View Students
              </a>
            </div>
          </div>

          {/* Analytics */}
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-2">ANALYTICS</p>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              <BarChart3 className="w-5 h-5" />
              Reports & Analytics
            </a>
          </div>
        </nav>
      </div>

      {/* Footer User Info */}
      <div className="p-4 border-t flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-slate-500">System Administrator</p>
          </div>
        </div>
        <LogOut className="w-5 h-5 text-slate-500 cursor-pointer" />
      </div>
    </div>
  );
}

// ----------------- Dashboard -----------------
export default function Dashboard() {
  const teachers = [
    { id: 1, name: "John Doe", department: "Math", subject: "Algebra", status: "active" },
    { id: 2, name: "Jane Smith", department: "Science", subject: "Physics", status: "inactive" },
    { id: 3, name: "Alice Johnson", department: "Math", subject: "Geometry", status: "active" },
    { id: 4, name: "Bob Brown", department: "English", subject: "Literature", status: "active" },
  ];

  const [isLoading, setIsLoading] = useState(false);

  const getStats = () => {
    const totalTeachers = teachers.length;
    const departments = [...new Set(teachers.map((t) => t.department))];
    const subjects = [...new Set(teachers.map((t) => t.subject))];
    const activeTeachers = teachers.filter((t) => t.status === "active").length;

    return {
      totalTeachers,
      totalDepartments: departments.length,
      totalSubjects: subjects.length,
      activeTeachers,
    };
  };

  const stats = getStats();

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-slate-600">
              Welcome back! Here's what's happening with your teacher management system.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Teachers"
              value={stats.totalTeachers}
              icon={Users}
              color="blue"
              trend="+5% from last month"
              isLoading={isLoading}
            />
            <StatsCard
              title="Active Teachers"
              value={stats.activeTeachers}
              icon={Activity}
              color="green"
              trend={`${Math.round(
                (stats.activeTeachers / stats.totalTeachers) * 100
              )}% active rate`}
              isLoading={isLoading}
            />
            <StatsCard
              title="Departments"
              value={stats.totalDepartments}
              icon={GraduationCap}
              color="purple"
              trend="Across all faculties"
              isLoading={isLoading}
            />
            <StatsCard
              title="Subjects"
              value={stats.totalSubjects}
              icon={BookOpen}
              color="orange"
              trend="Different subjects taught"
              isLoading={isLoading}
            />
          </div>

          {/* Quick Overview & Recent Activity */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <QuickOverview teachers={teachers} isLoading={isLoading} />
            </div>
            <div>
              <RecentActivity teachers={teachers} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
