import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Chrome Extension - Track Returns From Your Browser',
  description:
    'Install the Return Window Chrome extension to track purchase return deadlines without leaving your browser. One-click tracking from Gmail and order confirmation pages.',
  keywords: [
    'chrome extension return tracker',
    'return deadline chrome extension',
    'gmail return reminder',
    'track returns chrome',
    'return window browser extension',
  ],
  openGraph: {
    title: 'Return Window Chrome Extension',
    description:
      'Track purchase return deadlines without leaving your browser. One-click tracking from Gmail and order pages.',
    url: 'https://returnwindow.app/extensions/chrome',
  },
}

const features = [
  {
    name: 'Gmail Integration',
    description:
      'See a "Track Return" button when viewing order confirmation emails. One click to forward to Return Window.',
    icon: GmailIcon,
  },
  {
    name: 'Order Page Detection',
    description:
      'Automatically detects when you complete a purchase on Amazon, Target, Walmart, and more. Prompts you to track.',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Quick Dashboard',
    description:
      'Click the extension icon to see upcoming deadlines at a glance. Know what needs attention without opening a new tab.',
    icon: DashboardIcon,
  },
  {
    name: 'Smart Reminders',
    description:
      'Works with the Return Window reminder system. Get notified before deadlines via email, even when Chrome is closed.',
    icon: BellIcon,
  },
]

const steps = [
  {
    number: '1',
    title: 'Install the extension',
    description: 'Add Return Window to Chrome from the Web Store. Takes 2 seconds.',
  },
  {
    number: '2',
    title: 'Shop as usual',
    description:
      "When you complete a purchase, you'll see a prompt to track it. Or find order emails in Gmail with one-click tracking.",
  },
  {
    number: '3',
    title: 'Never miss a deadline',
    description:
      "We'll remind you before return windows close. Check the popup anytime to see what's coming up.",
  },
]

const faqs = [
  {
    question: 'Is the extension free?',
    answer:
      "Yes, the Chrome extension is completely free. It works with Return Window's free tier (10 purchases) or any paid plan.",
  },
  {
    question: 'Does the extension read my emails?',
    answer:
      "No. The extension only adds a button to Gmail's interface. It doesn't read or access your email content. You choose which emails to forward.",
  },
  {
    question: 'Which retailers are supported?',
    answer:
      'The extension detects order pages from Amazon, Target, Walmart, Best Buy, Costco, Apple, Nike, Nordstrom, Wayfair, and many more.',
  },
  {
    question: 'Do I need a Return Window account?',
    answer:
      "You can use the extension without an account - it will prompt you to sign up. For the best experience, create a free account first.",
  },
  {
    question: 'Will there be a Firefox extension?',
    answer:
      "We're considering it! If you'd like Firefox support, let us know at help@returnwindow.app.",
  },
]

function GmailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ShoppingBagIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DashboardIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3 9h18M9 21V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BellIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChromeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z" />
    </svg>
  )
}

export default function ChromeExtensionPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700">
                <ChromeIcon className="h-4 w-4" />
                Chrome Extension
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Track returns without leaving your browser
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              One-click tracking from Gmail and order confirmation pages. See
              upcoming deadlines right from your toolbar.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                href="https://chrome.google.com/webstore"
                target="_blank"
                color="emerald"
                className="w-full sm:w-auto"
              >
                <ChromeIcon className="mr-2 h-5 w-5" />
                Add to Chrome — It&apos;s Free
              </Button>
              <Link
                href="/#features"
                className="text-sm font-semibold text-gray-600 hover:text-emerald-600"
              >
                Learn more about Return Window →
              </Link>
            </div>
          </div>

          {/* Extension Preview */}
          <div className="mt-16 sm:mt-20">
            <div className="relative mx-auto max-w-4xl">
              {/* Browser mockup */}
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-4 flex-1 rounded-md bg-white px-4 py-1.5 text-sm text-gray-400">
                    mail.google.com
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1.5 text-xs font-medium text-white">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                    Return Window
                  </div>
                </div>
                {/* Email content mockup */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                      <span className="text-lg font-bold text-orange-600">A</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-gray-900">Amazon.com</span>
                        <span className="text-sm text-gray-500">ship-confirm@amazon.com</span>
                      </div>
                      <div className="mt-1 text-sm text-gray-900">Your Amazon order has shipped!</div>
                      <div className="mt-4 flex items-center gap-3">
                        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-sm font-medium text-white shadow-sm">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12,6 12,12 16,14" />
                          </svg>
                          Track Return
                        </button>
                        <span className="text-xs text-gray-500">30-day return window</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative gradient */}
              <div className="absolute -inset-x-20 -bottom-20 h-40 bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Everything you need, built into Chrome
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Track purchases the moment you make them. No extra tabs, no copy-pasting.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <feature.icon className="h-8 w-8 text-emerald-600" />
                <h3 className="mt-4 font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="border-t border-gray-200 bg-gray-50 py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              How it works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start tracking returns in under a minute.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-6 font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              href="https://chrome.google.com/webstore"
              target="_blank"
              color="emerald"
            >
              <ChromeIcon className="mr-2 h-5 w-5" />
              Install Now
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
          </div>

          <dl className="mx-auto mt-12 max-w-3xl space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <dt className="font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Have another question?{' '}
              <a
                href="mailto:help@returnwindow.app"
                className="font-medium text-emerald-600 hover:text-emerald-500"
              >
                Email us
              </a>
            </p>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-200 bg-emerald-600 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to stop missing return deadlines?
            </h2>
            <p className="mt-4 text-emerald-100">
              Join thousands of shoppers who track their purchases with Return Window.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                href="https://chrome.google.com/webstore"
                target="_blank"
                color="white"
              >
                <ChromeIcon className="mr-2 h-5 w-5" />
                Add to Chrome
              </Button>
              <Link
                href="/"
                className="text-sm font-semibold text-white hover:text-emerald-100"
              >
                Learn more about Return Window →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
