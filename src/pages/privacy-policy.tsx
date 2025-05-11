import React from 'react';
import Layout from '@/components/Layout/Layout';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-invert max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: May 11, 2025</p>
            
            <div className="mt-8 space-y-6">
              <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
              
              <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

              <h2 className="text-2xl font-bold mt-8">Interpretation and Definitions</h2>
              <h3 className="text-xl font-bold mt-6">Interpretation</h3>
              <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

              <h3 className="text-xl font-bold mt-6">Definitions</h3>
              <p>For the purposes of this Privacy Policy:</p>
              <ul className="list-disc pl-6 space-y-4 mt-4">
                <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Aevitas Production LLP, Vihar Gokul Road Hubali - India 580030.</li>
                <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                <li><strong>Country</strong> refers to: Karnataka, India</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                <li><strong>Website</strong> refers to Medblen, accessible from <a href="https://www.medblen.com" className="text-primary hover:text-primary/80">https://www.medblen.com</a></li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">Collecting and Using Your Personal Data</h2>
              <h3 className="text-xl font-bold mt-6">Types of Data Collected</h3>
              
              <h4 className="text-lg font-bold mt-4">Personal Data</h4>
              <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Usage Data</li>
              </ul>

              <h4 className="text-lg font-bold mt-6">Usage Data</h4>
              <p>Usage Data is collected automatically when using the Service.</p>
              <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

              <h4 className="text-lg font-bold mt-6">Information from Third-Party Social Media Services</h4>
              <p>The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Google</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>

              <h3 className="text-xl font-bold mt-8">Security of Your Personal Data</h3>
              <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

              <h2 className="text-2xl font-bold mt-8">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, You can contact us:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>By email: contact@medblen.co</li>
                <li>By phone number: +91 6362731684</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage; 