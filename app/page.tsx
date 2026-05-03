export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Shopify Cart Recovery
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Recover abandoned carts with{" "}
          <span className="text-[#58a6ff]">personalized exit-intent campaigns</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          CartReclaim integrates with your Shopify store via webhooks, analyzes customer behavior, and automatically sends recovery emails with smart discount codes — turning lost sales into revenue.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Recovering Carts — $15/mo
        </a>
        <p className="mt-3 text-sm text-[#6e7681]">No credit card required to start. Cancel anytime.</p>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">15%</div>
            <div className="text-sm text-[#8b949e] mt-1">Avg. recovery rate</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">2 min</div>
            <div className="text-sm text-[#8b949e] mt-1">Setup time</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">$0</div>
            <div className="text-sm text-[#8b949e] mt-1">Per recovered order</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-medium uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Shopify webhook integration</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited recovery emails</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Dynamic discount code generation</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Customer behavior analytics</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Exit-intent campaign builder</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email deliverability dashboard</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does CartReclaim connect to my Shopify store?</h3>
            <p className="text-sm text-[#8b949e]">After subscribing, you install a lightweight Shopify app that registers webhooks for cart creation and abandonment events. No code changes needed — setup takes under 2 minutes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How are discount codes generated?</h3>
            <p className="text-sm text-[#8b949e]">CartReclaim uses the Shopify Admin API to create unique, single-use discount codes per customer. Discount amounts are dynamically optimized based on cart value and customer history to maximize recovery while protecting margins.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription at any time?</h3>
            <p className="text-sm text-[#8b949e]">Yes. You can cancel anytime from your billing dashboard powered by Lemon Squeezy. Your access continues until the end of the current billing period with no cancellation fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} CartReclaim. All rights reserved.
      </footer>
    </main>
  );
}
