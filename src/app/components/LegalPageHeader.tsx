import { ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import pawByteLogo from "@/assets/ic_app.png";

interface LegalPageHeaderProps {
  onBack: () => void;
}

/** Shared header for legal pages (Terms, Privacy) — single source for back button + brand row. */
export function LegalPageHeader({ onBack }: LegalPageHeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
            className="gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="flex items-center gap-2">
            <img
              src={pawByteLogo}
              alt="PawByte Labs"
              className="w-8 h-8"
            />
            <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              PawByteLabs
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
