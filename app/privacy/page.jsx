import React from 'react'
import HeroAbout from '../components/HeroAbout'
import Head from 'next/head'

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Citywide London</title>
        <meta name="description" content="Learn how Citywide London collects, uses, and protects your personal information in accordance with data protection laws." />
      </Head>
      
      <section className="bg-white">
        <HeroAbout title="Privacy Policy" />
        
        <main className="pt-11 px-7 md:px-36 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-xl">
          <p className='text-gray-700 lg:mb-7 text-base leading-relaxed'>
            At Citywide London, we value your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains the types of information we collect, how we use and share it, and your 
            rights and choices regarding your personal data. By using our website and services, you agree to 
            the terms of this Privacy Policy.
          </p>

          <article className="space-y-12">
            {/* Section 1 */}
            <section className='space-y-4'>
              <h2 className='text-gray-800 text-xl font-semibold'>1. Information We Collect</h2>
              <p className='text-gray-600'>We collect the following types of personal information:</p>
              <ul className='list-disc pl-5 space-y-2 text-gray-600'>
                <li><strong>Personal details:</strong> Name, email address, phone number, and billing address.</li>
                <li><strong>Travel details:</strong> Flight information, pickup and drop-off locations, and special requests.</li>
                <li><strong>Payment information:</strong> Credit card or debit card details, and billing information.</li>
                <li><strong>Technical data:</strong> IP address, browser type, device information, and usage data collected via cookies and other tracking technologies.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className='space-y-4'>
              <h2 className='text-gray-800 text-xl font-semibold'>2. How We Use Your Information</h2>
              <p className='text-gray-600'>We use your personal information for the following purposes:</p>
              <ul className='list-disc pl-5 space-y-2 text-gray-600'>
                <li>To process your booking and provide our services.</li>
                <li>To communicate with you regarding your booking, including sending confirmation emails, updates, and notifications.</li>
                <li>To personalize your user experience and improve our website and services.</li>
                <li>To process payments and prevent fraud.</li>
                <li>To comply with legal obligations and protect our rights and interests.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className='space-y-4'>
              <h2 className='text-gray-800 text-xl font-semibold'>3. Sharing Your Information</h2>
              <p className='text-gray-600'>We may share your personal information with the following parties:</p>
              <ul className='list-disc pl-5 space-y-2 text-gray-600'>
                <li>Our drivers and subcontractors, as necessary to provide our services.</li>
                <li>Payment processors and financial institutions, for payment processing and fraud prevention.</li>
                <li>Government authorities and law enforcement agencies, as required by law or to protect our rights and interests.</li>
                <li>Third-party service providers, such as data storage and analytics providers, to help us improve our website and services.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className='space-y-4'>
              <h2 className='text-gray-800 text-xl font-semibold'>4. Your Rights and Choices</h2>
              <p className='text-gray-600'>You have the following rights regarding your personal information:</p>
              <ul className='list-disc pl-5 space-y-2 text-gray-600'>
                <li><strong>Access:</strong> You can request a copy of the personal information we hold about you.</li>
                <li><strong>Rectification:</strong> You can update or correct your personal information if it is inaccurate or incomplete.</li>
                <li><strong>Erasure:</strong> You can request that we delete your personal information, subject to certain legal exceptions.</li>
                <li><strong>Restriction:</strong> You can ask us to restrict the processing of your personal information in certain circumstances.</li>
                <li><strong>Object:</strong> You can object to the processing of your personal information for marketing purposes or on other legitimate grounds.</li>
              </ul>
            </section>

            {/* Section 5-8 */}
            <section className='space-y-8'>
              <div className='space-y-4'>
                <h2 className='text-gray-800 text-xl font-semibold'>5. Cookies and Tracking Technologies</h2>
                <p className='text-gray-600'>
                  We use cookies and other tracking technologies to collect usage data, personalize your user experience, 
                  and improve our website and services. You can manage your cookie preferences in your browser's settings.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-gray-800 text-xl font-semibold'>6. Data Retention</h2>
                <p className='text-gray-600'>
                  We retain your personal information for as long as required by law to fulfil the purposes for which 
                  it was collected, comply with legal obligations, and protect our rights and interests.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-gray-800 text-xl font-semibold'>7. Changes to Our Privacy Policy</h2>
                <p className='text-gray-600'>
                  We may update this Privacy Policy from time to time to reflect changes in our privacy practices or 
                  applicable laws. We will notify you of any significant changes by posting a notice on our website 
                  or contacting you directly.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-gray-800 text-xl font-semibold'>8. Contact Us</h2>
                <p className='text-gray-600'>
                  If you have any questions or concerns about our Privacy Policy or the processing of your personal 
                  information, please contact our customer support team.
                </p>
              </div>
            </section>
          </article>
        </main>
      </section>
    </>
  )
}

export default PrivacyPolicy