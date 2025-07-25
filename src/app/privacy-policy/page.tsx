import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for VOLO JUNK REMOVAL.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose lg:prose-xl text-text-light space-y-4">
        <p>
          <strong>Last Updated: July 25, 2025</strong>
        </p>
        <p>
          VOLO JUNK REMOVAL ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </p>
        <h2 className="text-2xl font-bold">Collection of Your Information</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data, such as your name, phone number, and email address, that you voluntarily give to us when you fill out a contact form.
        </p>
        <h2 className="text-2xl font-bold">Use of Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
          <li>Respond to your requests for quotes and service inquiries.</li>
          <li>Contact you regarding your service request.</li>
          <li>Improve our website and services.</li>
        </ul>
        <h2 className="text-2xl font-bold">Disclosure of Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.
        </p>
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us.
        </p>
        <p className="font-bold text-sm">
          Disclaimer: This is a template Privacy Policy. It is not legal advice. You should consult with a legal professional to ensure your policy is compliant with all applicable laws and regulations.
        </p>
      </div>
    </div>
  );
}
