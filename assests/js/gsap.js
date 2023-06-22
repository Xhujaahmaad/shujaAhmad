const parts = document.querySelectorAll('.cmenu-item');

const menuAnchor = document.querySelector('#hamburger');
const menuWrapper = document.querySelector('.menu-wrapper');

const tl = gsap.timeline();

menuAnchor.addEventListener('click', function() {
	if (!menuAnchor.classList.contains('is-active')) {
		this.classList.add('is-active');

		tl.to(menuWrapper, {
			y: 0,
			duration: 0.5
		});

		const tl2 = gsap.timeline();

		gsap.set(parts, { y: -150, opacity: 0 });

		parts.forEach((part, i) => {
			tl2.to(
				part,

				{
					y: 0,
					x: Math.random() > 0.5 ? -5 : 5,
					opacity: 1,
					rotate: Math.random() > 0.5 ? -2 : 2,
					ease: 'bounce',
					duration: 1,
					delay: i * -0.05
				},

				`-=${i}* -0.02`
			);
		});

		tl.add(tl2, '-=.2');
	} else {
		this.classList.remove('is-active');

		gsap.to(menuWrapper, {
			y: '-100%',
			duration: 0.5
		});

		gsap.to(parts, {
			opacity: 0,
			duration: 0.2
		});
	}
});

addEventListener('mousemove', e => {
	gsap.to('.inner-wrapper', {
		// rotateY: gsap.utils.mapRange(0, innerWidth, -5, 5, e.pageX),
		// rotateX: gsap.utils.mapRange(0, innerHeight, -5, 5, e.pageY),
		ease: 'power.out'
	});
});
