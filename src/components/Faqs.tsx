'use client'

import { useState } from 'react'
import { Container } from '@/components/Container'

function ChevronIcon({ className, ...props }: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

const faqSections = [
  {
    title: 'Getting Started',
    faqs: [
      {
        question: 'How does Return Window work?',
        answer:
          'Forward your order confirmation emails to track@returnwindow.app. We automatically detect the retailer, extract order details, and calculate your return deadline based on each store\'s return policy. You\'ll receive email reminders at 7 days, 3 days, and 1 day before your return window closes.',
      },
      {
        question: 'How do I track my online purchase return deadlines?',
        answer:
          'Simply forward your order confirmation email to track@returnwindow.app. We\'ll automatically calculate when your return window closes and send you reminders before the deadline. No app download or password required—it works entirely through email.',
      },
      {
        question: 'Is there an app to remind me about return deadlines?',
        answer:
          'Return Window is an email-based return deadline tracker that requires no app download. Forward your receipts to track@returnwindow.app and receive automatic reminders. You can also view all your purchases in a web dashboard at returnwindow.app.',
      },
      {
        question: 'Which retailers do you support?',
        answer:
          'We support Amazon, Target, Walmart, Best Buy, Costco, Wayfair, Nordstrom, Apple, Nike, Zara, H&M, IKEA, Home Depot, Lowe\'s, Macy\'s, Kohl\'s, Sephora, Ulta, REI, and thousands more. If we don\'t recognize a retailer, we\'ll use a default 30-day window.',
      },
      {
        question: 'How do I track returns from multiple stores?',
        answer:
          'Forward all your order confirmation emails to the same address: track@returnwindow.app. Your dashboard shows purchases from all retailers in one place, organized by deadline. Filter by store, status, or urgency to see what needs attention.',
      },
      {
        question: 'Can I use Return Window on my phone?',
        answer:
          'Absolutely! Email works everywhere. Forward order confirmations from your phone\'s email app, and you\'ll receive reminders in the same inbox. The dashboard is also mobile-friendly for checking your return deadlines on the go.',
      },
    ],
  },
  {
    title: 'Privacy & Security',
    faqs: [
      {
        question: 'Is my purchase data secure and private?',
        answer:
          'Yes. We only read the emails you forward to us—we never access your inbox. All purchase details are encrypted with AES-256-GCM before storage. We don\'t sell or share your data, and you can delete your account anytime.',
      },
      {
        question: 'Do you access my email inbox?',
        answer:
          'No. We never connect to or access your email inbox. You manually forward order confirmations to us, so you\'re always in control of what we see. We only process the specific emails you choose to send.',
      },
      {
        question: 'Can I delete my data?',
        answer:
          'Yes, you can delete individual purchases or your entire account at any time from your dashboard. When you delete data, it\'s permanently removed from our servers within 24 hours. No backups, no exceptions.',
      },
    ],
  },
  {
    title: 'Pricing & Plans',
    faqs: [
      {
        question: 'Is Return Window free to use?',
        answer:
          'Yes! Return Window is free for your first 10 purchases with no time limit. For regular shoppers, paid plans start at just $1/month to track up to 50 purchases. We never show ads or sell your data.',
      },
      {
        question: 'What happens when I reach my purchase limit?',
        answer:
          'When you reach your plan\'s limit, you can still view existing purchases and receive reminders for them. To track new purchases, you\'ll need to upgrade your plan or wait for older purchases to expire from your active list.',
      },
      {
        question: 'Can I cancel my subscription anytime?',
        answer:
          'Yes, you can cancel anytime with no questions asked. You\'ll keep access to your current plan until the end of your billing period. Your purchase data remains accessible even after downgrading to the free tier.',
      },
    ],
  },
  {
    title: 'Retailer Return Policies',
    faqs: [
      {
        question: 'How long do I have to return something to Amazon?',
        answer:
          'Amazon\'s standard return policy is 30 days from delivery for most items. However, some categories like electronics have shorter windows (15 days), while holiday purchases often have extended returns until January 31st. Return Window tracks these variations automatically.',
      },
      {
        question: 'What is Target\'s return policy?',
        answer:
          'Target offers a 90-day return window for most items. RedCard holders get an extra 30 days (120 days total). Electronics have a 30-day window. Target-owned brands like Cat & Jack have a 1-year return policy. We track all these exceptions for you.',
      },
      {
        question: 'What is Walmart\'s return policy?',
        answer:
          'Walmart\'s standard return policy is 90 days for most items. Electronics and luxury items have a 30-day window. Wireless phones must be returned within 14 days. Some items like air mattresses and holiday merchandise have different policies which we track.',
      },
      {
        question: 'What is Costco\'s return policy?',
        answer:
          'Costco has one of the most generous return policies—most items can be returned anytime with no time limit. Exceptions include electronics (90 days), diamonds over 1 carat, cigarettes, and alcohol. Return Window helps you track the items that do have deadlines.',
      },
      {
        question: 'What is Best Buy\'s return policy?',
        answer:
          'Best Buy\'s standard return window is 15 days. My Best Buy Plus and Total members get 60 days. Major appliances have a 15-day window. Cell phones and devices with carrier contracts have a 14-day window. Return Window tracks your membership status if noted in your receipt.',
      },
      {
        question: 'What is Apple\'s return policy?',
        answer:
          'Apple offers a 14-day return window for most products purchased from Apple.com or Apple Stores. iPhones purchased with a carrier contract may have different terms. Holiday purchases typically have extended return windows through early January.',
      },
    ],
  },
]

export function Faqs() {
  // "Getting Started" expanded by default
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['Getting Started'])
  )

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev)
      if (next.has(title)) {
        next.delete(title)
      } else {
        next.add(title)
      }
      return next
    })
  }

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

        {faqSections.map((section) => {
          const isExpanded = expandedSections.has(section.title)
          return (
            <div key={section.title} className="mt-10 first:mt-12">
              <button
                type="button"
                onClick={() => toggleSection(section.title)}
                className="group flex w-full items-center justify-between rounded-lg bg-gray-50 px-4 py-3 text-left transition-colors hover:bg-gray-100"
                aria-expanded={isExpanded}
              >
                <h3 className="text-lg font-semibold text-emerald-600">
                  {section.title}
                </h3>
                <ChevronIcon
                  className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-200 group-hover:text-gray-600 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isExpanded
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <dl className="mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 pb-4 lg:max-w-none lg:grid-cols-3">
                    {section.faqs.map((faq, index) => (
                      <div key={index}>
                        <dt className="text-base font-semibold text-gray-900">
                          {faq.question}
                        </dt>
                        <dd className="mt-4 text-sm text-gray-700">{faq.answer}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          )
        })}
      </Container>
    </section>
  )
}
