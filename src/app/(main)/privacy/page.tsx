import { type Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Return Window - how we collect, use, and protect your data.',
}

export default function Privacy() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: February 7, 2026
          </p>

          <div className="mt-12 space-y-12 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
              <p className="mt-4">
                Return Window ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our email-based return tracking service.
              </p>
              <p className="mt-4">
                We designed Return Window with privacy as a core principle. We only process the emails you explicitly forward to us, we never access your email inbox, and we will never sell your data or show you ads.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>

              <h3 className="mt-6 text-lg font-medium text-gray-900">Information You Provide</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Email Address:</strong> When you forward an order confirmation to track@returnwindow.app, we collect your email address. This serves as your account identifier.
                </li>
                <li>
                  <strong>Order Confirmation Emails:</strong> We process the content of order confirmation emails you forward to us to extract:
                  <ul className="mt-2 list-disc space-y-1 pl-6">
                    <li>Merchant/retailer name</li>
                    <li>Order date</li>
                    <li>Product names and descriptions</li>
                    <li>Product prices</li>
                    <li>Product images (URLs from the original email)</li>
                    <li>Order numbers (when available)</li>
                  </ul>
                </li>
              </ul>

              <h3 className="mt-6 text-lg font-medium text-gray-900">Information We Do NOT Collect</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>We never access your email inbox or any emails other than those you explicitly forward to us</li>
                <li>We do not collect payment information or credit card numbers</li>
                <li>We do not collect your physical address</li>
                <li>We do not track your browsing activity outside of our dashboard</li>
                <li>We do not use tracking pixels or third-party analytics that identify you</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">How We Use Your Information</h2>
              <p className="mt-4">We use the information we collect to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Calculate return deadlines based on each retailer's return policy</li>
                <li>Send you reminder emails before your return windows close</li>
                <li>Display your tracked purchases on your personal dashboard</li>
                <li>Improve our service and retailer detection accuracy</li>
                <li>Communicate with you about your account and our service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Data Storage and Security</h2>
              <p className="mt-4">
                We store your data securely using industry-standard encryption and security practices. Your order information is stored in encrypted databases with access limited to essential service operations.
              </p>
              <p className="mt-4">
                We retain your order data for up to 12 months after the return window closes, or until you request deletion. You can request deletion of your data at any time by emailing help@returnwindow.app.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Data Sharing</h2>
              <p className="mt-4">
                <strong>We do not sell your personal information.</strong> We do not share your data with advertisers. We do not show you ads.
              </p>
              <p className="mt-4">We may share your information only in the following limited circumstances:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Service Providers:</strong> We use trusted third-party services to operate Return Window (email delivery, database hosting). These providers are contractually obligated to protect your data and use it only for providing services to us.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required by law, court order, or government request.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If Return Window is acquired or merged, your information may be transferred as part of that transaction. We will notify you of any such change.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Your Rights and Choices</h2>
              <p className="mt-4">You have the following rights regarding your data:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Access:</strong> View all your tracked purchases on your dashboard at returnwindow.app/dashboard
                </li>
                <li>
                  <strong>Deletion:</strong> Remove individual items by clicking "I returned this" in reminder emails, or request complete account deletion by emailing help@returnwindow.app
                </li>
                <li>
                  <strong>Unsubscribe:</strong> Stop all reminder emails by replying "stop" to any reminder, or by emailing help@returnwindow.app
                </li>
                <li>
                  <strong>Data Export:</strong> Request a copy of your data by emailing help@returnwindow.app
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Cookies</h2>
              <p className="mt-4">
                Our website uses minimal, essential cookies to maintain your session when viewing your dashboard. We do not use tracking cookies, advertising cookies, or third-party analytics cookies that identify individual users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Children's Privacy</h2>
              <p className="mt-4">
                Return Window is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us at help@returnwindow.app.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Affiliate Relationships</h2>
              <p className="mt-4">
                Return Window may include affiliate links to retailers and third-party services. When you click on these links and make a purchase, we may earn a commission at no additional cost to you. This affiliate relationship does not affect how we handle your data or which retailers we support.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Service Accuracy Disclaimer</h2>
              <p className="mt-4">
                Return Window provides return deadline estimates on a best-effort basis. We make no guarantees regarding the accuracy of return policy information or deadline calculations. Users are solely responsible for confirming return policies directly with retailers. Return Window assumes no responsibility for missed return deadlines or any related financial loss.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Changes to This Policy</h2>
              <p className="mt-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by sending an email to the address associated with your account. Your continued use of Return Window after such notification constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
              <p className="mt-4">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
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
