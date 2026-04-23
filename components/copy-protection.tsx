"use client";

import { useEffect } from "react";

export function CopyProtection() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable keyboard shortcuts for viewing source, copying, saving, etc.
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+U (View Source), Ctrl+S (Save), Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console)
      if (e.ctrlKey && (e.key === "u" || e.key === "U" || e.key === "s" || e.key === "S")) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) {
        e.preventDefault();
      }
      // F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault();
      }
    };

    // Disable text selection via CSS
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";

    // Disable drag
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // Disable copy
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("copy", handleCopy);
      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
    };
  }, []);

  return null;
}
