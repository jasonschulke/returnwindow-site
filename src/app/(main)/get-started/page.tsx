'use client'

import { useState } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

const EMAIL_ADDRESS = 'track@returnwindow.app'

function CopyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polyline points="20,6 9,17 4,12" />
    </svg>
  )
}

function StepNumber({ number }: { number: number }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white">
      {number}
    </div>
  )
}

export default function GetStarted() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              Get Started in 30 Seconds
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              No signup required. Just forward your purchase emails and we'll handle the rest.
            </p>
          </div>

          {/* Email Copy Box */}
          <div className="mt-12 rounded-2xl bg-gray-900 p-6 text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-gray-400">
              Forward purchase emails to
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <code className="text-2xl font-bold text-white sm:text-3xl">
                {EMAIL_ADDRESS}
              </code>
              <button
                onClick={copyEmail}
                className="rounded-lg bg-emerald-500 p-2 text-white transition-colors hover:bg-emerald-400"
                title="Copy email address"
              >
                {copied ? (
                  <CheckIcon className="h-6 w-6" />
                ) : (
                  <CopyIcon className="h-6 w-6" />
                )}
              </button>
            </div>
            {copied && (
              <p className="mt-2 text-sm text-emerald-400">Copied to clipboard!</p>
            )}
          </div>

          {/* Steps */}
          <div className="mt-16 space-y-12">
            <div className="flex gap-6">
              <StepNumber number={1} />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Forward a purchase confirmation email
                </h2>
                <p className="mt-2 text-gray-600">
                  When you buy something online, forward the order confirmation email to{' '}
                  <code className="rounded bg-gray-100 px-2 py-0.5 text-sm font-medium text-emerald-600">
                    {EMAIL_ADDRESS}
                  </code>
                </p>
                <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <p className="text-sm font-medium text-gray-700">Works with emails from:</p>
                  <p className="mt-2 text-sm text-gray-600">
                    Amazon, Target, Walmart, Best Buy, Apple, Nike, Nordstrom, Wayfair, Costco, REI, IKEA, Chewy, and 100+ more retailers
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <StepNumber number={2} />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  We'll track your return deadline
                </h2>
                <p className="mt-2 text-gray-600">
                  Our system automatically detects the retailer, extracts your order details, and calculates when your return window closes based on the store's policy.
                </p>
                <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-sm font-medium text-emerald-800">Privacy first:</p>
                  <p className="mt-1 text-sm text-emerald-700">
                    Your purchase details are encrypted. We can see you have an order, but we can't see what you bought.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <StepNumber number={3} />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Get reminded before it's too late
                </h2>
                <p className="mt-2 text-gray-600">
                  We'll send you email reminders at 7 days, 3 days, and 1 day before your return window closes. Never miss a deadline again.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                    7 days before
                  </span>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800">
                    3 days before
                  </span>
                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
                    1 day before
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <StepNumber number={4} />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Decide: Return it or Keep it
                </h2>
                <p className="mt-2 text-gray-600">
                  Each reminder includes one-click buttons to mark items as "Returning" or "Keeping". View all your purchases anytime on your personal dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-8 text-center text-white">
            <h2 className="text-2xl font-bold">Ready to try it?</h2>
            <p className="mt-2 opacity-90">
              Forward your next order confirmation to get started. It's free for your first 10 purchases.
            </p>
            <button
              onClick={copyEmail}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-emerald-600 transition-colors hover:bg-gray-100"
            >
              {copied ? (
                <>
                  <CheckIcon className="h-5 w-5" />
                  Copied!
                </>
              ) : (
                <>
                  <CopyIcon className="h-5 w-5" />
                  Copy Email Address
                </>
              )}
            </button>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-900">Common Questions</h2>
            <dl className="mt-8 space-y-8">
              <div>
                <dt className="font-semibold text-gray-900">Do I need to create an account?</dt>
                <dd className="mt-2 text-gray-600">
                  No! Your email address is your account. Just start forwarding emails and we'll set everything up automatically.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">How do I access my dashboard?</dt>
                <dd className="mt-2 text-gray-600">
                  After you forward your first email, we'll send you a welcome email with a link to your personal dashboard. You can also click the dashboard link in any reminder email.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">What if I forward the wrong email?</dt>
                <dd className="mt-2 text-gray-600">
                  No problem! We only process order confirmation emails. Other emails are automatically ignored.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Is my data secure?</dt>
                <dd className="mt-2 text-gray-600">
                  Yes. All purchase details are encrypted with AES-256-GCM before storage. We literally cannot see what you bought—only you can decrypt your data.
                </dd>
              </div>
            </dl>
          </div>

          {/* Links */}
          <div className="mt-16 flex justify-center gap-6 text-sm">
            <Link href="/pricing" className="text-emerald-600 hover:text-emerald-500">
              View Pricing
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
