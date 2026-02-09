'use client'

import { Container } from '@/components/Container'

const features = [
  {
    name: 'Automatic Tracking',
    description:
      'Just forward your order confirmation emails. We automatically detect the merchant, extract order details, and calculate your return deadline.',
    icon: EmailIcon,
  },
  {
    name: 'Dashboard & Timeline',
    description:
      'See all your purchases in one place with a visual timeline. Track deadlines, filter by status, and never lose sight of what needs attention.',
    icon: DashboardIcon,
  },
  {
    name: 'Timely Reminders',
    description:
      'Get email reminders before your return window closes. Never miss a deadline because you forgot or got busy with life.',
    icon: BellIcon,
  },
  {
    name: '100+ Retailers',
    description:
      'Works with Amazon, Target, Walmart, Best Buy, Wayfair, Costco, and dozens more. We know each store\'s return policy.',
    icon: StoreIcon,
  },
]

function DashboardIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x={4} y={4} width={24} height={24} rx={2} stroke="currentColor" strokeWidth={2} />
      <path d="M4 12H28" stroke="currentColor" strokeWidth={2} />
      <rect x={8} y={16} width={6} height={4} rx={1} fill="currentColor" />
      <rect x={8} y={22} width={10} height={4} rx={1} fill="currentColor" fillOpacity={0.5} />
      <rect x={18} y={16} width={6} height={4} rx={1} fill="currentColor" fillOpacity={0.3} />
    </svg>
  )
}

function EmailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M4 10L16 18L28 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BellIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M16 4C11.5817 4 8 7.58172 8 12V18L6 22H26L24 18V12C24 7.58172 20.4183 4 16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 22V24C12 26.2091 13.7909 28 16 28C18.2091 28 20 26.2091 20 24V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StoreIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M4 12L8 4H24L28 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12V28H28V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12C4 14.2091 5.79086 16 8 16C10.2091 16 12 14.2091 12 12" stroke="currentColor" strokeWidth="2" />
      <path d="M12 12C12 14.2091 13.7909 16 16 16C18.2091 16 20 14.2091 20 12" stroke="currentColor" strokeWidth="2" />
      <path d="M20 12C20 14.2091 21.7909 16 24 16C26.2091 16 28 14.2091 28 12" stroke="currentColor" strokeWidth="2" />
      <rect x="12" y="20" width="8" height="8" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for tracking return deadlines"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Return Window is an email-based service. No app to download, no password to remember.
            Just forward your receipts and we handle the rest.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="relative rounded-2xl bg-gray-800 p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* How it works step-by-step */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              {/* Connecting line - centered on 64px circles (center at 32px = left-8) */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-gray-700" />

              {/* Steps */}
              <div className="space-y-12">
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full bg-emerald-500 text-2xl font-bold text-white">
                    1
                  </div>
                  <div className="pt-3">
                    <h4 className="text-lg font-semibold text-white">Make a purchase</h4>
                    <p className="mt-2 text-gray-400">
                      Shop at any of the 100+ supported retailers. You'll receive an order confirmation email as usual.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full bg-emerald-500 text-2xl font-bold text-white">
                    2
                  </div>
                  <div className="pt-3">
                    <h4 className="text-lg font-semibold text-white">Forward the email</h4>
                    <p className="mt-2 text-gray-400">
                      Forward your order confirmation to <span className="text-emerald-400">track@returnwindow.app</span>. That's it!
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full bg-emerald-500 text-2xl font-bold text-white">
                    3
                  </div>
                  <div className="pt-3">
                    <h4 className="text-lg font-semibold text-white">Track in your dashboard</h4>
                    <p className="mt-2 text-gray-400">
                      See all your purchases with a deadline timeline. Filter by status, check which items need attention soon.
                    </p>
                    {/* Mini purchase card preview */}
                    <div className="mt-4 max-w-xs">
                      <div className="rounded-lg border-l-4 border-amber-500 bg-gray-800/50 p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-white">Amazon</span>
                          <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-400">5 days left</span>
                        </div>
                        <div className="mt-1 text-xs text-gray-500">2 items · $89.99</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full bg-emerald-500 text-2xl font-bold text-white">
                    4
                  </div>
                  <div className="pt-3">
                    <h4 className="text-lg font-semibold text-white">Get reminded & decide</h4>
                    <p className="mt-2 text-gray-400">
                      We'll email you before your return window closes. Keep items you love, return the rest stress-free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
