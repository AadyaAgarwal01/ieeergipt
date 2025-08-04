"use client";

import { useEffect, useState } from "react";
import CanvasCursor from "@/components/ui/canvas-cursor-effect"; // adjust the import path as needed

export default function CanvasCursorWrapper() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop ? <CanvasCursor /> : null;
}
