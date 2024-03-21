import React from 'react'
import HeroAbout from '../components/HeroAbout'

const page = () => {
  return (
    <section>
    <HeroAbout title="Privacy Policy" />
    <main
          className="pt-11 px-7 md:px-36 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl
     grid grid-cols-1 gap-3 
    "
        >
 <p className='text-gray-700 lg:mb-7'>At Citywide London , we value your privacy and are committed to protecting your personal information. This Privacy Policy explains the types of information we collect, how we use and share it, and your rights and choices regarding your personal data. By using our website and services, you agree to the terms of this Privacy Policy.</p>
 <section className='flex flex-col gap-6 text-gray-500' >
  <h5 className='text-gray-800'>1. Information We Collect</h5>
  <p>We collect the following types of personal information:</p>
  <p>(a) Personal details: Name, email address, phone number, and billing address.</p>
 <p>(b) Travel details: Flight information, pickup and drop-off locations, and special requests.</p>
 <p>(c) Payment information: Credit card or debit card details, and billing information.</p>
 <p>(d) Technical data: IP address, browser type, device information, and usage data collected via cookies and other tracking technologies.</p>

 </section>
 <section className='flex flex-col mt-7 gap-6 text-gray-500'>
 <h5 className='text-gray-800'>2. How We Use Your Information </h5>
 <p>We use your personal information for the following purposes:</p>
 <p>(a) To process your booking and provide our  services.</p>
 <p>(b) To communicate with you, regarding your booking, including sending confirmation emails, updates, and notifications.</p>
 <p>(c) To personalise your user experience and improve our website and services.</p>
 <p>(d) To process payments and prevent fraud.</p>
 <p>(e) To comply with legal obligations and protect our rights and interests.</p>
 
 </section>
 <section className='flex flex-col mt-7 gap-6 text-gray-500'>
 <h5 className='text-gray-800'>3. Sharing Your Information </h5>
 <p>We may share your personal information with the following parties:</p>
 <p>(a) Our drivers and sub contractors, as necessary to provide our services.</p>
 <p>(b) Payment processors and financial institutions, for payment processing and fraud prevention.</p>
 <p>(c) Government authorities and law enforcement agencies, as required by law or to protect our rights and interests.</p>
 <p>(d) Third-party service providers, such as data storage and analytics providers, to help us improve our website and services.</p>
 
 </section>
 <section className='flex flex-col mt-7 gap-6 text-gray-500'>
 <h5 className='text-gray-800'>4. Your Rights and Choices </h5>
 <p>You have the following rights regarding your personal information:</p>
 <p>(a) Access: You can request a copy of the personal information we hold about you.</p>
 <p>(b) Rectification: You can update or correct your personal information if it is inaccurate or incomplete.</p>
 <p>(c) Erasure: You can request that we delete your personal information, subject to certain legal exceptions.</p>
 <p>(d) Restriction: You can ask us to restrict the processing of your personal information in certain circumstances.</p>
 <p>(e) Object: You can object to the processing of your personal information for marketing purposes or on other legitimate grounds.</p>

 </section>
 <section className='flex flex-col mt-7 gap-6 text-gray-500'>
 <h5 className='text-gray-800'>5. Cookies and Tracking Technologies</h5>
 <p>We use cookies and other tracking technologies to collect usage data, personalise your user experience, and improve our website and services. You can manage your cookie preferences in your browser’s settings.</p>
 <h5 className='text-gray-800'>6. Data Retention</h5>
 <p>We retain your personal information for as long as the law required to fulfil the purposes for which it was collected, comply with legal obligations, and protect our rights and interests.</p>
 <h5 className='text-gray-800'>7. Changes to Our Privacy Policy</h5>
 <p>We may update this Privacy Policy from time to time to reflect changes in our privacy practises or applicable laws. We will notify you of any significant changes by posting a notice on our website or contacting you directly.</p>
 <h5 className='text-gray-800'>8. Contact Us</h5>
 <p>If you have any questions or concerns about our Privacy Policy or the processing of your personal information, please contact our customer support team.</p>
 </section>
</main>
    </section>
  )
}

export default page