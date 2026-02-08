import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started - Track Return Deadlines in 30 Seconds',
  description:
    'Start tracking your purchase return deadlines instantly. No signup required - just forward your order confirmation emails to track@returnwindow.app and get reminded before return windows close.',
  openGraph: {
    title: 'Get Started with Return Window',
    description:
      'Start tracking return deadlines in 30 seconds. No signup, no app to download.',
  },
}

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
