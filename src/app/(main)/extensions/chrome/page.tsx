import { type Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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

function ChromeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z" />
    </svg>
  )
}

// Company logo component using Google Favicon API
function CompanyLogo({ domain, alt, size = 24 }: { domain: string; alt: string; size?: number }) {
  return (
    <Image
      src={`https://www.google.com/s2/favicons?sz=128&domain=${domain}`}
      alt={alt}
      width={size}
      height={size}
      className="rounded object-contain"
      unoptimized
    />
  )
}

// Feature mockup components
function GmailMockup() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1.5 text-sm text-gray-500">
          mail.google.com
        </div>
      </div>
      {/* Email content */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 p-2">
            <CompanyLogo domain="amazon.com" alt="Amazon" size={32} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-gray-900">Amazon.com</span>
              <span className="text-sm text-gray-400">2:34 PM</span>
            </div>
            <div className="mt-0.5 text-sm text-gray-600">Your order has shipped!</div>
            <div className="mt-4 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:shadow-emerald-500/40">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                Track Return
              </button>
              <span className="text-sm text-gray-500">30-day window</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function OrderPageMockup() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1.5 text-sm text-gray-500">
          target.com/checkout/confirmation
        </div>
      </div>
      {/* Page content */}
      <div className="p-6">
        <div className="mb-5 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="text-xl font-bold text-gray-900">Order Confirmed!</div>
          <div className="mt-1 text-sm text-gray-500">Order #TGT-84729</div>
        </div>
        {/* Return Window banner */}
        <div className="rounded-xl border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/25">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-emerald-800">Track with Return Window?</div>
              <div className="text-sm text-emerald-600">90-day return policy</div>
            </div>
            <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-600">
              Track
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function PopupMockup() {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-4">
        <div className="flex items-center gap-3 text-white">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" />
          </svg>
          <span className="text-lg font-bold">Return Window</span>
        </div>
      </div>
      {/* Stats */}
      <div className="border-b border-gray-100 p-4">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-lg bg-red-50 p-3">
            <div className="text-2xl font-bold text-red-500">2</div>
            <div className="text-xs font-medium text-red-600/70">Urgent</div>
          </div>
          <div className="rounded-lg bg-gray-50 p-3">
            <div className="text-2xl font-bold text-gray-900">5</div>
            <div className="text-xs font-medium text-gray-500">Active</div>
          </div>
          <div className="rounded-lg bg-emerald-50 p-3">
            <div className="text-2xl font-bold text-emerald-500">$89</div>
            <div className="text-xs font-medium text-emerald-600/70">Saved</div>
          </div>
        </div>
      </div>
      {/* Items */}
      <div className="p-4">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Upcoming</div>
        <div className="space-y-2">
          <div className="flex items-center gap-3 rounded-lg bg-red-50 p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm p-1">
              <CompanyLogo domain="nike.com" alt="Nike" size={20} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">Nike Air Max</div>
              <div className="text-xs text-gray-500">Amazon</div>
            </div>
            <span className="rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white">1 day</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-yellow-50 p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm p-1">
              <CompanyLogo domain="sony.com" alt="Sony" size={20} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">Sony Headphones</div>
              <div className="text-xs text-gray-500">Best Buy</div>
            </div>
            <span className="rounded-full bg-yellow-500 px-2.5 py-1 text-xs font-bold text-white">3 days</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm p-1">
              <CompanyLogo domain="target.com" alt="Target" size={20} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">Kitchen Blender</div>
              <div className="text-xs text-gray-500">Target</div>
            </div>
            <span className="rounded-full bg-gray-400 px-2.5 py-1 text-xs font-bold text-white">12 days</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReminderMockup() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1.5 text-sm text-gray-500">
          mail.google.com
        </div>
      </div>
      {/* Email content */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-100 to-teal-100">
            <svg className="h-6 w-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12,6 12,12 16,14" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-gray-900">Return Window</span>
              <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700">Reminder</span>
            </div>
            <div className="mt-0.5 text-sm text-gray-600">Return deadline approaching</div>
            <div className="mt-4 rounded-xl border border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm p-1.5">
                  <CompanyLogo domain="nike.com" alt="Nike" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Nike Air Max 90</div>
                  <div className="text-sm text-yellow-700">Return window closes in 3 days</div>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded-lg bg-emerald-500 py-2 text-sm font-semibold text-white">
                  View Details
                </button>
                <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1.5 text-sm text-gray-500">
          dashboard.returnwindow.app
        </div>
      </div>
      {/* Dashboard content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden w-48 border-r border-gray-100 bg-gray-50 p-4 sm:block">
          <div className="mb-6 flex items-center gap-2">
            <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12,6 12,12 16,14" />
            </svg>
            <span className="font-bold text-gray-900">Return Window</span>
          </div>
          <nav className="space-y-1">
            <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-emerald-100 px-3 py-2 text-sm font-medium text-emerald-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Purchases
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Returned
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Policies
            </div>
            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </div>
            </div>
          </nav>
        </div>
        {/* Main content */}
        <div className="flex-1 p-4 sm:p-6">
          {/* Stats */}
          <div className="mb-6 grid grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-xl bg-red-50 p-3 sm:p-4">
              <div className="text-xl font-bold text-red-600 sm:text-2xl">2</div>
              <div className="text-xs text-red-600/70 sm:text-sm">Urgent</div>
            </div>
            <div className="rounded-xl bg-gray-50 p-3 sm:p-4">
              <div className="text-xl font-bold text-gray-900 sm:text-2xl">7</div>
              <div className="text-xs text-gray-500 sm:text-sm">Active</div>
            </div>
            <div className="rounded-xl bg-emerald-50 p-3 sm:p-4">
              <div className="text-xl font-bold text-emerald-600 sm:text-2xl">$247</div>
              <div className="text-xs text-emerald-600/70 sm:text-sm">Saved</div>
            </div>
          </div>
          {/* Purchase list */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-3 sm:gap-4 sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm p-1.5 sm:h-12 sm:w-12 sm:p-2">
                <CompanyLogo domain="nike.com" alt="Nike" size={28} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Nike Air Max 90</div>
                <div className="text-xs text-gray-500 sm:text-sm">Amazon · $129.99</div>
              </div>
              <div className="text-right">
                <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white sm:px-3">1 day left</span>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-yellow-200 bg-yellow-50 p-3 sm:gap-4 sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm p-1.5 sm:h-12 sm:w-12 sm:p-2">
                <CompanyLogo domain="sony.com" alt="Sony" size={28} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Sony WH-1000XM5</div>
                <div className="text-xs text-gray-500 sm:text-sm">Best Buy · $349.99</div>
              </div>
              <div className="text-right">
                <span className="rounded-full bg-yellow-500 px-2 py-1 text-xs font-bold text-white sm:px-3">3 days left</span>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3 sm:gap-4 sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm p-1.5 sm:h-12 sm:w-12 sm:p-2">
                <CompanyLogo domain="target.com" alt="Target" size={28} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">KitchenAid Blender</div>
                <div className="text-xs text-gray-500 sm:text-sm">Target · $89.99</div>
              </div>
              <div className="text-right">
                <span className="rounded-full bg-gray-400 px-2 py-1 text-xs font-bold text-white sm:px-3">12 days left</span>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3 sm:gap-4 sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm p-1.5 sm:h-12 sm:w-12 sm:p-2">
                <CompanyLogo domain="dyson.com" alt="Dyson" size={28} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Dyson V15 Detect</div>
                <div className="text-xs text-gray-500 sm:text-sm">Dyson.com · $749.99</div>
              </div>
              <div className="text-right">
                <span className="rounded-full bg-gray-400 px-2 py-1 text-xs font-bold text-white sm:px-3">28 days left</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ChromeExtensionPage() {
  return (
    <>
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 p-1.5">
                      <CompanyLogo domain="amazon.com" alt="Amazon" size={28} />
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

      {/* Features Section with Mockups */}
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

          <div className="mx-auto mt-20 max-w-6xl space-y-32">
            {/* Gmail Integration */}
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="lg:pr-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Gmail Integration
                </div>
                <h3 className="text-3xl font-bold text-gray-900">One-click tracking from your inbox</h3>
                <p className="mt-4 text-lg text-gray-600">
                  When you open an order confirmation email in Gmail, you&apos;ll see a
                  &quot;Track Return&quot; button. One click forwards the email to Return Window
                  and starts tracking your return deadline automatically.
                </p>
                <ul className="mt-8 space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Works with Amazon, Target, Walmart, and more
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    No copy-pasting or manual data entry
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    We never read your emails
                  </li>
                </ul>
              </div>
              <div className="flex justify-center lg:justify-end">
                <GmailMockup />
              </div>
            </div>

            {/* Order Page Detection */}
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
                <OrderPageMockup />
              </div>
              <div className="order-1 lg:order-2 lg:pl-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Auto-Detection
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Track purchases as you make them</h3>
                <p className="mt-4 text-lg text-gray-600">
                  When you complete a purchase on a supported retailer, a subtle banner
                  appears offering to track your return deadline. Includes the store&apos;s
                  return policy so you know exactly how long you have.
                </p>
                <ul className="mt-8 space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Detects checkout confirmation pages
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Shows retailer-specific return policies
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Non-intrusive, easy to dismiss
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Dashboard */}
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="lg:pr-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Quick Dashboard
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Your deadlines at a glance</h3>
                <p className="mt-4 text-lg text-gray-600">
                  Click the Return Window icon in your toolbar to instantly see your
                  upcoming deadlines. Urgent items are highlighted so you know what
                  needs attention right now.
                </p>
                <ul className="mt-8 space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    See deadlines without opening a new tab
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Track money saved from returns
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Quick link to full dashboard
                  </li>
                </ul>
              </div>
              <div className="flex justify-center lg:justify-end">
                <PopupMockup />
              </div>
            </div>

            {/* Smart Reminders */}
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
                <ReminderMockup />
              </div>
              <div className="order-1 lg:order-2 lg:pl-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  Smart Reminders
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Never forget a return deadline</h3>
                <p className="mt-4 text-lg text-gray-600">
                  The extension works with Return Window&apos;s email reminder system.
                  Get notified at 7 days, 3 days, and 1 day before your return window
                  closes - even when Chrome isn&apos;t open.
                </p>
                <ul className="mt-8 space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100">
                      <svg className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Email reminders at key intervals
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100">
                      <svg className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Works even when browser is closed
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100">
                      <svg className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Never miss another return deadline
                  </li>
                </ul>
              </div>
            </div>

            {/* Full Dashboard */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-1.5 text-sm font-medium text-emerald-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Full Web Dashboard
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Manage everything from one place</h3>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                  The Chrome extension connects to your full Return Window dashboard. View all purchases,
                  track money saved, manage settings, and more from any browser or device.
                </p>
              </div>
              <div className="flex justify-center">
                <DashboardMockup />
              </div>
              <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-900">Track savings</div>
                  <div className="mt-1 text-sm text-gray-500">See how much you&apos;ve saved</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-900">Works anywhere</div>
                  <div className="mt-1 text-sm text-gray-500">Access from any device</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-900">Return history</div>
                  <div className="mt-1 text-sm text-gray-500">View past returns</div>
                </div>
              </div>
            </div>
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
      <section className="bg-emerald-600 py-16">
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
    </>
  )
}
