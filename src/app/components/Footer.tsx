import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import pawByteLogo from "@/assets/ic_app.png";

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={pawByteLogo}
                alt="PawByte Labs"
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-white">
                PawByteLabs
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Create fun app experiences, add fun to life
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#apps"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  Our Apps
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Download
            </h3>
            <a
              href="https://play.google.com/store/apps/dev?id=4622397716372917523"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-cyan-400 transition-colors"
            >
              Google Play
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-cyan-400" />
                <a
                  href="mailto:contact@pawbytelabs.com"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  pawbytelabs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-cyan-400" />
                <span className="text-sm">Beijing, China</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 PawByteLabs. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}