import Image from 'next/image'
import logoImage from '@/images/logo.png'

export function Logomark({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={className} {...props}>
      <Image
        src={logoImage}
        alt="Return Window"
        width={40}
        height={40}
        className="h-full w-full"
        unoptimized
      />
    </div>
  )
}

export function Logo({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={`flex items-center gap-3 shrink-0 ${className || ''}`} {...props}>
      <Image
        src={logoImage}
        alt="Return Window"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0"
        unoptimized
      />
      <span className="text-lg font-semibold tracking-tight text-gray-900 whitespace-nowrap">
        Return Window
      </span>
    </div>
  )
}
