
const Privacy = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              At Sudevi Foods Pvt. Ltd., we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we handle your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>To process your orders and provide customer service</li>
              <li>To send you updates about our products and services</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us:<br />
              Sudevi Foods Pvt. Ltd.<br />
              1730/2463/9212, Badakhualanae,<br />
              Near Balangi College, Sunhat Unit No 30,<br />
              Balasore, Odisha - 756002<br />
              Phone: +91 7008172411<br />
              Email: sudevifoods@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
