function addBackgroundParticles() {
	const container = document.getElementById("background-particle-container");
	for (let i=0; i<100; i++) {
		const particle = document.createElement('div');
		const dim = Math.floor(Math.random()*10 + 1)
		particle.style.height = `${dim}vmin`;
		particle.style.width = `${dim}vmin`;
		particle.style.left = `${Math.floor(Math.random()*100)}vw`;
		particle.style.animationDelay = `${Math.floor(Math.random()*20000)*-1}ms`
		if (Math.random() < 0.5) {
			particle.classList.add('background-particle-down');
			particle.style.top = `${Math.random() * 100}vh`;
		}
		else {
			particle.classList.add('background-particle-up');
			particle.style.bottom = `${Math.random() * 100}vh`;
		}
		if (Math.random() < 0.5) {
			particle.style.border = "1vmin solid #FE5F55";
		}
		else {
			particle.style.border = "1vmin solid #EEF5DB";
		}
		particle.style.filter = `blur(${Math.floor(Math.random()*8)+2}px)`;
		container.appendChild(particle);
	}
}

const nameLetterElements = document.getElementsByClassName('large-letter');

for (let i=0; i<nameLetterElements.length; i++) {
	nameLetterElements[i].addEventListener('mouseover', () => {
		nameLetterElements[i].classList.add('large-letter-hover-animation');
	})
	nameLetterElements[i].addEventListener('animationend', () => {
		nameLetterElements[i].classList.remove('large-letter-hover-animation');
	})
}

addBackgroundParticles();