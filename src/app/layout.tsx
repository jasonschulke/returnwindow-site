import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = 'https://returnwindow.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Return Window',
    default: 'Return Window - Never Miss a Return Deadline Again',
  },
  description:
    'Track purchase return deadlines automatically. Forward order confirmations and get reminded before return windows close. Works with Amazon, Target, Walmart, and 100+ retailers. Free to start.',
  keywords: [
    'return deadline tracker',
    'return window reminder',
    'purchase return tracker',
    'Amazon return policy',
    'Target return policy',
    'Walmart return policy',
    'Costco return policy',
    'Best Buy return policy',
    'how long to return Amazon',
    'online shopping returns',
    'return policy tracker',
    'return reminder app',
    'missed return deadline',
    'track online purchases',
    'when does my return expire',
    'return deadline reminder',
  ],
  authors: [{ name: 'Return Window' }],
  creator: 'Return Window',
  publisher: 'Return Window',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Return Window',
    title: 'Return Window - Never Miss a Return Deadline Again',
    description:
      'Track purchase return deadlines automatically. Forward order confirmations and get reminded before return windows close. Works with 100+ retailers.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Return Window - Track Return Deadlines',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Return Window - Never Miss a Return Deadline',
    description:
      'Track purchase return deadlines automatically. Get reminded before return windows close.',
    images: ['/og-image.png'],
    creator: '@returnwindow',
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'productivity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://us.i.posthog.com" />
        <link rel="dns-prefetch" href="https://us.i.posthog.com" />

        {/* PostHog Analytics */}
        <Script id="posthog-init" strategy="afterInteractive">
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', {
              api_host: 'https://us.i.posthog.com',
              person_profiles: 'identified_only',
              capture_pageview: true,
              capture_pageleave: true,
            })
          `}
        </Script>

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Return Window',
              applicationCategory: 'ProductivityApplication',
              operatingSystem: 'Web',
              description:
                'Track purchase return deadlines automatically. Forward order confirmations and get reminded before return windows close.',
              url: 'https://returnwindow.app',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                description: 'Free tier available - track up to 10 purchases',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                ratingCount: '1',
              },
            }),
          }}
        />

        {/* Structured Data - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How long do I have to return something to Amazon?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Amazon's standard return policy is 30 days from delivery for most items. Electronics have shorter windows (15 days), while holiday purchases often have extended returns until January 31st.",
                  },
                },
                {
                  '@type': 'Question',
                  name: "What is Target's return policy?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Target offers a 90-day return window for most items. RedCard holders get 120 days. Electronics have a 30-day window. Target-owned brands like Cat & Jack have a 1-year return policy.',
                  },
                },
                {
                  '@type': 'Question',
                  name: "What is Walmart's return policy?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Walmart's standard return policy is 90 days for most items. Electronics and luxury items have a 30-day window. Wireless phones must be returned within 14 days.",
                  },
                },
                {
                  '@type': 'Question',
                  name: "What is Costco's return policy?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Costco has one of the most generous return policies—most items can be returned anytime with no time limit. Exceptions include electronics (90 days), diamonds over 1 carat, cigarettes, and alcohol.',
                  },
                },
                {
                  '@type': 'Question',
                  name: "What is Best Buy's return policy?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Best Buy's standard return window is 15 days. My Best Buy Plus and Total members get 60 days. Cell phones and devices with carrier contracts have a 14-day window.",
                  },
                },
                {
                  '@type': 'Question',
                  name: "What is Apple's return policy?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Apple offers a 14-day return window for most products purchased from Apple.com or Apple Stores. iPhones purchased with a carrier contract may have different terms. Holiday purchases typically have extended return windows.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I track my online purchase return deadlines?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Forward your order confirmation email to track@returnwindow.app. We'll automatically calculate when your return window closes and send you reminders before the deadline. No app download required.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is there an app to remind me about return deadlines?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Return Window is an email-based return deadline tracker that requires no app download. Forward your receipts and receive automatic reminders. View all purchases in a web dashboard.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Return Window free to use?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! Return Window is free for your first 10 purchases with no time limit. Paid plans start at $1/month to track up to 50 purchases. We never show ads or sell your data.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
