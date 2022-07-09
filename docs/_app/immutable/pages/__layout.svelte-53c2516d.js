import {
	S as z,
	i as K,
	s as R,
	F as T,
	e as y,
	k as N,
	t as v,
	G as W,
	c as g,
	d as i,
	m as O,
	a as b,
	h as w,
	b as s,
	H as n,
	g as q,
	I as G,
	J as H,
	K as J,
	r as L,
	p as P
} from '../chunks/index-225d27a1.js';
function j(f) {
	let a, h, r, o, m, l, E, c, $, C, d, F, M, _;
	const k = f[1].default,
		t = T(k, f, f[0], null);
	return {
		c() {
			(a = y('link')),
				(h = N()),
				(r = y('main')),
				(o = y('section')),
				t && t.c(),
				(m = N()),
				(l = y('footer')),
				(E = v('Challenge by ')),
				(c = y('a')),
				($ = v('Frontend Mentor')),
				(C = v(`. Coded by
		`)),
				(d = y('a')),
				(F = v("Wahyu Syamsul A'lam")),
				(M = v('.')),
				this.h();
		},
		l(e) {
			const u = W('[data-svelte="svelte-1syhwdw"]', document.head);
			(a = g(u, 'LINK', { rel: !0, type: !0, sizes: !0, href: !0 })),
				u.forEach(i),
				(h = O(e)),
				(r = g(e, 'MAIN', { class: !0 }));
			var x = b(r);
			o = g(x, 'SECTION', { class: !0 });
			var A = b(o);
			t && t.l(A), A.forEach(i), (m = O(x)), (l = g(x, 'FOOTER', { class: !0 }));
			var p = b(l);
			(E = w(p, 'Challenge by ')), (c = g(p, 'A', { class: !0, href: !0, target: !0 }));
			var S = b(c);
			($ = w(S, 'Frontend Mentor')),
				S.forEach(i),
				(C = w(
					p,
					`. Coded by
		`
				)),
				(d = g(p, 'A', { class: !0, href: !0 }));
			var I = b(d);
			(F = w(I, "Wahyu Syamsul A'lam")),
				I.forEach(i),
				(M = w(p, '.')),
				p.forEach(i),
				x.forEach(i),
				this.h();
		},
		h() {
			(document.title = 'Frontend Mentor | Product preview card component'),
				s(a, 'rel', 'icon'),
				s(a, 'type', 'image/png'),
				s(a, 'sizes', '32x32'),
				s(a, 'href', '/FM-product-preview-card/images/favicon-32x32.png'),
				s(
					o,
					'class',
					'min-h-screen max-w-[325px] lg:max-w-xl mx-auto grid items-center content-center'
				),
				s(c, 'class', 'hover:underline'),
				s(c, 'href', 'https://www.frontendmentor.io?ref=challenge'),
				s(c, 'target', '_blank'),
				s(d, 'class', 'hover:underline'),
				s(d, 'href', 'https://github.com/wahyusa/FM-Rating-Card'),
				s(l, 'class', 'absolute text-center bottom-0 text-xs text-brand-very-dark-blue/40'),
				s(r, 'class', 'bg-brand-cream relative');
		},
		m(e, u) {
			n(document.head, a),
				q(e, h, u),
				q(e, r, u),
				n(r, o),
				t && t.m(o, null),
				n(r, m),
				n(r, l),
				n(l, E),
				n(l, c),
				n(c, $),
				n(l, C),
				n(l, d),
				n(d, F),
				n(l, M),
				(_ = !0);
		},
		p(e, [u]) {
			t && t.p && (!_ || u & 1) && G(t, k, e, e[0], _ ? J(k, e[0], u, null) : H(e[0]), null);
		},
		i(e) {
			_ || (L(t, e), (_ = !0));
		},
		o(e) {
			P(t, e), (_ = !1);
		},
		d(e) {
			i(a), e && i(h), e && i(r), t && t.d(e);
		}
	};
}
function B(f, a, h) {
	let { $$slots: r = {}, $$scope: o } = a;
	return (
		(f.$$set = (m) => {
			'$$scope' in m && h(0, (o = m.$$scope));
		}),
		[o, r]
	);
}
class Q extends z {
	constructor(a) {
		super(), K(this, a, B, j, R, {});
	}
}
export { Q as default };
