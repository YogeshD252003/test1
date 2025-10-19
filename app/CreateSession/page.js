"use client";

import React from "react";
import TeacherLayout from "@/components/teacher/TeacherLayout";
import CreateSessionForm from "@/components/CreateSessionForm";

export default function CreateSessionPage() {
  return (
    <TeacherLayout>
      <CreateSessionForm />
    </TeacherLayout>
  );
}
