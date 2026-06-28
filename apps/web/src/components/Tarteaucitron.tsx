'use client'

import Script from 'next/script'

export default function Tarteaucitron() {
  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/tarteaucitronjs@1.17.0/tarteaucitron.js"
      strategy="afterInteractive"
      onLoad={() => {
        // @ts-expect-error tarteaucitron is loaded globally
        tarteaucitron.init({
          privacyUrl: '/mentions-legales',
          bodyPosition: 'bottom',
          hashtag: '#cookies',
          cookieName: 'tarteaucitron',
          orientation: 'bottom',
          groupServices: false,
          showAlertSmall: false,
          cookieslist: false,
          closePopup: false,
          showIcon: true,
          iconSrc: '',
          iconPosition: 'BottomRight',
          adblocker: false,
          DenyAllCta: true,
          AcceptAllCta: true,
          highPrivacy: true,
          handleBrowserDNTRequest: false,
          removeCredit: false,
          moreInfoLink: true,
          useExternalCss: false,
          useExternalJs: false,
          readmoreLink: '',
          mandatory: true,
          mandatoryCta: true,
          languageSelectorTarteaucitron: false,
        })
      }}
    />
  )
}
