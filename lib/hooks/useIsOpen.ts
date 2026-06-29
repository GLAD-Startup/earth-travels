"use client";

import { useState, useEffect } from "react";

export default function useIsOpen() {
  const [status, setStatus] = useState({
    isOpen: false,
    statusText: "Closed · Opens Mon 10 AM",
  });

  useEffect(() => {
    const calculateStatus = () => {
      const now = new Date();
      // Calculate IST time (UTC+5:30)
      const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      const day = istTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hour = istTime.getHours();
      const minute = istTime.getMinutes();
      const totalMinutes = hour * 60 + minute;

      const openMinutes = 10 * 60; // 10:00 AM
      const closeMinutes = 19 * 60 + 30; // 7:30 PM

      // Open Monday-Saturday between 10:00 AM and 7:30 PM
      if (day >= 1 && day <= 6 && totalMinutes >= openMinutes && totalMinutes <= closeMinutes) {
        setStatus({
          isOpen: true,
          statusText: "Open now · Closes 7:30 PM",
        });
      } else {
        setStatus({
          isOpen: false,
          statusText: "Closed · Opens Mon 10 AM",
        });
      }
    };

    calculateStatus();
    const timer = setInterval(calculateStatus, 60000);

    return () => clearInterval(timer);
  }, []);

  return status;
}
