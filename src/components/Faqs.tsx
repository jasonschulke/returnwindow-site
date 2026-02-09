import { Container } from '@/components/Container'

const faqs = [
  {
    question: 'How does Return Window work?',
    answer:
      'Forward your order confirmation emails to track@returnwindow.app. We automatically detect the retailer, extract order details, and calculate your return deadline based on each store\'s return policy. You\'ll receive email reminders at 7 days, 3 days, and 1 day before your return window closes.',
  },
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
    question: 'What is Costco\'s return policy?',
    answer:
      'Costco has one of the most generous return policies—most items can be returned anytime with no time limit. Exceptions include electronics (90 days), diamonds over 1 carat, cigarettes, and alcohol. Return Window helps you track the items that do have deadlines.',
  },
  {
    question: 'How do I remember to return something before the deadline?',
    answer:
      'Forward your order confirmation to track@returnwindow.app immediately after purchasing. We\'ll automatically send you email reminders at 7 days, 3 days, and 1 day before your return window expires. You\'ll never miss a return deadline again.',
  },
  {
    question: 'Is Return Window free to use?',
    answer:
      'Yes! Return Window is free for your first 10 purchases with no time limit. For regular shoppers, paid plans start at just $1/month to track up to 50 purchases. We never show ads or sell your data.',
  },
  {
    question: 'What is Best Buy\'s return policy?',
    answer:
      'Best Buy\'s standard return window is 15 days. My Best Buy Plus and Total members get 60 days. Major appliances have a 15-day window. Cell phones and devices with carrier contracts have a 14-day window. Return Window tracks your membership status if noted in your receipt.',
  },
  {
    question: 'How do I track returns from multiple stores?',
    answer:
      'Forward all your order confirmation emails to the same address: track@returnwindow.app. Your dashboard shows purchases from all retailers in one place, organized by deadline. Filter by store, status, or urgency to see what needs attention.',
  },
  {
    question: 'Is my purchase data secure and private?',
    answer:
      'Yes. We only read the emails you forward to us—we never access your inbox. All purchase details are encrypted with AES-256-GCM before storage. We don\'t sell or share your data, and you can delete your account anytime.',
  },
  {
    question: 'What if I miss a return deadline?',
    answer:
      'Unfortunately, most retailers won\'t accept returns after the window closes, meaning you\'re stuck with items you don\'t want. That\'s exactly why we built Return Window—to send you timely reminders so you never lose money on missed returns again.',
  },
  {
    question: 'Can I use Return Window on my phone?',
    answer:
      'Absolutely! Email works everywhere. Forward order confirmations from your phone\'s email app, and you\'ll receive reminders in the same inbox. The dashboard is also mobile-friendly for checking your return deadlines on the go.',
  },
  {
    question: 'What is Walmart\'s return policy?',
    answer:
      'Walmart\'s standard return policy is 90 days for most items. Electronics and luxury items have a 30-day window. Wireless phones must be returned within 14 days. Some items like air mattresses and holiday merchandise have different policies which we track.',
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
