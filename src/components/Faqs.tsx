import { Container } from '@/components/Container'

const faqs = [
  {
    question: 'How does Return Window work?',
    answer:
      'Simply forward your order confirmation emails to track@returnwindow.app. We automatically detect the retailer, extract order details, and calculate your return deadline based on each store\'s return policy. You\'ll get a reminder email before the deadline.',
  },
  {
    question: 'Do I need a password?',
    answer:
      'No password needed! Your email address is your identity. Just start forwarding receipts and you\'ll automatically receive reminders at that email address. It\'s that simple.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Return Window offers simple, affordable pricing. We will never show ads or sell your data. Scroll up to see our current plans.',
  },
  {
    question: 'Which retailers do you support?',
    answer:
      'We support 100+ major retailers including Amazon, Target, Walmart, Best Buy, Wayfair, Costco, Nordstrom, Apple, Nike, and many more. If we receive an email from a retailer we don\'t recognize, we\'ll use a default 30-day window.',
  },
  {
    question: 'What data do you collect?',
    answer:
      'We only read the order confirmation emails you forward to us. We extract the merchant name, order date, and items purchased. We never access your email inbox, and we don\'t sell or share your data.',
  },
  {
    question: 'How do I stop tracking an order?',
    answer:
      'Each reminder email includes an "I returned this" button that removes the item from tracking. You can also reply to any reminder with "stop" to unsubscribe completely.',
  },
  {
    question: 'How do you know each store\'s return policy?',
    answer:
      'We maintain a database of return policies for major retailers. We regularly update this information to ensure accuracy. Policies can vary by item type and purchase method, so always confirm with the retailer.',
  },
  {
    question: 'What if I make a purchase from my phone?',
    answer:
      'Email works everywhere! Forward the confirmation email from your phone\'s email app just like you would from a computer. You\'ll receive reminders in the same inbox.',
  },
  {
    question: 'Can I see all my tracked returns?',
    answer:
      'Yes! Visit your personal dashboard at returnwindow.app/dashboard and enter your email address. You\'ll see all your active return windows, organized by deadline.',
  },
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Have another question?{' '}
            <a
              href="mailto:help@returnwindow.app"
              className="text-emerald-600 underline hover:text-emerald-500"
            >
              Email us
            </a>{' '}
            and we'll get back to you.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {faqs.map((faq, index) => (
            <div key={index}>
              <dt className="text-base font-semibold text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-4 text-sm text-gray-700">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
