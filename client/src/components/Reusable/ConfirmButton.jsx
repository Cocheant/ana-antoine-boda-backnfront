import React, { useContext } from 'react'
import { FormattedMessage, IntlContext } from 'react-intl';

const ConfirmButton = () => {
  
  const localeCtx = useContext(IntlContext);

  let shortLang = localeCtx.locale;

  if (shortLang.indexOf('-') !== -1)
      shortLang = shortLang.split('-')[0];

  if (shortLang.indexOf('_') !== -1)
      shortLang = shortLang.split('_')[0];

  const esUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd_pJ736Z167zyvnTnT5RFVxmRY0vafldxVYttUbr7nFERk6A/viewform";
  const frUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeJYnxriMUG8OE4n7x0iADdi2n0l02m1wQ7NAjTlwGR66JN1A/viewform";
  const enUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeZqB3IMBDNKT1zRK67pcrytIkkRQIB2r5wLGmGx92VANqf8A/viewform";


  const openSurveyURL = () => {
    var url = enUrl;
    if(shortLang === "es"){
      url = esUrl;
    }
    else if(shortLang === "fr"){
      url = frUrl;
    }
    var win = window.open(url, '_blank');
    win.focus();
  };

  return (
    <button onClick={() => openSurveyURL()} className={'text-[var(--background)] font-normal bg-[var(--orange)] opacity-100  px-3 rounded-xl min-w-20 min-h-10 transition-all duration-500 ease-in-out hover:animate-wiggle'}>
      <FormattedMessage
        id="navbar.contact"
        defaultMessage="Confirm Presence"
      />


    </button>
  )
}

export default ConfirmButton
