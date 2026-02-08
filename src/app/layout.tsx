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
    'Amazon return deadline',
    'online shopping returns',
    'return policy tracker',
    'email receipt tracker',
    'return reminder app',
    'missed return deadline',
    'track online purchases',
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
                  name: 'How does Return Window work?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Forward your order confirmation emails to track@returnwindow.app. We automatically detect the retailer, extract order details, and send you reminders at 7 days, 3 days, and 1 day before your return window closes.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Return Window free?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! Return Window is free for your first 10 purchases. Paid plans start at $1/month for regular shoppers who need to track more purchases.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Which retailers does Return Window support?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Return Window works with 100+ retailers including Amazon, Target, Walmart, Best Buy, Apple, Nike, Nordstrom, Wayfair, Costco, and many more.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is my data secure?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. All purchase details are encrypted with AES-256-GCM before storage. We cannot see what you bought - only you can decrypt your data through your personal dashboard.',
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
