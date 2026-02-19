import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Refund Policy for Return Window - our commitment to fair refunds and cancellations.',
}

export default function Refund() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            Refund Policy
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: February 19, 2026
          </p>

          <div className="mt-12 space-y-12 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">Our Commitment</h2>
              <p className="mt-4">
                We want you to be satisfied with Return Window. If our service isn't meeting your needs, we offer fair and straightforward refund options.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Free Tier</h2>
              <p className="mt-4">
                The Free tier has no cost, so no refund is applicable. You can use it indefinitely within the stated limits (10 purchases total).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Monthly Subscriptions</h2>
              <p className="mt-4">
                For monthly subscriptions (Core at $1/month or Premium at $10/month):
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>You may cancel at any time from your account settings</li>
                <li>Cancellation takes effect at the end of your current billing period</li>
                <li>You will retain access to paid features until your billing period ends</li>
                <li>We do not offer partial refunds for unused portions of a monthly billing period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Annual Subscriptions</h2>
              <p className="mt-4">
                For annual subscriptions (Core at $10/year or Premium at $100/year):
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li><strong>Within 14 days of purchase:</strong> Full refund available if you have tracked fewer than 5 purchases during that period</li>
                <li><strong>After 14 days:</strong> No refunds, but you may cancel to prevent future renewals</li>
                <li>Cancellation takes effect at the end of your annual billing period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">How to Request a Refund</h2>
              <p className="mt-4">
                To request a refund for an eligible annual subscription:
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-6">
                <li>Email us at <a href="mailto:help@returnwindow.app" className="text-emerald-600 hover:text-emerald-500">help@returnwindow.app</a></li>
                <li>Include the email address associated with your account</li>
                <li>Briefly explain why you'd like a refund</li>
              </ol>
              <p className="mt-4">
                We aim to process all refund requests within 5-7 business days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Refund Method</h2>
              <p className="mt-4">
                Refunds are issued to the original payment method used for the purchase. Depending on your bank or payment provider, it may take an additional 5-10 business days for the refund to appear on your statement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Exceptions</h2>
              <p className="mt-4">
                We reserve the right to deny refund requests in cases of:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Abuse of the refund policy (e.g., repeated subscribe-refund cycles)</li>
                <li>Violation of our <Link href="/terms" className="text-emerald-600 hover:text-emerald-500">Terms of Service</Link></li>
                <li>Fraudulent activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">How to Cancel</h2>
              <p className="mt-4">
                You can cancel your subscription at any time:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Through your dashboard settings</li>
                <li>By emailing <a href="mailto:help@returnwindow.app" className="text-emerald-600 hover:text-emerald-500">help@returnwindow.app</a></li>
              </ul>
              <p className="mt-4">
                Cancellation stops future billing but does not automatically trigger a refund. If you believe you are eligible for a refund, please contact us separately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
              <p className="mt-4">
                If you have questions about our refund policy or need assistance, please contact us at:
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
