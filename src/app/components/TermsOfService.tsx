import {
  FileText,
  CheckCircle,
  AlertCircle,
  Ban,
  Scale,
  Mail,
  Globe,
  Link2,
} from "lucide-react";
import { LegalPageHeader } from "@/app/components/LegalPageHeader";

interface TermsOfServiceProps {
  onBack: () => void;
}

export function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <LegalPageHeader onBack={onBack} />

      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your rights and obligations when using PawByteLabs services
          </p>
          <p className="text-sm text-blue-200 mt-4">
            Effective date: April 12, 2026 · Last updated: April 12, 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Agreement to these Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) govern your access to
                and use of the websites operated by PawByteLabs (such as{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="https://pawbytelabs.com"
                  rel="noopener noreferrer"
                >
                  pawbytelabs.com
                </a>
                ), our mobile applications distributed through app stores
                (including our wallpaper app for Android,{" "}
                <strong>com.pawbytelabs.wallpaper</strong>), and related online or
                offline features that link to these Terms (collectively, the
                &quot;Services&quot;). &quot;PawByteLabs,&quot; &quot;we,&quot;
                &quot;us,&quot; and &quot;our&quot; refer to PawByteLabs and its
                affiliates involved in providing the Services.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Please read these Terms carefully together with our{" "}
                <a className="text-blue-600 hover:underline" href="/privacy">
                  Privacy Policy
                </a>
                , which explains how we process personal information. By
                accessing or using the Services, you agree to be bound by these
                Terms. If you do not agree, you must not use the Services.
              </p>
              <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-sm text-blue-900">
                  <strong>Important:</strong> If you use the Services on behalf
                  of a company or other entity, you represent that you have
                  authority to bind that entity to these Terms, and
                  &quot;you&quot; includes that entity.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    1. The Services
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Sole offer.</strong> We offer to provide the
                    Services as they exist from time to time, until we modify or
                    discontinue them in accordance with these Terms.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>&quot;As is&quot; and &quot;as available.&quot;</strong>{" "}
                    Except where prohibited by law, the Services and all content,
                    software, and materials made available through them are
                    provided on an &quot;as is&quot; and &quot;as available&quot;
                    basis, without warranties of any kind, whether express or
                    implied, including implied warranties of merchantability,
                    fitness for a particular purpose, title, or non-infringement.
                    We do not warrant that the Services will be
                    uninterrupted, error-free, secure, or free of harmful
                    components, or that any information will be accurate or
                    complete.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Changes.</strong> We may change, suspend, or
                    discontinue any part of the Services, impose limits, or
                    restrict access at any time. Where required by applicable law,
                    we will provide notice in an appropriate manner (for example,
                    in-app notice or posting on our website).
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Features.</strong> The Services may include live,
                    parallax, video, 3D, or other wallpaper experiences; optional
                    lock-screen or overlay-style features; content browsing;
                    advertising; analytics; and other tools we may add or remove
                    over time. Specific features can vary by platform, device,
                    and app version.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    2. Eligibility and regional availability
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    You may not use the Services if you are under 13 years of
                    age (or the minimum digital consent age in your country, if
                    higher). If you are not old enough to enter a binding
                    contract where you live, you represent that your parent or
                    legal guardian has reviewed and agreed to these Terms on your
                    behalf.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The Services are operated from various locations and may not
                    be appropriate or available in all countries. You are
                    responsible for complying with local laws when you access the
                    Services from outside your home jurisdiction.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    3. Accounts (if offered)
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Some features may require you to create an account or
                    provide identifiers. If we offer accounts, you agree to:
                    provide accurate, current, and complete information; maintain
                    and update it; maintain the security of your credentials; use
                    only one account per person where required; and accept
                    responsibility for all activity under your account. You must
                    not transfer, sell, or share your account without our prior
                    consent. Notify us promptly at{" "}
                    <a
                      className="text-blue-600 hover:underline"
                      href="mailto:feedback@pawbytelabs.com"
                    >
                      feedback@pawbytelabs.com
                    </a>{" "}
                    if you suspect unauthorized access. We may suspend or
                    terminate accounts that violate these Terms or applicable law.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    4. Your content and license to us
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    You may provide or select content through the Services (for
                    example, images, videos, or other media from your device used
                    as wallpapers or previews). You retain ownership of your
                    content. You represent that you have all rights and
                    permissions needed for such content and that it does not
                    violate these Terms or any third-party rights.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    To the extent necessary to operate the features you choose,
                    you grant PawByteLabs a limited, worldwide, non-exclusive,
                    royalty-free license to host, process, store, display, and
                    transmit your content solely for providing, securing, and
                    improving the Services for you, consistent with our{" "}
                    <a className="text-blue-600 hover:underline" href="/privacy">
                      Privacy Policy
                    </a>
                    . Unless we expressly state otherwise (for example, a feature
                    that uploads content to our servers with your clear consent),
                    many processing steps occur on your device as described in
                    the Privacy Policy.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    You are solely responsible for your content and the
                    consequences of sharing or using it. We may remove or
                    restrict content where required by law or if we reasonably
                    believe it violates these Terms.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Ban className="w-6 h-6 text-rose-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    5. Acceptable use
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    You agree not to misuse the Services. Without limitation, you
                    must not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>
                      Violate applicable laws, regulations, or third-party rights (including intellectual property, privacy, and publicity).
                    </li>
                    <li>
                      Upload, generate, or use content that is unlawful,
                      harmful, fraudulent, harassing, defamatory, obscene,
                      hateful, discriminatory, or that exploits or harms minors.
                    </li>
                    <li>
                      Interfere with or disrupt the Services, servers, or
                      networks; circumvent security; or access non-public areas
                      without authorization.
                    </li>
                    <li>
                      Reverse engineer, decompile, or disassemble our software
                      except where applicable law expressly permits.
                    </li>
                    <li>
                      Use unauthorized third-party tools, bots, scrapers, or
                      automation to access or extract data from the Services in
                      bulk, except as allowed by applicable law.
                    </li>
                    <li>
                      Send spam, phishing, malware, or engage in commercial
                      solicitation without our written consent.
                    </li>
                    <li>
                      Misrepresent your identity or affiliation, or use the
                      Services to build a competing product through misuse of our
                      interfaces.
                    </li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    We may investigate violations and take action including
                    warnings, removing content, limiting features, suspending or
                    terminating access, and cooperating with law enforcement where
                    appropriate.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    6. Intellectual property
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    PawByteLabs and its licensors own all rights in the Services,
                    including software, branding, logos, text, graphics, and other
                    materials, subject to open-source licenses where applicable.
                    Except as expressly allowed in these Terms or by law, you may
                    not copy, modify, distribute, sell, lease, or create
                    derivative works from the Services or our branding.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    If you provide feedback or suggestions about the Services,
                    you grant us a perpetual, irrevocable, worldwide, royalty-free
                    license to use that feedback without obligation to you.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-violet-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    7. Copyright complaints
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you believe content available through the Services infringes
                    your copyright, you may send a notice to{" "}
                    <a
                      className="text-blue-600 hover:underline"
                      href="mailto:feedback@pawbytelabs.com"
                    >
                      feedback@pawbytelabs.com
                    </a>{" "}
                    including: (a) identification of the copyrighted work; (b)
                    identification of the material claimed to be infringing and
                    information reasonably sufficient to locate it; (c) your
                    contact information; (d) a statement of good faith belief that
                    the use is not authorized; and (e) a statement, under penalty
                    of perjury where applicable, that the information is accurate
                    and you are authorized to act on behalf of the owner. We may
                    remove or disable access to material in appropriate
                    circumstances. Misrepresentations in notices can carry legal
                    liability.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Link2 className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    8. Third parties, advertising, and linked sites
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    The Services may display advertisements and integrate
                    third-party SDKs, networks, or links (for example, ad
                    mediation, analytics, or app store billing). Those third
                    parties may collect information subject to their own terms
                    and privacy policies. Your dealings with advertisers or other
                    third parties are solely between you and them. We are not
                    responsible for third-party content, products, or services,
                    and a link does not imply endorsement.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-sky-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    9. Purchases and app-store terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you purchase digital items, subscriptions, or other paid
                    features through a platform such as Google Play, your
                    transaction is also governed by that platform&apos;s terms and
                    payment policies. Pricing, taxes, renewals, and cancellations
                    are handled according to the applicable store rules. To the
                    extent allowed by law, fees are non-refundable except as
                    required by the store or mandatory consumer law.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    10. Limitation of liability
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    To the maximum extent permitted by applicable law, PawByteLabs
                    and its officers, directors, employees, and affiliates will
                    not be liable for any indirect, incidental, special,
                    consequential, exemplary, or punitive damages, or any loss of
                    profits, data, goodwill, or other intangible losses, arising
                    out of or related to your use of or inability to use the
                    Services, even if we have been advised of the possibility of
                    such damages.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    To the extent permitted by law, our aggregate liability for
                    claims arising out of the Services is limited to the greater
                    of (a) the amount you paid us for the Services giving rise to
                    the claim in the twelve (12) months before the claim, or (b)
                    fifty U.S. dollars (USD $50). Nothing in these Terms excludes
                    or limits liability where it would be unlawful to do so
                    (including liability for gross negligence, willful
                    misconduct, or death or personal injury caused by negligence,
                    where applicable).
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-slate-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    11. Indemnity
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    To the extent permitted by law, you agree to defend, indemnify,
                    and hold harmless PawByteLabs and its affiliates from and
                    against any claims, liabilities, damages, losses, and expenses
                    (including reasonable attorneys&apos; fees) arising out of
                    your content, your use of the Services, your violation of
                    these Terms, or your violation of any third-party rights.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Ban className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    12. Suspension and termination
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may suspend or terminate your access to the Services at
                    any time, with or without notice, if we reasonably believe you
                    have violated these Terms, pose a security risk, or must do so
                    to comply with law. You may stop using the Services at any
                    time. Provisions that by their nature should survive
                    (including intellectual property, limitation of liability,
                    indemnity, and governing law) will survive termination.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    13. Governing law and disputes
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms are governed by the laws of the People&apos;s
                    Republic of China, without regard to conflict-of-law
                    principles, except that mandatory consumer protection laws of
                    the country where you habitually reside may apply to you and
                    may not be waived by contract.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Unless mandatory law requires otherwise, you and PawByteLabs
                    agree that the courts located in the jurisdiction where
                    PawByteLabs&apos;s principal place of business is situated
                    shall have non-exclusive jurisdiction over disputes arising
                    from these Terms or the Services. If you are a consumer in
                    the European Economic Area or the United Kingdom, you may
                    also benefit from mandatory rights to bring proceedings in
                    your country of residence.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Some jurisdictions do not allow certain limitations of
                    liability or choice of law; in those cases, the minimum
                    protections required by law apply.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    14. General
                  </h2>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>
                      <strong>Changes.</strong> We may modify these Terms. We will
                      post the updated Terms and revise the &quot;Last
                      updated&quot; date. If changes are material, we will provide
                      additional notice where required by law. Continued use
                      after the effective date constitutes acceptance unless
                      applicable law requires explicit consent.
                    </li>
                    <li>
                      <strong>Entire agreement.</strong> These Terms, together
                      with the Privacy Policy and any additional terms presented
                      for specific features, constitute the entire agreement
                      between you and PawByteLabs regarding the Services.
                    </li>
                    <li>
                      <strong>Assignment.</strong> You may not assign these Terms
                      without our consent. We may assign them in connection with
                      a merger, acquisition, or sale of assets, with notice where
                      required by law.
                    </li>
                    <li>
                      <strong>Severability.</strong> If any provision is held
                      invalid, the remaining provisions remain in effect.
                    </li>
                    <li>
                      <strong>No waiver.</strong> Failure to enforce a provision
                      is not a waiver of our rights.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                15. Contact us
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">
                  For questions about these Terms or the Services:
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
