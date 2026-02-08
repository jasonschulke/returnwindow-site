'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

// Founding member spots - update this as users sign up
const FOUNDING_SPOTS_TOTAL = 100
const FOUNDING_SPOTS_CLAIMED = 0 // TODO: Fetch from database

const plans = [
  {
    name: 'Free',
    featured: false,
    price: { monthly: '$0', annualMonthly: '$0', annualTotal: '$0' },
    description: 'Perfect for trying out Return Window.',
    limit: '10 purchases',
    limitNote: 'total',
    button: {
      label: 'Get Started',
      href: '/',
    },
    features: [
      'Track up to 10 purchases',
      'Email reminders before deadlines',
      'Personal dashboard',
      '100+ supported retailers',
    ],
  },
  {
    name: 'Core',
    featured: true,
    price: { monthly: '$1', annualMonthly: '$0.83', annualTotal: '$10' },
    description: 'Lock in founding member pricing forever.',
    limit: '50 purchases',
    limitNote: 'per month',
    isFoundingMember: true,
    button: {
      label: 'Claim Your Spot',
      href: '/',
    },
    features: [
      'Track up to 50 purchases/month',
      'Email reminders before deadlines',
      'Personal dashboard',
      '100+ supported retailers',
      'Priority support',
      'Founding member badge',
    ],
  },
  {
    name: 'Premium',
    featured: false,
    price: { monthly: '$10', annualMonthly: '$8.33', annualTotal: '$100' },
    description: 'For power shoppers and families.',
    limit: '500 purchases',
    limitNote: 'per month',
    button: {
      label: 'Start Premium',
      href: '/',
    },
    features: [
      'Track up to 500 purchases/month',
      'Email reminders before deadlines',
      'Personal dashboard',
      '100+ supported retailers',
      'Priority support',
      'Early access to new features',
    ],
  },
]

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Simple, honest pricing
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            No hidden fees. No ads. Just straightforward pricing that scales
            with your shopping habits.
          </p>
        </div>

        {/* Founding Member Banner */}
        <div className="mx-auto mt-8 max-w-xl">
          <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-center text-white shadow-lg">
            <p className="text-sm font-medium uppercase tracking-wide opacity-90">
              Founding Member Pricing
            </p>
            <p className="mt-1 text-2xl font-bold">
              {FOUNDING_SPOTS_TOTAL - FOUNDING_SPOTS_CLAIMED} of {FOUNDING_SPOTS_TOTAL} spots left at $1/month
            </p>
            <p className="mt-1 text-sm opacity-90">
              Lock in this price forever. Price increases after 100 members.
            </p>
          </div>
        </div>

        {/* Monthly/Annual Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="relative flex rounded-full bg-gray-100 p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={clsx(
                'relative rounded-full px-4 py-2 text-sm font-semibold transition-colors focus:outline-none',
                !annual
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={clsx(
                'relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus:outline-none',
                annual
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              )}
            >
              Annual
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <section
              key={plan.name}
              className={clsx(
                'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
                plan.featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white'
              )}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={clsx(
                    'text-lg font-semibold',
                    plan.featured ? 'text-white' : 'text-gray-900'
                  )}
                >
                  {plan.name}
                </h3>
                {plan.featured && (
                  <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                    Popular
                  </span>
                )}
              </div>

              <p
                className={clsx(
                  'mt-2 text-sm',
                  plan.featured ? 'text-gray-300' : 'text-gray-600'
                )}
              >
                {plan.description}
              </p>

              <div className="mt-5">
                <p
                  className={clsx(
                    'flex items-baseline text-4xl font-bold tracking-tight',
                    plan.featured ? 'text-white' : 'text-gray-900'
                  )}
                >
                  {annual ? plan.price.annualMonthly : plan.price.monthly}
                  {(annual ? plan.price.annualMonthly : plan.price.monthly) !== '$0' && (
                    <span
                      className={clsx(
                        'ml-1 text-sm font-normal',
                        plan.featured ? 'text-gray-400' : 'text-gray-500'
                      )}
                    >
                      /month
                    </span>
                  )}
                </p>
                {annual && plan.price.annualTotal !== '$0' && (
                  <p
                    className={clsx(
                      'mt-1 text-sm',
                      plan.featured ? 'text-gray-400' : 'text-gray-500'
                    )}
                  >
                    billed annually at {plan.price.annualTotal}
                  </p>
                )}
              </div>

              <div
                className={clsx(
                  'mt-6 rounded-lg p-4',
                  plan.featured ? 'bg-emerald-500/20' : 'bg-emerald-50'
                )}
              >
                <p
                  className={clsx(
                    'text-center text-lg font-semibold',
                    plan.featured ? 'text-emerald-400' : 'text-emerald-600'
                  )}
                >
                  {plan.limit}
                </p>
                <p
                  className={clsx(
                    'text-center text-sm',
                    plan.featured ? 'text-emerald-400/70' : 'text-emerald-600/70'
                  )}
                >
                  {plan.limitNote}
                </p>
              </div>

              <ul
                role="list"
                className={clsx(
                  'mt-6 flex-1 space-y-3 text-sm',
                  plan.featured ? 'text-gray-300' : 'text-gray-600'
                )}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon
                      className={clsx(
                        'h-6 w-6 flex-none',
                        plan.featured ? 'text-emerald-400' : 'text-emerald-600'
                      )}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={plan.button.href}
                color={plan.featured ? 'white' : 'emerald'}
                className="mt-6"
              >
                {plan.button.label}
              </Button>
            </section>
          ))}
        </div>
      </Container>
    </section>
  )
}
