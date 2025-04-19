"use client";

import { PhoneCall, Facebook, ArrowUp } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export function FloatingActions() {
  const handlePhone = () => {
    window.location.href = "tel:(02) 9905 7190";
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-1/3 flex flex-col gap-4 z-50">
      {/* 电话 */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label="Call us"
            onClick={handlePhone}
            className="p-2 rounded-full bg-white/90 backdrop-blur hover:bg-white transition-shadow shadow-md"
          >
            <a href="tel:(02) 9905 7190">
              <PhoneCall className="w-6 h-6 text-primary" />
            </a>
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" align="center">
          (02) 9905 7190
        </TooltipContent>
      </Tooltip>

      {/* Facebook */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label="Facebook"
            className="p-2 rounded-full bg-white/90 backdrop-blur hover:bg-white transition-shadow shadow-md"
          >
            <a href="https://www.facebook.com/profile.php?id=61558399330372"
              target="_blank"
              rel="noopener noreferrer">
              <Facebook className="w-6 h-6 text-primary" />
            </a>
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" align="center">
          Facebook
        </TooltipContent>
      </Tooltip>

      {/* 回到顶部 */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label="Back to top"
            onClick={handleBackToTop}
            className="p-2 rounded-full bg-white/90 backdrop-blur hover:bg-white transition-shadow shadow-md"
          >
            <ArrowUp className="w-6 h-6 text-primary" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" align="center">
          Back Top
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
