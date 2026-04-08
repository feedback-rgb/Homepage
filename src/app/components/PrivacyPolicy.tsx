import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  Database,
  Bell,
  UserCheck,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import pawByteLogo from "@/assets/ic_app.png";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We value and protect your personal privacy
          </p>
          <p className="text-sm text-blue-200 mt-4">
            Last updated: April 8, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                PawByteLabs (hereinafter referred to as "we")
                understands the importance of personal
                information to you. We will adopt corresponding
                security protection measures in accordance with
                legal requirements to protect your personal
                information to the best of our ability. This
                privacy policy will help you understand the
                following:
              </p>
            </div>

            {/* Google Play & legal scope */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Google Play, account deletion, and third-party
                services
              </h2>
              <div className="space-y-4 text-gray-600">
                <h3 className="text-lg font-semibold text-gray-900">
                  Google Play and our Android apps
                </h3>
                <p className="leading-relaxed">
                  This Privacy Policy applies to PawByteLabs
                  mobile applications distributed on Google Play,
                  including our wallpaper app (Android application
                  ID:{" "}
                  <strong>com.pawbytelabs.wallpaper</strong>). It
                  describes how we access, collect, use, handle,
                  and share user data in line with Google
                  Play&apos;s User Data policy. The categories of
                  data and practices we declare in the Google Play
                  Console <strong>Data safety</strong> section are
                  consistent with this policy; for app-version-
                  specific details, refer to the Data safety
                  section for the version you have installed.
                </p>
                <h3 className="text-lg font-semibold text-gray-900">
                  Account and data deletion
                </h3>
                <p className="leading-relaxed">
                  You may request deletion of your account or
                  personal data associated with our apps by
                  emailing{" "}
                  <a
                    className="text-blue-600 hover:underline"
                    href="mailto:feedback@pawbytelabs.com"
                  >
                    feedback@pawbytelabs.com
                  </a>
                  . We will verify your request and process deletion
                  within a reasonable period, except where we must
                  retain certain information to comply with
                  applicable law or resolve disputes.
                </p>
                <h3 className="text-lg font-semibold text-gray-900">
                  Third-party SDKs and service providers
                </h3>
                <p className="leading-relaxed">
                  Our apps may use third-party libraries or SDKs
                  (for example, Google Play services, analytics,
                  advertising, or crash reporting) only as needed to
                  provide the service. How each category of data is
                  used and shared is summarized in our Play Console
                  Data safety declaration; third parties process data
                  under their own privacy policies where they act as
                  independent controllers or subprocessors.
                </p>
                <h3 className="text-lg font-semibold text-gray-900">
                  Children&apos;s privacy
                </h3>
                <p className="leading-relaxed">
                  Our apps are not directed to children under 13 (or
                  the minimum age required in your region). We do
                  not knowingly collect personal information from
                  children. If you believe we have collected such
                  information, contact us and we will delete it
                  promptly.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    1. How We Collect and Use Your Personal
                    Information
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="leading-relaxed">
                      We collect and use your personal
                      information for the following purposes
                      described in this policy:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        To provide you with our app services
                      </li>
                      <li>
                        To maintain and improve our services
                      </li>
                      <li>To ensure service security</li>
                      <li>
                        To comply with laws and regulations
                      </li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      <strong>
                        Types of information we collect include:
                      </strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Device information: device model,
                        operating system version, unique device
                        identifiers
                      </li>
                      <li>
                        Log information: app usage, crash logs,
                        performance data
                      </li>
                      <li>
                        Location information: only collected
                        with your explicit consent (required for
                        certain features)
                      </li>
                      <li>
                        User-generated content: photos, videos,
                        audio, etc. created while using the app
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    2. How We Store and Protect Your Personal
                    Information
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="leading-relaxed">
                      We adopt industry-standard security
                      measures to protect your personal
                      information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Use encryption technology (such as
                        SSL/TLS) to protect data transmission
                      </li>
                      <li>Encrypt stored sensitive data</li>
                      <li>
                        Strictly limit access permissions, only
                        authorized personnel can access personal
                        information
                      </li>
                      <li>
                        Conduct regular security audits and
                        vulnerability scans
                      </li>
                      <li>
                        Establish data backup and disaster
                        recovery mechanisms
                      </li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      Your personal information will be stored
                      on servers within US. We will only
                      retain your personal information for the
                      period necessary to achieve the purposes
                      described in this policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    3. How We Share, Transfer, and Publicly
                    Disclose Your Personal Information
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="leading-relaxed">
                      <strong>Sharing:</strong> We will not
                      share your personal information with third
                      parties unless:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        We have obtained your explicit consent
                      </li>
                      <li>
                        To fulfill legal obligations or comply
                        with government requirements
                      </li>
                      <li>
                        Sharing with our affiliates, but only to
                        achieve the purposes described in this
                        policy
                      </li>
                      <li>
                        Sharing with authorized partners, but we
                        will require them to comply with this
                        policy
                      </li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      <strong>Transfer:</strong> Without your
                      explicit consent, we will not transfer
                      your personal information to any company,
                      organization or individual.
                    </p>
                    <p className="leading-relaxed mt-4">
                      <strong>Public disclosure:</strong> We
                      will only publicly disclose your personal
                      information in the following
                      circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>With your explicit consent</li>
                      <li>
                        Based on laws and regulations, legal
                        processes, litigation, or mandatory
                        requirements from government authorities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    4. Your Rights
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="leading-relaxed">
                      In accordance with relevant Chinese laws
                      and regulations, you have the following
                      rights:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Right to access:</strong> You
                        have the right to access your personal
                        information
                      </li>
                      <li>
                        <strong>Right to correction:</strong>{" "}
                        You have the right to request us to
                        correct or supplement your information
                      </li>
                      <li>
                        <strong>Right to deletion:</strong> In
                        certain circumstances, you have the
                        right to request us to delete your
                        personal information
                      </li>
                      <li>
                        <strong>Withdraw consent:</strong> You
                        have the right to withdraw your previous
                        consent to us
                      </li>
                      <li>
                        <strong>Cancel account:</strong> You
                        have the right to cancel your account
                      </li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      To exercise the above rights, please
                      contact us through the contact information
                      provided at the end of this policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 text-sky-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    5. How This Policy Is Updated
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="leading-relaxed">
                      We may update this privacy policy from
                      time to time. When significant changes
                      occur to the policy, we will notify you
                      through the following methods:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Send notifications within the app</li>
                      <li>Post announcements on the website</li>
                      <li>Notify you by email</li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      Without your explicit consent, we will not
                      reduce your rights under this privacy
                      policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How to Contact Us
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">
                  If you have any questions, comments or
                  suggestions about this privacy policy, please
                  contact us through the following methods:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                  <p>
                    <strong>Email:</strong>{" "}
                    feedback@pawbytelabs.com
                  </p>
                  <p>
                    <strong>Address:</strong> Yuhuangmiao
                    Branch, Beijing Mentougou Datai Trading
                    Company, China
                  </p>
                </div>
                <p className="leading-relaxed text-sm">
                  Generally, we will respond to your request
                  within 15 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}