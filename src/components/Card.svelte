<div class="bg-white rounded-xl shadow-xl overflow-hidden font-montserrat text-sm">
	<div class="flex flex-col lg:flex-row lg:items-center">
		<picture class="lg:w-1/2">
			<source
				media="(max-width:768px)"
				srcset="/FM-product-preview-card/images/image-product-mobile.jpg"
			/>
			<source
				media="(min-width:1024px)"
				srcset="/FM-product-preview-card/images/image-product-desktop.jpg"
			/>
			<img
				alt="product preview card"
				src="/FM-product-preview-card/images/image-product-mobile.jpg"
			/>
		</picture>
		<div class="p-6 lg:w-1/2 flex flex-col space-y-4">
			<span class="uppercase tracking-[0.25em] text-brand-dark-grayish-blue">Perfume</span>
			<h1 class="font-fraunces font-bold text-3xl text-brand-very-dark-blue leading-none">
				Gabrielle Essence Eau De Parfum
			</h1>
			<p class="leading-relaxed text-brand-dark-grayish-blue">
				A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
				for the House of CHANEL.
			</p>
			<div class="flex items-center space-x-6 pt-3">
				<span class="font-fraunces font-bold text-3xl text-brand-dark-cyan">$149.99 </span>
				<span class="text-sm line-through text-brand-dark-grayish-blue">$169.99</span>
			</div>
			<button
				class="inline-flex items-center justify-center bg-brand-dark-cyan hover:bg-brand-darker-cyan focus:bg-brand-darker-cyan transition-color duration-200 text-white py-3.5 rounded-lg font-medium"
			>
				<img class="mr-3" src="/FM-product-preview-card/images/icon-cart.svg" alt="icon cart" />
				Add to cart
			</button>
		</div>
	</div>
</div>
