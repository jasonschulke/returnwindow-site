'use client'

import { useId, useState } from 'react'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#059669" />
            <stop offset="1" stopColor="#059669" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#059669" />
            <stop offset="1" stopColor="#059669" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/5">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-4 flex-1 rounded-md bg-white px-3 py-1 text-xs text-gray-400">
          returnwindow.app/dashboard
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-4">
        {/* Stats row */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-white p-3 text-center shadow-sm ring-1 ring-gray-100">
            <div className="text-xl font-bold text-gray-900">3</div>
            <div className="text-[10px] uppercase tracking-wide text-gray-500">Active</div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-red-50 to-red-100 p-3 text-center shadow-sm">
            <div className="text-xl font-bold text-red-600">1</div>
            <div className="text-[10px] uppercase tracking-wide text-gray-500">Due Soon</div>
          </div>
          <div className="rounded-lg bg-white p-3 text-center shadow-sm ring-1 ring-gray-100">
            <div className="text-xl font-bold text-gray-900">$247</div>
            <div className="text-[10px] uppercase tracking-wide text-gray-500">Value</div>
          </div>
        </div>

        {/* Purchase cards */}
        <div className="space-y-2">
          <div className="rounded-lg border-l-4 border-red-500 bg-gradient-to-r from-red-50 to-white p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Amazon</span>
              <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-600">2 days</span>
            </div>
            <div className="mt-1 text-xs text-gray-500">2 items &middot; $89.99</div>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Target</span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-600">45 days</span>
            </div>
            <div className="mt-1 text-xs text-gray-500">1 item &middot; $34.99</div>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Best Buy</span>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-600">12 days</span>
            </div>
            <div className="mt-1 text-xs text-gray-500">1 item &middot; $122.00</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // In production, this would submit to your backend
      setSubmitted(true)
    }
  }

  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl">
              Never miss a return deadline again.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Forward your order confirmations. We'll track every purchase and remind you before return windows close.
              Stop losing money on items you meant to return.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-4">
                <div className="relative flex-1">
                  <MailIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
                <Button type="submit" color="emerald" className="flex-none">
                  Get Started Free
                </Button>
              </form>
            ) : (
              <div className="mt-8 rounded-lg bg-emerald-50 p-4 text-emerald-800">
                <p className="font-medium">Check your inbox!</p>
                <p className="mt-1 text-sm text-emerald-700">
                  We've sent you an email with instructions to get started.
                </p>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <p className="text-sm text-gray-500">
                No ads, ever. Your data stays private.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-3.953 6.848c.062.003.124.005.187.005 6.627 0 12-5.373 12-12 0-1.005-.124-1.983-.357-2.918z" />
                </svg>
                Chrome Extension
                <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-700">
                  Coming Soon
                </span>
              </a>
            </div>
          </div>

          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/70 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 px-4 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:px-0 lg:pt-10 xl:-bottom-32">
              <DashboardPreview />
            </div>
          </div>

          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              Works with 100+ retailers including
            </p>
            <div className="relative mt-6 overflow-hidden">
              {/* Gradient masks for smooth fade effect */}
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent" />

              <div className="flex animate-marquee-horizontal">
                {/* First set of 50 retailers */}
                {[
                  { name: 'Amazon', domain: 'amazon.com' },
                  { name: 'Walmart', domain: 'walmart.com' },
                  { name: 'Apple', domain: 'apple.com' },
                  { name: 'Target', domain: 'target.com' },
                  { name: 'Home Depot', domain: 'homedepot.com' },
                  { name: 'Best Buy', domain: 'bestbuy.com' },
                  { name: 'Costco', domain: 'costco.com' },
                  { name: "Lowe's", domain: 'lowes.com' },
                  { name: "Macy's", domain: 'macys.com' },
                  { name: "Kohl's", domain: 'kohls.com' },
                  { name: 'Nordstrom', domain: 'nordstrom.com' },
                  { name: 'Nike', domain: 'nike.com' },
                  { name: 'Wayfair', domain: 'wayfair.com' },
                  { name: 'Gap', domain: 'gap.com' },
                  { name: 'Adidas', domain: 'adidas.com' },
                  { name: 'Old Navy', domain: 'oldnavy.com' },
                  { name: 'JCPenney', domain: 'jcpenney.com' },
                  { name: 'Sephora', domain: 'sephora.com' },
                  { name: 'Ulta', domain: 'ulta.com' },
                  { name: 'IKEA', domain: 'ikea.com' },
                  { name: 'Williams Sonoma', domain: 'williams-sonoma.com' },
                  { name: 'Pottery Barn', domain: 'potterybarn.com' },
                  { name: 'Crate & Barrel', domain: 'crateandbarrel.com' },
                  { name: 'Bed Bath', domain: 'bedbathandbeyond.com' },
                  { name: 'REI', domain: 'rei.com' },
                  { name: 'Dick\'s', domain: 'dickssportinggoods.com' },
                  { name: 'Foot Locker', domain: 'footlocker.com' },
                  { name: 'Under Armour', domain: 'underarmour.com' },
                  { name: 'Lululemon', domain: 'lululemon.com' },
                  { name: 'H&M', domain: 'hm.com' },
                  { name: 'Zara', domain: 'zara.com' },
                  { name: 'Uniqlo', domain: 'uniqlo.com' },
                  { name: 'Urban Outfitters', domain: 'urbanoutfitters.com' },
                  { name: 'Anthropologie', domain: 'anthropologie.com' },
                  { name: 'Free People', domain: 'freepeople.com' },
                  { name: 'J.Crew', domain: 'jcrew.com' },
                  { name: 'Banana Republic', domain: 'bananarepublic.com' },
                  { name: "Levi's", domain: 'levi.com' },
                  { name: 'The North Face', domain: 'thenorthface.com' },
                  { name: 'Patagonia', domain: 'patagonia.com' },
                  { name: 'Zappos', domain: 'zappos.com' },
                  { name: 'Chewy', domain: 'chewy.com' },
                  { name: 'Petco', domain: 'petco.com' },
                  { name: 'PetSmart', domain: 'petsmart.com' },
                  { name: 'Staples', domain: 'staples.com' },
                  { name: 'Office Depot', domain: 'officedepot.com' },
                  { name: 'GameStop', domain: 'gamestop.com' },
                  { name: 'Newegg', domain: 'newegg.com' },
                  { name: 'B&H Photo', domain: 'bhphotovideo.com' },
                  { name: "Sam's Club", domain: 'samsclub.com' },
                ].map((retailer) => (
                  <div key={retailer.name} className="mx-3 flex shrink-0 items-center gap-1.5">
                    <img
                      src={`https://www.google.com/s2/favicons?sz=32&domain=${retailer.domain}`}
                      alt={retailer.name}
                      className="h-5 w-5 rounded"
                    />
                    <span className="whitespace-nowrap text-xs font-medium text-gray-700">{retailer.name}</span>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[
                  { name: 'Amazon', domain: 'amazon.com' },
                  { name: 'Walmart', domain: 'walmart.com' },
                  { name: 'Apple', domain: 'apple.com' },
                  { name: 'Target', domain: 'target.com' },
                  { name: 'Home Depot', domain: 'homedepot.com' },
                  { name: 'Best Buy', domain: 'bestbuy.com' },
                  { name: 'Costco', domain: 'costco.com' },
                  { name: "Lowe's", domain: 'lowes.com' },
                  { name: "Macy's", domain: 'macys.com' },
                  { name: "Kohl's", domain: 'kohls.com' },
                  { name: 'Nordstrom', domain: 'nordstrom.com' },
                  { name: 'Nike', domain: 'nike.com' },
                  { name: 'Wayfair', domain: 'wayfair.com' },
                  { name: 'Gap', domain: 'gap.com' },
                  { name: 'Adidas', domain: 'adidas.com' },
                  { name: 'Old Navy', domain: 'oldnavy.com' },
                  { name: 'JCPenney', domain: 'jcpenney.com' },
                  { name: 'Sephora', domain: 'sephora.com' },
                  { name: 'Ulta', domain: 'ulta.com' },
                  { name: 'IKEA', domain: 'ikea.com' },
                  { name: 'Williams Sonoma', domain: 'williams-sonoma.com' },
                  { name: 'Pottery Barn', domain: 'potterybarn.com' },
                  { name: 'Crate & Barrel', domain: 'crateandbarrel.com' },
                  { name: 'Bed Bath', domain: 'bedbathandbeyond.com' },
                  { name: 'REI', domain: 'rei.com' },
                  { name: 'Dick\'s', domain: 'dickssportinggoods.com' },
                  { name: 'Foot Locker', domain: 'footlocker.com' },
                  { name: 'Under Armour', domain: 'underarmour.com' },
                  { name: 'Lululemon', domain: 'lululemon.com' },
                  { name: 'H&M', domain: 'hm.com' },
                  { name: 'Zara', domain: 'zara.com' },
                  { name: 'Uniqlo', domain: 'uniqlo.com' },
                  { name: 'Urban Outfitters', domain: 'urbanoutfitters.com' },
                  { name: 'Anthropologie', domain: 'anthropologie.com' },
                  { name: 'Free People', domain: 'freepeople.com' },
                  { name: 'J.Crew', domain: 'jcrew.com' },
                  { name: 'Banana Republic', domain: 'bananarepublic.com' },
                  { name: "Levi's", domain: 'levi.com' },
                  { name: 'The North Face', domain: 'thenorthface.com' },
                  { name: 'Patagonia', domain: 'patagonia.com' },
                  { name: 'Zappos', domain: 'zappos.com' },
                  { name: 'Chewy', domain: 'chewy.com' },
                  { name: 'Petco', domain: 'petco.com' },
                  { name: 'PetSmart', domain: 'petsmart.com' },
                  { name: 'Staples', domain: 'staples.com' },
                  { name: 'Office Depot', domain: 'officedepot.com' },
                  { name: 'GameStop', domain: 'gamestop.com' },
                  { name: 'Newegg', domain: 'newegg.com' },
                  { name: 'B&H Photo', domain: 'bhphotovideo.com' },
                  { name: "Sam's Club", domain: 'samsclub.com' },
                ].map((retailer) => (
                  <div key={`${retailer.name}-dup`} className="mx-3 flex shrink-0 items-center gap-1.5">
                    <img
                      src={`https://www.google.com/s2/favicons?sz=32&domain=${retailer.domain}`}
                      alt={retailer.name}
                      className="h-5 w-5 rounded"
                    />
                    <span className="whitespace-nowrap text-xs font-medium text-gray-700">{retailer.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
