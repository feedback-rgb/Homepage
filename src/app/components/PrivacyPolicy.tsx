import {
  Shield,
  Lock,
  Eye,
  Database,
  Bell,
  UserCheck,
  Mail,
  Megaphone,
  Globe,
} from "lucide-react";
import { LegalPageHeader } from "@/app/components/LegalPageHeader";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <LegalPageHeader onBack={onBack} />

      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            How PawByteLabs collects, uses, shares, and protects information
          </p>
          <p className="text-sm text-blue-200 mt-4">
            Last updated: April 12, 2026 · Effective date: April 12, 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                PawByteLabs (&quot;PawByteLabs&quot;, &quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;) respects your privacy. This
                Privacy Policy explains how we access, collect, use, share, and
                otherwise process information when you use our websites (such as{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="https://pawbytelabs.com"
                  rel="noopener noreferrer"
                >
                  pawbytelabs.com
                </a>
                ), mobile applications, and related services that link to this
                policy (collectively, the &quot;Services&quot;). It also describes
                your choices and rights. By using the Services, you acknowledge
                the practices described here. If you do not agree, please do not
                use the Services.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                This policy is designed to meet common app store requirements,
                including{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="https://support.google.com/googleplay/android-developer/answer/10144311"
                  rel="noopener noreferrer"
                >
                  Google Play&apos;s User Data policy
                </a>
                . The data categories and practices we declare in Google Play
                Console (including the Data safety form) are intended to align
                with this Privacy Policy for the applicable app version.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    1. Who we are and how to contact us
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    For purposes of the EU/UK General Data Protection Regulation
                    and similar laws, PawByteLabs is the data controller for
                    personal information processed in connection with the
                    Services, unless we state otherwise (for example, where a
                    partner acts as an independent controller for its own
                    advertising activities).
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Questions about this Privacy Policy, access requests, or
                    privacy complaints:{" "}
                    <a
                      className="text-blue-600 hover:underline"
                      href="mailto:feedback@pawbytelabs.com"
                    >
                      feedback@pawbytelabs.com
                    </a>
                    . We generally respond within 15 business days.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 text-gray-600 text-sm space-y-1">
                    <p>
                      <strong>Postal address:</strong> Yuhuangmiao Branch,
                      Beijing Mentougou Datai Trading Company, China
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    2. Scope: websites and Android applications
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    This Privacy Policy applies to visitors and users of our
                    websites and to users of our Android applications distributed
                    on Google Play, including our wallpaper application (
                    <strong>application ID: com.pawbytelabs.wallpaper</strong>).
                    Features may include live/parallax/video/3D wallpapers,
                    optional lock-screen or overlay experiences, content
                    browsing, and related tools. If we offer additional apps or
                    services that link here, those are covered as well.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    3. Information we collect
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Depending on how you use the Services, we and our service
                    providers may collect the following categories of information.
                    Some information may identify you directly or indirectly when
                    combined with other data.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900">
                    3.1 Information you provide
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>
                      <strong>Communications:</strong> when you email us or
                      otherwise contact support, we receive the content of your
                      message and basic contact details (such as your email
                      address).
                    </li>
                    <li>
                      <strong>Preferences and settings:</strong> in-app choices
                      you make (for example, wallpaper selections, feature
                      toggles, language, or similar options stored on your
                      device or in app storage).
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900">
                    3.2 Content and files you use with the app
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>
                      <strong>Photos, videos, and media you select:</strong> if
                      you choose images or videos from your device (or similar
                      sources) to use as wallpapers or previews, those files are
                      processed on your device to provide the feature. We do not
                      upload your personal photo library by default solely
                      because you installed the app; processing occurs to fulfill
                      the features you activate.
                    </li>
                    <li>
                      <strong>Derived technical outputs:</strong> for certain
                      features (for example, depth or visual effects), the app
                      may compute derived data locally from imagery you select in
                      order to render wallpapers. Such derived data is used to
                      provide the feature and is not sold by PawByteLabs as
                      &quot;personal information&quot; in the ordinary course.
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900">
                    3.3 Information collected automatically on the device
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>
                      <strong>Device and app information:</strong> device model,
                      manufacturer, operating system version, language/locale,
                      screen parameters where relevant to rendering, app
                      version, identifiers associated with the app installation,
                      and similar diagnostic metadata.
                    </li>
                    <li>
                      <strong>Identifiers used for ads and analytics:</strong>{" "}
                      advertising-related identifiers (such as the Google
                      Advertising ID on Android, where available and permitted),
                      along with app instance identifiers used for measurement,
                      fraud prevention, and product improvement.
                    </li>
                    <li>
                      <strong>Usage and diagnostics:</strong> app events,
                      feature usage, performance metrics, and similar telemetry
                      to maintain and improve stability and user experience.
                    </li>
                    <li>
                      <strong>Crash data:</strong> when the app crashes or
                      encounters certain errors, crash logs and related diagnostic
                      information may be collected to identify and fix issues.
                    </li>
                    <li>
                      <strong>Approximate location from the device or networks:</strong>{" "}
                      our advertising partners may collect or derive coarse
                      location (for example, at a city or regional level) or
                      related signals for advertising, measurement, and fraud
                      prevention, consistent with platform permissions and your
                      consent or device settings where required. Precise GPS
                      location is not a core requirement for our wallpaper
                      features themselves.
                    </li>
                    <li>
                      <strong>Install and campaign attribution:</strong> we may
                      use the Play Install Referrer API or similar mechanisms to
                      understand how users discover our app, subject to platform
                      rules.
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900">
                    3.4 Our website and similar technologies
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    When you browse our website, standard server logs, cookies,
                    and similar technologies may be used to operate the site,
                    remember preferences, measure traffic, and improve security.
                    You can control cookies through your browser settings; some
                    site features may not work if you disable certain cookies.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-violet-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    4. How we use information
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We use information for the following purposes, as permitted
                    by applicable law:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>
                      <strong>Provide and operate the Services:</strong> render
                      wallpapers, process media you select, store preferences,
                      deliver updates, and provide customer support.
                    </li>
                    <li>
                      <strong>Maintain safety and integrity:</strong> detect
                      abuse, secure accounts and systems, enforce our terms, and
                      protect users.
                    </li>
                    <li>
                      <strong>Improve and develop products:</strong> understand
                      how features are used, troubleshoot crashes, run remote
                      configuration experiments, and improve performance.
                    </li>
                    <li>
                      <strong>Advertising and marketing:</strong> show and
                      measure ads (including personalized ads where allowed),
                      work with ad partners and mediation platforms, comply with
                      consent requirements (such as the Google User Messaging
                      Platform / GDPR / ePrivacy flows where applicable), and
                      measure effectiveness.
                    </li>
                    <li>
                      <strong>Legal compliance:</strong> comply with law,
                      respond to lawful requests, and defend legal rights.
                    </li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    Where required by law, we rely on consent for certain
                    processing (for example, personalized advertising in some
                    regions). Where consent is not required, we may rely on
                    performance of a contract, legitimate interests (such as
                    securing our Services and understanding aggregate usage), or
                    legal obligation, as appropriate.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Megaphone className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    5. Advertising, analytics, and third-party SDKs
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our Android apps may integrate third-party software
                    development kits (SDKs) for advertising, analytics, crash
                    reporting, cloud configuration, and related functions. These
                    providers may collect information from your device as
                    described in their own policies.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Examples of categories of partners include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>
                      <strong>Google:</strong> we may use Google services such
                      as Google Mobile Ads (including mediation), Firebase
                      Analytics, Firebase Crashlytics, and Firebase Remote
                      Config. See{" "}
                      <a
                        className="text-blue-600 hover:underline"
                        href="https://policies.google.com/privacy"
                        rel="noopener noreferrer"
                      >
                        Google&apos;s Privacy Policy
                      </a>
                      .
                    </li>
                    <li>
                      <strong>Advertising mediation and networks:</strong> we
                      may use mediation and demand partners such as AppLovin,
                      Meta (Facebook Audience Network), InMobi, Pangle, and
                      others. Each partner processes data under its own privacy
                      policy, including for ad delivery, measurement, and fraud
                      prevention.
                    </li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Your choices:</strong> you can reset or limit
                    ad-related identifiers in your Android device settings (for
                    example, Ads settings) and use in-app consent tools where
                    presented. You may still see ads after opting out of
                    personalization, but they may be less relevant.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    6. How we share information
                  </h2>
                  <div className="space-y-3 text-gray-600">
                    <p className="leading-relaxed">
                      We do not sell your personal information for money in the
                      traditional sense of a data broker sale. We may share
                      information as follows:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Service providers:</strong> hosting, analytics,
                        advertising, crash reporting, customer support tools, and
                        security vendors processing data on our behalf under
                        contracts.
                      </li>
                      <li>
                        <strong>Advertising partners:</strong> ad networks,
                        exchanges, mediation platforms, and measurement partners
                        as needed to show ads and measure campaigns.
                      </li>
                      <li>
                        <strong>Affiliates:</strong> subsidiaries or affiliated
                        entities that support our operations, subject to this
                        policy or equivalent protections.
                      </li>
                      <li>
                        <strong>Legal and safety:</strong> when required by law,
                        legal process, or government request, or to protect the
                        rights, safety, and security of users, PawByteLabs, or
                        others.
                      </li>
                      <li>
                        <strong>Business transfers:</strong> in connection with a
                        merger, acquisition, financing, reorganization, or sale
                        of assets, information may be transferred as part of that
                        transaction, subject to applicable law.
                      </li>
                      <li>
                        <strong>With your direction or consent:</strong> when
                        you ask us to share or agree to sharing.
                      </li>
                    </ul>
                    <p className="leading-relaxed">
                      We may share aggregated or de-identified information that
                      cannot reasonably identify you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    7. Retention
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We retain personal information only as long as necessary for
                    the purposes described in this policy, unless a longer period
                    is required or permitted by law (for example, tax,
                    accounting, or legal holds). Retention periods vary by data
                    category and system; analytics and logs may be retained in
                    aggregated or shortened form. When data is no longer needed,
                    we delete or de-identify it where feasible.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    8. Security
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We use reasonable administrative, technical, and physical
                    safeguards designed to protect personal information. No
                    method of transmission or storage is completely secure; we
                    cannot guarantee absolute security. If we are required to
                    notify you of a breach under applicable law, we will do so
                    in accordance with that law.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-sky-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    9. International transfers
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may process and store information in the United States and
                    other countries where we or our service providers operate.
                    Those countries may have different data protection laws than
                    your country. Where required, we implement appropriate
                    safeguards (such as standard contractual clauses) for
                    cross-border transfers.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    10. Your rights and choices
                  </h2>
                  <div className="space-y-3 text-gray-600">
                    <p className="leading-relaxed">
                      Depending on where you live, you may have rights regarding
                      your personal information, such as:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access to personal information we hold about you</li>
                      <li>Correction of inaccurate or incomplete information</li>
                      <li>
                        Deletion or restriction of certain processing, subject to
                        legal exceptions
                      </li>
                      <li>
                        Objection to certain processing based on legitimate
                        interests
                      </li>
                      <li>Data portability where applicable</li>
                      <li>
                        Withdrawal of consent where processing is based on consent
                      </li>
                      <li>
                        Opt-out of certain &quot;sale&quot; or &quot;sharing&quot;
                        for cross-context behavioral advertising under U.S. state
                        laws, where applicable (many opt-outs are provided through
                        device and industry tools for advertising)
                      </li>
                    </ul>
                    <p className="leading-relaxed">
                      To exercise these rights, contact{" "}
                      <a
                        className="text-blue-600 hover:underline"
                        href="mailto:feedback@pawbytelabs.com"
                      >
                        feedback@pawbytelabs.com
                      </a>
                      . You may also lodge a complaint with a supervisory
                      authority in your jurisdiction.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Account and data deletion:</strong> if we offer an
                      account-based feature, you may request deletion of your
                      account or associated personal data by emailing the
                      address above. We will verify your request where appropriate
                      and process it within a reasonable period,
                      except where we must retain information to comply with law
                      or resolve disputes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-rose-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    11. Children
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    The Services are not directed to children under 13 (or the
                    minimum age required in your region). We do not knowingly
                    collect personal information from children. If you believe a
                    child has provided us personal information, contact us and we
                    will take steps to delete it as required by law.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 text-sky-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    12. Changes to this Privacy Policy
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will
                    post the updated version on this page and update the
                    &quot;Last updated&quot; date. If changes are material, we
                    will provide additional notice as required by law (for
                    example, an in-app notice or email). Continued use of the
                    Services after the effective date constitutes acceptance of
                    the updated policy, except where your consent is required.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                13. How to contact us
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">
                  For privacy questions or requests, contact:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      className="text-blue-600 hover:underline"
                      href="mailto:feedback@pawbytelabs.com"
                    >
                      feedback@pawbytelabs.com
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong> Yuhuangmiao Branch, Beijing
                    Mentougou Datai Trading Company, China
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
