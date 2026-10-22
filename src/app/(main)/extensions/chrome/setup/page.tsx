'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'

const TRACK_EMAIL = 'track@returnwindow.app'

// Filter criteria for order confirmation emails
// Comprehensive list covering 50+ major retailers
const FILTER_CRITERIA = {
  // Major retailers - email addresses that send order confirmations
  from: [
    // Mega retailers
    'ship-confirm@amazon.com',
    'auto-confirm@amazon.com',
    'orders@target.com',
    'help@walmart.com',
    'orders@costco.com',
    // Electronics
    'BestBuyInfo@emailinfo.bestbuy.com',
    'no_reply@email.apple.com',
    'order-update@amazon.com',
    'noreply@newegg.com',
    'orders@bhphoto.com',
    // Fashion & Apparel
    'Nike@official.nike.com',
    'nordstrom@e.nordstrom.com',
    'noreply@oldnavy.com',
    'noreply@gap.com',
    'noreply@bananarepublic.com',
    'email@s.zappos.com',
    'orders@macys.com',
    'noreply@kohls.com',
    'hello@lululemon.com',
    'info@e.underarmour.com',
    'noreply@adidas.com',
    'orders@footlocker.com',
    'noreply@jcrew.com',
    'noreply@hm.com',
    'noreply@zara.com',
    'noreply@uniqlo.com',
    'noreply@asos.com',
    'noreply@urbanoutfitters.com',
    'noreply@anthropologie.com',
    'info@freepeople.com',
    // Home & Furniture
    'orders@wayfair.com',
    'noreply@westelm.com',
    'noreply@potterybarn.com',
    'noreply@crateandbarrel.com',
    'noreply@cb2.com',
    'noreply@ikea.com',
    'noreply@homedepot.com',
    'noreply@lowes.com',
    'noreply@bedbathandbeyond.com',
    'noreply@williams-sonoma.com',
    // Pet & Outdoor
    'noreply@chewy.com',
    'noreply@petco.com',
    'noreply@petsmart.com',
    'noreply@rei.com',
    'noreply@backcountry.com',
    'noreply@dickssportinggoods.com',
    // Beauty & Health
    'noreply@sephora.com',
    'noreply@ulta.com',
    'noreply@bathandbodyworks.com',
    // Specialty
    'orders@etsy.com',
    'noreply@ebay.com',
    'noreply@gamestop.com',
    'noreply@booksamillion.com',
  ].join(' OR '),

  // Keywords that appear in order confirmation subjects/body
  // Avoid special characters like # & * that Gmail warns about
  hasTheWords: '"order confirmation" OR "order confirmed" OR "thanks for your order" OR "thank you for your order" OR "your order has been" OR "order receipt" OR "purchase confirmation" OR "order number" OR "shipping confirmation" OR "has shipped"',

  // Subject line patterns (alternative to hasTheWords)
  subject: '"order confirmation" OR "order confirmed" OR "thanks for your order" OR "your order has shipped" OR "shipping confirmation" OR "your order is on the way"',
}

// Build Gmail filter URL with pre-populated fields
function buildGmailFilterUrl() {
  const params = new URLSearchParams()
  params.set('from', FILTER_CRITERIA.from)
  params.set('has', FILTER_CRITERIA.hasTheWords)
  return `https://mail.google.com/mail/u/0/#create-filter/${params.toString()}`
}

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

