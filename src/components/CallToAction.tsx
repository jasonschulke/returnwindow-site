'use client'

import { useState } from 'react'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to your email service
    setStatus('success')
  }

  return (
    <section
      id="get-started"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#10B981" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Start tracking returns today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Just forward your next order confirmation to{' '}
            <span className="font-semibold text-emerald-400">track@returnwindow.app</span>
            {' '}and we'll remind you before the return window closes.
          </p>

          {status === 'success' ? (
            <div className="mt-8 rounded-lg bg-emerald-500/20 p-4 text-emerald-300">
              <p className="font-medium">You're all set!</p>
              <p className="mt-1 text-sm">
                Forward your receipts to track@returnwindow.app to start tracking.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-400 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Get Started Free
                </button>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                No password required. No app to download. Just email.
              </p>
            </form>
          )}

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-700 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-sm text-gray-400">Retailers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">0</div>
              <div className="text-sm text-gray-400">Ads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">0</div>
              <div className="text-sm text-gray-400">Apps to install</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
