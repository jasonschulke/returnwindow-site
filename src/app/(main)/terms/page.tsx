import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Return Window - the rules and guidelines for using our service.',
}

export default function Terms() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: February 7, 2026
          </p>

          <div className="mt-12 space-y-12 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">Agreement to Terms</h2>
              <p className="mt-4">
                By forwarding emails to track@returnwindow.app or accessing the Return Window website and dashboard, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our service.
              </p>
              <p className="mt-4">
                Return Window ("we," "our," or "us") reserves the right to modify these Terms at any time. We will notify you of material changes by email. Your continued use of the service after such notification constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Description of Service</h2>
              <p className="mt-4">
                Return Window is an email-based service that helps you track purchase return deadlines. The service works as follows:
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-6">
                <li>You forward order confirmation emails to track@returnwindow.app</li>
                <li>We automatically detect the retailer and extract order information</li>
                <li>We calculate your return deadline based on the retailer's return policy</li>
                <li>We send you reminder emails before your return window closes</li>
                <li>You can view all tracked purchases on your personal dashboard</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Account and Email Identity</h2>
              <p className="mt-4">
                Your email address serves as your account identifier. No password is required. When you forward an email to us, we associate that order with your sender email address.
              </p>
              <p className="mt-4">
                You are responsible for:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Maintaining the security of your email account</li>
                <li>All activity that occurs through emails sent from your address</li>
                <li>Ensuring you have the right to forward emails you send to us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Acceptable Use</h2>
              <p className="mt-4">You agree not to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Forward emails that you do not have permission to share</li>
                <li>Use the service for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service</li>
                <li>Send spam or bulk unsolicited emails to our service</li>
                <li>Use the service to track purchases made by others without their consent</li>
                <li>Resell or commercially exploit the service without our permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Service Plans and Pricing</h2>
              <p className="mt-4">
                Return Window offers the following service tiers:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li><strong>Free:</strong> Track up to 10 purchases total</li>
                <li><strong>Core:</strong> Track up to 50 purchases per month ($1/month or $10/year)</li>
                <li><strong>Premium:</strong> Track up to 500 purchases per month ($10/month or $100/year)</li>
              </ul>
              <p className="mt-4">
                Pricing is subject to change. We will notify existing subscribers of any price changes at least 30 days in advance.
              </p>
              <p className="mt-4">
                For paid plans, payments are processed securely through our payment provider. You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Best Effort Service & No Guarantee</h2>
              <p className="mt-4">
                <strong>Important:</strong> Return Window provides return deadline estimates on a best-effort basis using publicly available return policy information. <strong>We make no guarantees regarding the accuracy, completeness, or timeliness of our return deadline calculations or reminder emails.</strong>
              </p>
              <p className="mt-4">
                While we strive for accuracy, return policies:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>May change without notice by retailers</li>
                <li>May vary by product category, purchase method, or membership status</li>
                <li>May have exceptions we are not aware of</li>
                <li>May differ from our estimates for various reasons</li>
              </ul>
              <p className="mt-4">
                <strong>Return Window assumes no responsibility for missed return deadlines, incorrect return policy information, undelivered reminder emails, or any financial loss resulting from use of this service.</strong> You are solely responsible for confirming return policies directly with retailers before attempting a return. Return Window is a convenience reminder service, not a guarantee of return eligibility or acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Affiliate Relationships</h2>
              <p className="mt-4">
                Return Window may include affiliate links to retailers and other third-party services. When you click on these links and make a purchase, we may earn a commission at no additional cost to you.
              </p>
              <p className="mt-4">
                This affiliate relationship does not influence which retailers we support or how we calculate return deadlines. We treat all retailers equally regardless of any affiliate relationship.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Disclaimer of Warranties</h2>
              <p className="mt-4">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="mt-4">
                We do not warrant that:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>The service will be uninterrupted or error-free</li>
                <li>Return deadline calculations will be accurate for all purchases</li>
                <li>All retailers will be correctly identified</li>
                <li>Reminder emails will always be delivered</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Limitation of Liability</h2>
              <p className="mt-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, RETURN WINDOW SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Your use or inability to use the service</li>
                <li>Inaccurate return deadline information</li>
                <li>Missed return windows</li>
                <li>Failure to receive reminder emails</li>
                <li>Unauthorized access to your data</li>
                <li>Any other matter relating to the service</li>
              </ul>
              <p className="mt-4">
                Our total liability for any claims arising from or relating to these Terms or the service shall not exceed the amount you paid us in the 12 months preceding the claim, or $100, whichever is greater.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Indemnification</h2>
              <p className="mt-4">
                You agree to indemnify and hold harmless Return Window, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from your use of the service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Termination</h2>
              <p className="mt-4">
                You may stop using the service at any time by:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Simply not forwarding any more emails to us</li>
                <li>Replying "stop" to any reminder email to unsubscribe</li>
                <li>Requesting account deletion by emailing help@returnwindow.app</li>
              </ul>
              <p className="mt-4">
                We may suspend or terminate your access to the service at any time, with or without cause, with or without notice. Reasons for termination may include violation of these Terms, abusive behavior, or extended inactivity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Intellectual Property</h2>
              <p className="mt-4">
                The Return Window name, logo, website, and service are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on our service without our express written permission.
              </p>
              <p className="mt-4">
                You retain ownership of the content in emails you forward to us. By forwarding emails, you grant us a limited license to process that content solely for the purpose of providing the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Privacy</h2>
              <p className="mt-4">
                Your privacy is important to us. Please review our{' '}
                <Link href="/privacy" className="text-emerald-600 hover:text-emerald-500">
                  Privacy Policy
                </Link>
                , which explains how we collect, use, and protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Governing Law</h2>
              <p className="mt-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Dispute Resolution</h2>
              <p className="mt-4">
                Any disputes arising from these Terms or the service shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Severability</h2>
              <p className="mt-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
              <p className="mt-4">
                If you have questions about these Terms, please contact us at:
              </p>
              <p className="mt-4">
                <a href="mailto:help@returnwindow.app" className="text-emerald-600 hover:text-emerald-500">
                  help@returnwindow.app
                </a>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  )
}
