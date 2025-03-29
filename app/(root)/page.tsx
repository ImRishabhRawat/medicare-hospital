import MainContent from '@/components/Hero'
import HowWeHelp from '@/components/HowWeHelp'
import OurServices from '@/components/OurServices'
import OurTeam from '@/components/OurTeam'
import QuickLinksSection from '@/components/QuickLinksSection'
import React from 'react'

const page = () => {
  return (
    <>
      <MainContent />
      <QuickLinksSection />
      <HowWeHelp />
      <OurServices />
      <OurTeam /> 
    </>
  )
}

export default page
