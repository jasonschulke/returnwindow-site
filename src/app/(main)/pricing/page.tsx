import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, affordable pricing for Return Window. Track your purchases and never miss a return deadline.',
}

const plans = [
  {
    name: 'Free',
    description: 'Perfect for trying out Return Window.',
    price: { monthly: '$0', annually: '$0' },
    limit: '10 purchases',
    limitNote: 'total',
    features: [
      'Track up to 10 purchases',
      'Email reminders before deadlines',
      'Personal dashboard',
      '100+ supported retailers',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Core',
    description: 'For regular online shoppers.',
    price: { monthly: '$1', annually: '$10' },
    limit: '50 purchases',
    limitNote: 'per month',
    features: [
      'Track up to 50 purchases/month',
      'Email reminders before deadlines',
      'Personal dashboard',
      '100+ supported retailers',
      'Priority support',
    ],
    cta: 'Start Core',
    featured: true,
  },
  {
    name: 'Premium',
    description: 'For power shoppers and families.',
    price: { monthly: '$10', annually: '$100' },
    limit: '500 purchases',
    limitNote: 'per month',
    features: [
      'Track up to 500 purchases/month',
      'Email reminders before deadlines',
      'Personal dashboard',
      '100+ supported retailers',
      'Priority support',
      'Early access to new features',
    ],
    cta: 'Start Premium',
    featured: false,
  },
]

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 14.25l-.557.502a.75.75 0 0 0 1.15-.043L11 14.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl"
          >
            Simple, honest pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            No hidden fees. No ads. Just straightforward pricing that scales
            with your shopping habits.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-gray-900 text-white ring-1 ring-gray-900'
                  : 'bg-white ring-1 ring-gray-200'
              }`}
            >
              <h2
                className={`text-lg font-semibold ${
                  plan.featured ? 'text-white' : 'text-gray-900'
                }`}
              >
                {plan.name}
              </h2>
              <p
                className={`mt-2 text-sm ${
                  plan.featured ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6">
                <p className="flex items-baseline">
                  <span
                    className={`text-4xl font-bold tracking-tight ${
                      plan.featured ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {plan.price.monthly}
                  </span>
                  {plan.price.monthly !== '$0' && (
                    <span
                      className={`ml-1 text-sm ${
                        plan.featured ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      /month
                    </span>
                  )}
                </p>
                {plan.price.annually !== '$0' && (
                  <p
                    className={`mt-1 text-sm ${
                      plan.featured ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    or {plan.price.annually}/year (save 2 months)
                  </p>
                )}
              </div>

              <div
                className={`mt-6 rounded-lg p-4 ${
                  plan.featured ? 'bg-emerald-500/20' : 'bg-emerald-50'
                }`}
              >
                <p
                  className={`text-center text-lg font-semibold ${
                    plan.featured ? 'text-emerald-400' : 'text-emerald-600'
                  }`}
                >
                  {plan.limit}
                </p>
                <p
                  className={`text-center text-sm ${
                    plan.featured ? 'text-emerald-400/70' : 'text-emerald-600/70'
                  }`}
                >
                  {plan.limitNote}
                </p>
              </div>

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon
                      className={`h-6 w-6 flex-none ${
                        plan.featured ? 'text-emerald-400' : 'text-emerald-600'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.featured ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/"
                color={plan.featured ? 'white' : 'emerald'}
                className="mt-8"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Questions about pricing?
          </h3>
          <p className="mt-2 text-gray-600">
            Email us at{' '}
            <a
              href="mailto:help@returnwindow.app"
              className="text-emerald-600 underline hover:text-emerald-500"
            >
              help@returnwindow.app
            </a>{' '}
            and we'll help you find the right plan.
          </p>
        </div>
      </Container>
    </section>
  )
}
