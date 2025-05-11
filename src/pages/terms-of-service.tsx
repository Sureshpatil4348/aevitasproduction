import React from 'react';
import Layout from '@/components/Layout/Layout';
import { motion } from 'framer-motion';

const TermsOfServicePage = () => {
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
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-gray-400">Last updated: May 11, 2025</p>
            <p className="mt-4">Please read these terms and conditions carefully before using Our Service.</p>

            <div className="mt-8 space-y-6">
              <h2 className="text-2xl font-bold mt-8">Interpretation and Definitions</h2>
              <h3 className="text-xl font-bold mt-6">Interpretation</h3>
              <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

              <h3 className="text-xl font-bold mt-6">Definitions</h3>
              <p>For the purposes of these Terms and Conditions:</p>
              <ul className="list-disc pl-6 space-y-4 mt-4">
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong>Country</strong> refers to: Karnataka, India</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Aevitas Production LLP, Vihar Gokul Road Hubali - India 580030.</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
                <li><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
                <li><strong>Website</strong> refers to Medblen, accessible from <a href="https://www.medblen.com" className="text-primary hover:text-primary/80">https://www.medblen.com</a></li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">Acknowledgment</h2>
              <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
              <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
              <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
              <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>

              <h2 className="text-2xl font-bold mt-8">Links to Other Websites</h2>
              <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
              <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

              <h2 className="text-2xl font-bold mt-8">Termination</h2>
              <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
              <p>Upon termination, Your right to use the Service will cease immediately.</p>

              <h2 className="text-2xl font-bold mt-8">Limitation of Liability</h2>
              <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>

              <h2 className="text-2xl font-bold mt-8">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
              <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service.</p>

              <h2 className="text-2xl font-bold mt-8">Governing Law</h2>
              <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>

              <h2 className="text-2xl font-bold mt-8">Contact Us</h2>
              <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>By email: contact@Medblen.com</li>
                <li>By phone number: +91 6362731684</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfServicePage; 