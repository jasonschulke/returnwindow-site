import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none" />
              <div className="ml-4">
                <p className="text-base font-semibold">Return Window</p>
                <p className="mt-1 text-sm">Never miss a return deadline.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <Link href="#features" className="text-sm text-gray-700 hover:text-emerald-600">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm text-gray-700 hover:text-emerald-600">
                How it Works
              </Link>
              <Link href="#pricing" className="text-sm text-gray-700 hover:text-emerald-600">
                Pricing
              </Link>
              <Link href="#faqs" className="text-sm text-gray-700 hover:text-emerald-600">
                FAQs
              </Link>
            </nav>
          </div>
          <div className="lg:w-80">
            <p className="text-sm font-semibold text-gray-900">
              Start tracking your returns
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Forward your order confirmations to{' '}
              <a href="mailto:track@returnwindow.app" className="text-emerald-600 hover:text-emerald-500">
                track@returnwindow.app
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row md:justify-between md:pt-6">
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-700">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-700">Terms</Link>
            <a href="mailto:help@returnwindow.app" className="hover:text-gray-700">Contact</a>
          </div>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; {new Date().getFullYear()} Return Window. All rights reserved.
          </p>
        </div>
        <div className="border-t border-gray-200 py-4">
          <p className="text-center text-xs text-gray-400">
            Some links on this site may be affiliate links. We may earn a commission if you make a purchase through these links, at no additional cost to you.
          </p>
        </div>
      </Container>
    </footer>
  )
}
