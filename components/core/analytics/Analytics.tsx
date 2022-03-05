/* eslint-disable @typescript-eslint/no-explicit-any */
import Script from 'next/script'
import { analytics } from '~/data/site'

declare global {
  interface Window {
    plausible?: (...args: any[]) => void
  }
}

const PlausibleScript = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        data-domain={analytics.plausibleDataDomain}
        src="https://plausible.io/js/plausible.js"
      />
      <Script strategy="lazyOnload" id="plausible-script">
        {`
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `}
      </Script>
    </>
  )
}

export const Analytics = () => process.env.NODE_ENV === 'production' && <PlausibleScript />
