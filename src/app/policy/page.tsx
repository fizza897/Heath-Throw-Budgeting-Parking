import ContentScroll from '@/components/shared/ContentScroll'
import DateTimeInput from '@/components/shared/DateTimeInput'
import React from 'react'

const Page = () => {
  return (
    <>
    <div className='flex flex-col gap-5 py-[50px] sm:container '>
        <div className='md:w-[50%] mx-auto sm:w-[80%] w-full space-y-[20px] text-center sm:p-0 '>
            <h1 className='capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-extraDark'>
            privacy & policy
            </h1>
            <p className='font-semibold text-xs sm:text-sm text-secondary-extraDark'>
                {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
            </p>
        </div>

        <div className="">
            <div className=" items-center justify-center bg-white  pb-[20px]">
                <div className='p-5 border-[#CACACA] border text-sm rounded-lg  w-full'>
                    <div className=" text-sm   sm:container  h-[485px] overflow-y-auto  sm:p-6 custom-scrollbar ">
                        <div className='sm:container'>
                            <p>{'CABBX LTD "us", "we", or "our" operates the wwwCABBX.co.uk website the "Service". This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information under this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from www.x-ride.co.uk Information Collection and Use We collect several different types of information for various purposes to provide and improve our Service to you.'}</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Types of Data Collected</h3>
                            <h4 className="text-[12px] font-bold text-gray-700 mb-2">Personal Data</h4>
                            <p>{'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you "Personal Data". Personally, identifiable information may include, but is not limited to: Email address First name and last name Phone number Address, State, Province, ZIP/Postal code, City Cookies and Usage Data'}</p>
                            <h4 className="text-[12px] font-bold text-gray-700 mb-2 mt-6">Usage Data</h4>
                            <p>{"We may also collect information about how the Service is accessed and used Usage Data. This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data."}</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Tracking &amp; Cookies Data</h3>
                            <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyse our Service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service. Examples of Cookies we use: Session Cookies. We use Session Cookies to operate our Service. Preference Cookies. We use Preference Cookies to remember your preferences and various settings. Security Cookies. We use Security Cookies for security purposes.</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Use of Data</h3>
                            <p>CABBX LTD uses the collected data for various purposes: To provide and maintain the Service To notify you about changes to our Service To allow you to participate in interactive features of our Service when you choose to do so To provide customer care and support To provide analysis or valuable information so that we can improve the Service To monitor the usage of the Service To detect, prevent and address technical issues</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Transfer of Data</h3>
                            <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. If you are located outside the United Kingdom and choose to provide information to us, please note that we transfer the data, including Personal Data, to the United Kingdom and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer. CABBX LTD will take all steps reasonably necessary to ensure that your data is treated securely and under this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Disclosure of Data</h3>
                            <p><strong>Legal Requirements</strong> CABBX LTD may disclose your Data in the good faith belief that such action is necessary to: To comply with a legal obligation To protect and defend the rights or property of Xride LTD To prevent or investigate possible wrongdoing in connection with the Service To protect the personal safety of users of the Service or the public To protect against legal liability</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Security of Data</h3>
                            <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Service Providers</h3>
                            <p>{'We may employ third party companies and individuals to facilitate our Service "Service Providers", to provide the Service on our behalf, to perform Service-related services or to assist us in analysing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.'}</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Analytics</h3>
                            <p>We may use third-party Service Providers to monitor and analyse the use of our Service. Google Analytics Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its advertising network. You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity. For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page.</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Links to Other Sites</h3>
                            <p>{"Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services."}</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">{"Children's Privacy"}</h3>
                            <p>{'Our Service does not address anyone under the age of 18 "Children". We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.'}</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Changes to This Privacy Policy</h3>
                            <p>{'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, before the change becoming effective and update the "effective date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.'}</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Contact Us</h3>
                            <p>If you have any questions about this Privacy Policy, please contact us: By email: info@x-ride.co.uk</p>
                        </div>
                    </div>
                </div>

                <div className="sm:w-[85%] mx-auto">
                    <div className='w-[90%] mx-auto h-5 rounded-b-[10px]  bg-[#193D1C] sm:w-[85%]'>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
     </>
  )
}

export default Page