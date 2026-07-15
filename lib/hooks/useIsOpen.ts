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

      let isOpen = false;
      let statusText = "";

      if (day >= 1 && day <= 6 && totalMinutes >= openMinutes && totalMinutes <= closeMinutes) {
        isOpen = true;
        statusText = "Open now · Closes 7:30 PM";
      } else {
        isOpen = false;
        if (day >= 1 && day <= 5 && totalMinutes > closeMinutes) {
          statusText = "Closed · Opens tomorrow 10 AM";
        } else if (day >= 1 && day <= 6 && totalMinutes < openMinutes) {
          statusText = "Closed · Opens today 10 AM";
        } else {
          statusText = "Closed · Opens Mon 10 AM";
        }
      }

      setStatus({ isOpen, statusText });
    };

    calculateStatus();
    const timer = setInterval(calculateStatus, 60000);

    return () => clearInterval(timer);
  }, []);

  return status;
}
