"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction, LayoutDashboard, BookOpen, QrCode, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

// Dynamically import QR scanner to avoid SSR issues
const QRScannerComponent = dynamic(
  () => import("@yudiel/react-qr-scanner").then((mod) => mod.Scanner),
  { ssr: false }
);

export default function StudentDashboardPage() {
  const [scanOpen, setScanOpen] = useState(false);
  const [qrResult, setQrResult] = useState("");

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r">
        <div className="flex items-center justify-between px-6 py-6">
          <div>
            <h1 className="font-bold text-lg">SmartAttend</h1>
            <p className="text-sm text-muted-foreground">Student Portal</p>
          </div>
          <ThemeToggle />
        </div>

        <nav className="px-4 mt-4 space-y-2">
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground",
              "bg-accent text-accent-foreground font-medium"
            )}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>

          <Link
            href="/attendance-history"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
          >
            <BookOpen className="w-5 h-5" />
            Attendance History
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8 relative">
        {/* Top Right Scan Button */}
        <div className="absolute top-8 right-8">
          <button
            onClick={() => setScanOpen(!scanOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow"
          >
            <QrCode className="w-5 h-5" />
            Scan QR
          </button>
        </div>

        {/* QR Scanner Modal */}
        {scanOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-4 rounded-lg flex flex-col items-center max-w-sm w-full">
              {/* Modal Header with Buttons */}
              <div className="w-full flex justify-between mb-4">
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded flex items-center gap-1"
                  onClick={() => setScanOpen(false)}
                >
                  Close
                </button>
                <button
                  className="px-3 py-1 bg-gray-500 text-white rounded flex items-center gap-1"
                  onClick={() => setScanOpen(false)}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              </div>

              {/* QR Scanner */}
              <QRScannerComponent
                constraints={{ facingMode: "environment" }}
                onDecode={(result) => {
                  setQrResult(result);
                  setScanOpen(false);
                }}
                onError={(error) => console.error(error)}
                style={{ width: 220, height: 220 }} // compact size
              />

              {/* QR Result */}
              {qrResult && (
                <p className="mt-2 text-green-600 font-semibold text-center break-words">
                  QR Result: {qrResult}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Welcome, Student!</h1>
          <p className="text-muted-foreground mt-1">
            View your attendance history and get ready for your next class.
          </p>
        </div>

        {/* Dashboard Card */}
        <Card>
          <CardHeader>
            <CardTitle>Student Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center text-center py-20">
            <Construction className="w-16 h-16 text-yellow-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">
              Page Under Construction
            </h2>
            <p>
              Your attendance history and notifications will be displayed here soon.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
