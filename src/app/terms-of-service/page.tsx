import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for VOLO JUNK REMOVAL.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose lg:prose-xl text-text-light space-y-4">
        <p>
          <strong>Last Updated: July 25, 2025</strong>
        </p>
        <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
        <p>
          By using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>
        <h2 className="text-2xl font-bold">2. Services</h2>
        <p>
          VOLO JUNK REMOVAL provides junk removal services as described on our website. All quotes are estimates based on the information you provide and are subject to change upon our on-site inspection.
        </p>
        <h2 className="text-2xl font-bold">3. Prohibited Items</h2>
        <p>
          We cannot remove hazardous materials, including but not limited to chemicals, asbestos, oil, and paint. It is your responsibility to inform us of any potentially hazardous materials.
        </p>
        <h2 className="text-2xl font-bold">4. Limitation of Liability</h2>
        <p>
          Our liability for any damages arising from our services is limited to the total amount paid for the service.
        </p>
        <h2 className="text-2xl font-bold">5. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Your continued use of our services constitutes your acceptance of the new terms.
        </p>
        <p className="font-bold text-sm">
          Disclaimer: This is a template Terms of Service. It is not legal advice. You should consult with a legal professional to ensure your terms are compliant with all applicable laws and regulations.
        </p>
      </div>
    </div>
  );
}
