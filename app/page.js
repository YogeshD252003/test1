import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Shield, Clock, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smart Attendance
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Management System
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Revolutionary attendance tracking with geofencing, face recognition, and real-time analytics. 
              Streamline your classroom management with cutting-edge technology.
            </p>
            
            {/* Portal Selection */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-300" />
                <CardHeader className="relative pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-center">Teacher Portal</CardTitle>
                </CardHeader>
                <CardContent className="relative text-center">
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Create sessions, manage attendance, generate reports, and track student performance with advanced analytics.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>Geofence-based attendance</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>Real-time session management</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-blue-500" />
                      <span>Manual override controls</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg text-white font-semibold py-6 text-lg rounded-xl transition-all duration-300"
                  >
                    Access Teacher Portal
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-300" />
                <CardHeader className="relative pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-center">Student Portal</CardTitle>
                </CardHeader>
                <CardContent className="relative text-center">
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Mark attendance seamlessly with face recognition, receive notifications, and track your attendance history.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-emerald-500" />
                      <span>Face recognition verification</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-emerald-500" />
                      <span>Instant notifications</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <BookOpen className="w-4 h-4 text-emerald-500" />
                      <span>Attendance history tracking</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg text-white font-semibold py-6 text-lg rounded-xl transition-all duration-300"
                  >
                    Access Student Portal
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of attendance management with our comprehensive suite of intelligent features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Geofencing Technology",
                description: "Automatic location-based attendance verification ensures students are physically present in the classroom.",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Shield,
                title: "Face Recognition",
                description: "Advanced biometric verification prevents proxy attendance and ensures accurate identification.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Clock,
                title: "Real-time Updates",
                description: "Instant notifications and live attendance tracking keep everyone synchronized and informed.",
                color: "from-emerald-500 to-teal-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
