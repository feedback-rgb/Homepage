import {
  FileText,
  CheckCircle,
  AlertCircle,
  Ban,
  Scale,
} from "lucide-react";
import { LegalPageHeader } from "@/app/components/LegalPageHeader";

interface TermsOfServiceProps {
  onBack: () => void;
}

export function TermsOfService({
  onBack,
}: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <LegalPageHeader onBack={onBack} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Please read the following terms carefully before
            using our services
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
                Welcome to PawByteLabs Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Thank you for choosing PawByteLabs products and
                services! These Terms of Service (hereinafter
                referred to as "these Terms") constitute an
                agreement between you and PawByteLabs
                (hereinafter referred to as "we") regarding your
                use of the various services we provide. Please
                read and fully understand all the contents of
                these Terms before using our services.
              </p>
              <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-sm text-blue-900">
                  <strong>Important Notice:</strong> If you do
                  not agree with any content of these Terms, or
                  cannot accurately understand our
                  interpretation of the Terms, please do not
                  proceed with subsequent operations.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    1. Service Description
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="leading-relaxed">
                      1.1 PawByteLabs provides users with
                      services including but not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Creative Wallpaper app and related
                        features
                      </li>
                      <li>
                        Other related products and services
                      </li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      1.2 We have the right to adjust, change or
                      terminate some or all of the service
                      content according to business development
                      needs. If there are significant changes,
                      we will notify you in advance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    2. Account Registration and Use
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="leading-relaxed">
                      2.1 You need to register an account to use
                      some of our services. When registering,
                      you should:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Provide true, accurate and complete
                        personal information
                      </li>
                      <li>
                        Update your personal information in a
                        timely manner to keep it true, accurate
                        and complete
                      </li>
                      <li>
                        Properly keep your account and password
                      </li>
                      <li>
                        Be responsible for all actions under
                        your account
                      </li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      2.2 You may not transfer, lend or rent
                      your account to others. If we find that
                      the account user is not the account
                      registrant, we have the right to suspend
                      or terminate the use of the account.
                    </p>
                    <p className="leading-relaxed mt-4">
                      2.3 If you find that your account has been
                      stolen or there are other security issues,
                      please notify us immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Ban className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    3. User Code of Conduct
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="leading-relaxed">
                      3.1 When using our services, you shall not
                      engage in the following behaviors:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Violate laws and regulations, policies
                        and public order and good customs
                      </li>
                      <li>
                        Publish or disseminate illegal, harmful,
                        false, harassing, infringing information
                      </li>
                      <li>
                        Infringe on the legitimate rights and
                        interests of others such as intellectual
                        property rights, reputation rights, and
                        privacy rights
                      </li>
                      <li>
                        Interfere with or damage the normal
                        operation of services
                      </li>
                      <li>
                        Use unauthorized third-party software,
                        plugins, or cheats
                      </li>
                      <li>
                        Conduct any form of commercial promotion
                        or advertising (without our consent)
                      </li>
                      <li>
                        Collect information about others for
                        commercial or illegal purposes
                      </li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      3.2 If we find that you have violated the
                      rules, we have the right to take measures
                      including but not limited to warnings,
                      restrictions on functions, suspension of
                      services, termination of services, and
                      pursuit of legal liability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    4. Intellectual Property
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="leading-relaxed">
                      4.1 The intellectual property rights of
                      all content contained in the services we
                      provide (including but not limited to
                      text, pictures, audio, video, software,
                      programs, layout design, etc.) belong to
                      us or the relevant rights holders.
                    </p>
                    <p className="leading-relaxed mt-4">
                      4.2 Without our or the relevant rights
                      holder's explicit written permission, you
                      may not:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Copy, modify, disseminate or display
                        content in the service
                      </li>
                      <li>
                        Reverse engineer, decompile or
                        disassemble our software
                      </li>
                      <li>
                        Use content in the service for
                        commercial purposes in any way
                      </li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      4.3 You retain the intellectual property
                      rights to content you create, upload and
                      publish through our services (such as
                      photos, videos, audio, etc.). But you
                      grant us a free, non-exclusive,
                      transferable license worldwide so that we
                      can provide services to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-sky-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    5. Disclaimer
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="leading-relaxed">
                      5.1 We will do our best to ensure the
                      stability and security of the service, but
                      we are not responsible for the following
                      situations:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Service interruption caused by force
                        majeure (such as natural disasters,
                        wars, strikes, etc.)
                      </li>
                      <li>
                        Service interruption caused by network
                        failure, equipment failure, system
                        maintenance, etc.
                      </li>
                      <li>
                        Data loss or leakage caused by hacker
                        attacks, computer viruses, etc.
                      </li>
                      <li>
                        Problems caused by your own reasons
                        (such as improper operation, equipment
                        failure, etc.)
                      </li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      5.2 The services we provide are for
                      entertainment and reference only, and we
                      do not guarantee their accuracy,
                      completeness or applicability. You should
                      judge for yourself and bear the risks of
                      using the service.
                    </p>
                    <p className="leading-relaxed mt-4">
                      5.3 We are not liable for any direct,
                      indirect, incidental, special or
                      consequential damages arising from the use
                      of our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    6. Changes and Termination of Terms
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="leading-relaxed">
                      6.1 We have the right to modify these
                      Terms as needed. The modified Terms will
                      be published in the app or on the website
                      and will take effect immediately after
                      publication.
                    </p>
                    <p className="leading-relaxed mt-4">
                      6.2 If you do not agree with the modified
                      Terms, you should stop using our services.
                      If you continue to use our services, you
                      are deemed to have accepted the modified
                      Terms.
                    </p>
                    <p className="leading-relaxed mt-4">
                      6.3 We have the right to terminate the
                      provision of services to you at any time
                      without any liability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">
                  If you have any questions or suggestions about
                  these Terms of Service, please contact us
                  through the following methods:
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
                <p className="leading-relaxed text-sm mt-4">
                  Thank you again for choosing PawByteLabs
                  services!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}