function StepNumber({ number, active = false }: { number: number; active?: boolean }) {
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold ${
        active ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-600'
      }`}
    >
      {number}
    </div>
  )
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3">
      <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </div>
      <div className="flex items-start gap-2">
        <code className="flex-1 break-all rounded bg-white px-3 py-2 text-sm text-gray-800 border border-gray-200">
          {text}
        </code>
        <button
          onClick={handleCopy}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white transition-colors hover:bg-emerald-600"
          title="Copy"
        >
          {copied ? (
            <CheckIcon className="h-4 w-4" />
          ) : (
            <CopyIcon className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  )
}

export default function GmailSetup() {
  const [currentStep, setCurrentStep] = useState(1)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(TRACK_EMAIL)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section className="py-12 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <Link
              href="/extensions/chrome"
              className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6" />
              </svg>
              Back to Chrome Extension
            </Link>
            <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              Set Up Gmail Auto-Forwarding
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Automatically forward order confirmation emails to Return Window. Takes about 5 minutes.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="mb-12 flex items-center justify-center gap-2">
            {[1, 2, 3, 4].map((step) => (
              <button
                key={step}
                onClick={() => setCurrentStep(step)}
                className={`h-2 w-8 rounded-full transition-colors ${
                  step === currentStep
                    ? 'bg-emerald-500'
                    : step < currentStep
                      ? 'bg-emerald-300'
                      : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {/* Step 1: Enable forwarding */}
            <div
              className={`rounded-2xl border-2 p-6 transition-colors ${
                currentStep === 1 ? 'border-emerald-500 bg-emerald-50/50' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex gap-4">
                <StepNumber number={1} active={currentStep === 1} />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Add Return Window as a forwarding address
                  </h2>
                  <div className="mt-4 space-y-4 text-gray-600">
                    <p>
                      First, we need to verify that you can forward emails to Return Window:
                    </p>
                    <ol className="list-inside list-decimal space-y-3 pl-2">
                      <li>
                        Open{' '}
                        <a
                          href="https://mail.google.com/mail/u/0/#settings/fwdandpop"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-emerald-600 hover:text-emerald-500"
                        >
                          Gmail Settings → Forwarding
                        </a>
                      </li>
                      <li>Click <strong>"Add a forwarding address"</strong></li>
                      <li>
                        Enter the Return Window email address:
                        <div className="mt-2 flex items-center gap-3">
                          <code className="rounded-lg bg-gray-900 px-4 py-2 text-lg font-semibold text-white">
                            {TRACK_EMAIL}
                          </code>
                          <button
                            onClick={copyEmail}
                            className="flex items-center gap-1 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
                          >
                            {copiedEmail ? (
                              <>
                                <CheckIcon className="h-4 w-4" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <CopyIcon className="h-4 w-4" />
                                Copy
                              </>
                            )}
                          </button>
                        </div>
                      </li>
                      <li>Click <strong>"Next"</strong> and then <strong>"Proceed"</strong></li>
                      <li>
                        <strong>Open the Return Window extension</strong> - you'll see a "Confirm Forwarding" button
                      </li>
                      <li>
                        Click the button to confirm Gmail forwarding, then continue to Step 2
                      </li>
                    </ol>

                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                      <p className="text-sm text-emerald-800">
                        <strong>How it works:</strong> Gmail sends a verification email to Return Window.
                        The confirmation link will appear in the Chrome extension popup so you can complete the setup.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentStep(2)}
                    className="mt-6 rounded-lg bg-emerald-500 px-6 py-2 font-medium text-white transition-colors hover:bg-emerald-600"
                  >
                    Continue to Step 2
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2: Create a filter */}
            <div
              className={`rounded-2xl border-2 p-6 transition-colors ${
                currentStep === 2 ? 'border-emerald-500 bg-emerald-50/50' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex gap-4">
                <StepNumber number={2} active={currentStep === 2} />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Create a filter for order emails
                  </h2>
                  <div className="mt-4 space-y-4 text-gray-600">
                    <p>
                      Click this button to open Gmail with the filter pre-filled:
                    </p>

                    <a
                      href={buildGmailFilterUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      Open Gmail & Create Filter
                    </a>

                    <p className="text-sm text-gray-500">
                      This will open Gmail with 50+ retailer addresses and order keywords pre-filled.
                    </p>

                    <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                      <p className="text-sm text-blue-800">
                        <strong>How this works:</strong> The filter catches emails from known retailers
                        that contain order-related keywords like "order confirmation" or "your order".
                        This ensures only order confirmations are forwarded, not marketing emails.
                      </p>
                    </div>

                    <details className="rounded-lg border border-gray-200 bg-gray-50">
                      <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-gray-700">
                        Or copy the filter values manually
                      </summary>
                      <div className="border-t border-gray-200 px-4 py-3">
                        <CopyButton text={FILTER_CRITERIA.from} label="From" />
                        <CopyButton text={FILTER_CRITERIA.hasTheWords} label="Has the words" />
                      </div>
                    </details>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="rounded-lg bg-emerald-500 px-6 py-2 font-medium text-white transition-colors hover:bg-emerald-600"
                    >
                      Continue to Step 3
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Set filter action */}
            <div
              className={`rounded-2xl border-2 p-6 transition-colors ${
                currentStep === 3 ? 'border-emerald-500 bg-emerald-50/50' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex gap-4">
                <StepNumber number={3} active={currentStep === 3} />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Set filter action to forward
                  </h2>
                  <div className="mt-4 space-y-4 text-gray-600">
                    <p>
                      On the filter action screen:
                    </p>
                    <ol className="list-inside list-decimal space-y-3 pl-2">
                      <li>
                        Check <strong>"Forward it to:"</strong> and select{' '}
                        <code className="rounded bg-gray-100 px-2 py-0.5 text-sm font-medium text-emerald-600">
                          {TRACK_EMAIL}
                        </code>
                      </li>
                      <li>
                        <strong>(Optional)</strong> Check <strong>"Also apply filter to matching conversations"</strong>{' '}
                        to forward existing order emails
                      </li>
                      <li>Click <strong>"Create filter"</strong></li>
                    </ol>

                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                      <p className="text-sm text-emerald-800">
                        <strong>Tip:</strong> Keep your order emails in Gmail too! The filter forwards a copy,
                        so you'll still have the originals.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setCurrentStep(4)}
                      className="rounded-lg bg-emerald-500 px-6 py-2 font-medium text-white transition-colors hover:bg-emerald-600"
                    >
                      Continue to Step 4
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Test & finish */}
            <div
              className={`rounded-2xl border-2 p-6 transition-colors ${
                currentStep === 4 ? 'border-emerald-500 bg-emerald-50/50' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex gap-4">
                <StepNumber number={4} active={currentStep === 4} />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Test & finish setup
                  </h2>
                  <div className="mt-4 space-y-4 text-gray-600">
                    <p>
                      To verify everything is working:
                    </p>
                    <ol className="list-inside list-decimal space-y-3 pl-2">
                      <li>
                        Find an existing order confirmation email in Gmail
                      </li>
                      <li>
                        Forward it manually to{' '}
                        <code className="rounded bg-gray-100 px-2 py-0.5 text-sm font-medium text-emerald-600">
                          {TRACK_EMAIL}
                        </code>
                      </li>
                      <li>
                        Check your inbox for a welcome email from Return Window with your dashboard link
                      </li>
                      <li>
                        Click the link to see your tracked purchase!
                      </li>
                    </ol>

                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                      <p className="text-sm text-emerald-800">
                        <strong>That's it!</strong> Future order confirmation emails will be automatically forwarded.
                        Your dashboard link in the welcome email will also sync with this Chrome extension.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <a
                      href="https://dashboard.returnwindow.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-emerald-500 px-6 py-2 font-medium text-white transition-colors hover:bg-emerald-600"
                    >
                      Open Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add more retailers section */}
          <div className="mt-12 rounded-2xl bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Want to track more retailers?
            </h3>
            <p className="mt-2 text-gray-600">
              The filter above covers 50+ major retailers. To add more:
            </p>
            <ol className="mt-3 list-inside list-decimal space-y-2 text-gray-600">
              <li>Go to Gmail Settings → Filters and blocked addresses</li>
              <li>Find your Return Window filter and click "edit"</li>
              <li>Add more email addresses to the "From" field, separated by <code className="rounded bg-gray-200 px-1 text-sm">OR</code></li>
            </ol>
            <p className="mt-4 text-sm text-gray-500">
              <strong>Tip:</strong> To find a retailer's order email, look at a past order confirmation
              and check the "From" address. You can also forward individual emails manually to{' '}
              <code className="text-emerald-600">{TRACK_EMAIL}</code> anytime.
            </p>
          </div>

          {/* Help section */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Having trouble?{' '}
              <a
                href="mailto:help@returnwindow.app"
                className="font-medium text-emerald-600 hover:text-emerald-500"
              >
                Contact us
              </a>{' '}
              and we'll help you get set up.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
