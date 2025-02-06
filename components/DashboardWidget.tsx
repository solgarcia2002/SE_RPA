"use client";
import { useEffect, useState } from "react";

export default function DashboardWidget() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, []);

  return <div>Current Time: {currentTime}</div>;
}
