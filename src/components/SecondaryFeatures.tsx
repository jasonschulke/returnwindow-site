import { Container } from '@/components/Container'

const features = [
  {
    name: 'No password needed',
    description:
      'Your email address is your identity. No password to remember, no app to download. Just forward and go.',
    icon: NoAccountIcon,
  },
  {
    name: 'Privacy first',
    description:
      'We only read your order confirmation emails, nothing else. No access to your inbox, no tracking.',
    icon: PrivacyIcon,
  },
  {
    name: 'Works on any device',
    description:
      'Email works everywhere. Forward from your phone, tablet, or computer. Reminders arrive in your inbox.',
    icon: DevicesIcon,
  },
  {
    name: 'Smart deadline detection',
    description:
      'We know return policies for 100+ retailers. Amazon is 30 days, Target is 90, Costco is 90. We track them all.',
    icon: CalendarIcon,
  },
  {
    name: 'One dashboard',
    description:
      'See all your pending returns in one place. Filter by store, deadline, or status.',
    icon: DashboardIcon,
  },
  {
    name: 'No ads, ever',
    description:
      'We will never show you ads or sell your data. Simple, honest pricing with no hidden fees.',
    icon: FreeIcon,
  },
]

function NoAccountIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={14} stroke="currentColor" strokeWidth={2} />
      <circle cx={16} cy={12} r={4} stroke="currentColor" strokeWidth={2} />
      <path d="M8 26C8 22 11.5 19 16 19C20.5 19 24 22 24 26" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  )
}

function PrivacyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M16 4L4 10V16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16V10L16 4Z" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
      <path d="M12 16L15 19L20 13" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DevicesIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x={2} y={6} width={18} height={14} rx={2} stroke="currentColor" strokeWidth={2} />
      <rect x={20} y={12} width={10} height={16} rx={2} stroke="currentColor" strokeWidth={2} />
      <path d="M6 24H14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  )
}

function CalendarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x={4} y={6} width={24} height={22} rx={2} stroke="currentColor" strokeWidth={2} />
      <path d="M4 12H28" stroke="currentColor" strokeWidth={2} />
      <path d="M10 4V8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <path d="M22 4V8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <circle cx={16} cy={20} r={3} fill="currentColor" />
    </svg>
  )
}

function DashboardIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x={4} y={4} width={10} height={10} rx={2} stroke="currentColor" strokeWidth={2} />
      <rect x={18} y={4} width={10} height={6} rx={2} stroke="currentColor" strokeWidth={2} />
      <rect x={18} y={14} width={10} height={14} rx={2} stroke="currentColor" strokeWidth={2} />
      <rect x={4} y={18} width={10} height={10} rx={2} stroke="currentColor" strokeWidth={2} />
    </svg>
  )
}

function FreeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={12} stroke="currentColor" strokeWidth={2} />
      <path d="M12 12C12 10.8954 12.8954 10 14 10H18C19.1046 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14H14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <path d="M14 14H18C19.1046 14 20 14.8954 20 16V17C20 18.1046 19.1046 19 18 19H14C12.8954 19 12 18.1046 12 17V16C12 14.8954 12.8954 14 14 14Z" stroke="currentColor" strokeWidth={2} />
      <path d="M16 19V22" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <path d="M16 10V7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for managing your returns"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Built for simplicity
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We designed Return Window to be as frictionless as possible.
            No apps to install, no passwords to remember, no learning curve.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8 transition-all duration-200 hover:border-emerald-500 hover:border-2 hover:shadow-lg hover:shadow-emerald-50"
            >
              <feature.icon className="h-8 w-8 text-emerald-600" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
