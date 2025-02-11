
const Shipping = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Shipping Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Shipping Information</h2>
            <p className="mb-4">
              Sudevi Foods Pvt. Ltd. is committed to delivering our products safely and efficiently to your doorstep. We currently ship throughout India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Delivery Timeframes</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Major Cities: 3-5 business days</li>
              <li>Other Cities: 5-7 business days</li>
              <li>Remote Areas: 7-10 business days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Return & Refund Policy</h2>
            <p className="mb-4">
              We have a strict quality control process, but if you receive damaged or defective products, please contact us within 48 hours of delivery.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Contact Information</h2>
            <p className="mb-4">
              For shipping-related queries, please contact us:<br />
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

export default Shipping;
