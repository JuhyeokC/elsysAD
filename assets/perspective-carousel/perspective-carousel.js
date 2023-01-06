document.addEventListener('DOMContentLoaded', () => {
	const repeat = true;
	const noArrows = false;
	const noBullets = false;

	const container = document.querySelector('.slider-container');
	const intervalControlButton = document.querySelector('#slider-interval-control');
	const titleList = document.querySelectorAll('.slider-single-title');
	const logoIcon = document.querySelector('#logo-elsys');

	var slide = document.querySelectorAll('.slider-single');
	var slideTotal = slide.length - 1;
	var slideCurrent = -1;
	var interval;
	var intervalTime = 8000;
	var intervalControl = true;

	function initBullets() {
		if (noBullets) {
			return;
		}
		const bulletContainer = document.createElement('div');
		bulletContainer.classList.add('bullet-container');
		slide.forEach((elem, i) => {
			const bullet = document.createElement('div');
			bullet.classList.add('bullet');
			bullet.id = `bullet-index-${i}`;
			bullet.innerHTML = titleList[i].innerHTML;
			bullet.addEventListener('click', () => {
				goToIndexSlide(i);
			});
			bulletContainer.appendChild(bullet);
			elem.classList.add('proactivede');
		});
		container.appendChild(bulletContainer);
	}

	function initArrows() {
		if (noArrows) {
			return;
		}
		const leftArrow = document.createElement('a');
		// const iLeft = document.createElement('i');
		// iLeft.classList.add('fa');
		// iLeft.classList.add('fa-arrow-left');
		const iLeftImg = document.createElement('img');
		iLeftImg.src = '../assets/img/arrows/icon_angle_left.svg';
		leftArrow.classList.add('slider-left');
		leftArrow.appendChild(iLeftImg);
		leftArrow.addEventListener('click', () => {
			slideLeft();
		});
		const rightArrow = document.createElement('a');
		// const iRight = document.createElement('i');
		// iRight.classList.add('fa');
		// iRight.classList.add('fa-arrow-right');
		const iRightImg = document.createElement('img');
		iRightImg.src = '../assets/img/arrows/icon_angle_right.svg';
		rightArrow.classList.add('slider-right');
		rightArrow.appendChild(iRightImg);
		rightArrow.addEventListener('click', () => {
			slideRight();
		});
		container.appendChild(leftArrow);
		container.appendChild(rightArrow);
	}

	function slideInitial() {
		initBullets();
		initArrows();
		setTimeout(() => {
			slideRight();
			animation();
			timer();
		}, 500);

		eventBinder();
	}

	function updateBullet() {
		if (!noBullets) {
			document
				.querySelector('.bullet-container')
				.querySelectorAll('.bullet')
				.forEach((elem, i) => {
					elem.classList.remove('active');
					if (i === slideCurrent) {
						elem.classList.add('active');
					}
				});
		}
		checkRepeat();
	}

	function checkRepeat() {
		if (!repeat) {
			if (slideCurrent === slide.length - 1) {
				slide[0].classList.add('not-visible');
				slide[slide.length - 1].classList.remove('not-visible');
				if (!noArrows) {
					document.querySelector('.slider-right').classList.add('not-visible');
					document.querySelector('.slider-left').classList.remove('not-visible');
				}
			} else if (slideCurrent === 0) {
				slide[slide.length - 1].classList.add('not-visible');
				slide[0].classList.remove('not-visible');
				if (!noArrows) {
					document.querySelector('.slider-left').classList.add('not-visible');
					document.querySelector('.slider-right').classList.remove('not-visible');
				}
			} else {
				slide[slide.length - 1].classList.remove('not-visible');
				slide[0].classList.remove('not-visible');
				if (!noArrows) {
					document.querySelector('.slider-left').classList.remove('not-visible');
					document.querySelector('.slider-right').classList.remove('not-visible');
				}
			}
		}
	}

	function slideRight() {
		if (slideCurrent < slideTotal) {
			slideCurrent++;
		} else {
			slideCurrent = 0;
		}

		if (slideCurrent > 0) {
			var preactiveSlide = slide[slideCurrent - 1];
		} else {
			var preactiveSlide = slide[slideTotal];
		}
		var activeSlide = slide[slideCurrent];
		if (slideCurrent < slideTotal) {
			var proactiveSlide = slide[slideCurrent + 1];
		} else {
			var proactiveSlide = slide[0];
		}

		slide.forEach((elem) => {
			var thisSlide = elem;
			if (thisSlide.classList.contains('preactivede')) {
				thisSlide.classList.remove('preactivede');
				thisSlide.classList.remove('preactive');
				thisSlide.classList.remove('active');
				thisSlide.classList.remove('proactive');
				thisSlide.classList.add('proactivede');
			}
			if (thisSlide.classList.contains('preactive')) {
				thisSlide.classList.remove('preactive');
				thisSlide.classList.remove('active');
				thisSlide.classList.remove('proactive');
				thisSlide.classList.remove('proactivede');
				thisSlide.classList.add('preactivede');
			}
		});
		preactiveSlide.classList.remove('preactivede');
		preactiveSlide.classList.remove('active');
		preactiveSlide.classList.remove('proactive');
		preactiveSlide.classList.remove('proactivede');
		preactiveSlide.classList.add('preactive');

		activeSlide.classList.remove('preactivede');
		activeSlide.classList.remove('preactive');
		activeSlide.classList.remove('proactive');
		activeSlide.classList.remove('proactivede');
		activeSlide.classList.add('active');

		proactiveSlide.classList.remove('preactivede');
		proactiveSlide.classList.remove('preactive');
		proactiveSlide.classList.remove('active');
		proactiveSlide.classList.remove('proactivede');
		proactiveSlide.classList.add('proactive');

		updateBullet();
		playInterval();
	}

	function slideLeft() {
		if (slideCurrent > 0) {
			slideCurrent--;
		} else {
			slideCurrent = slideTotal;
		}

		if (slideCurrent < slideTotal) {
			var proactiveSlide = slide[slideCurrent + 1];
		} else {
			var proactiveSlide = slide[0];
		}
		var activeSlide = slide[slideCurrent];
		if (slideCurrent > 0) {
			var preactiveSlide = slide[slideCurrent - 1];
		} else {
			var preactiveSlide = slide[slideTotal];
		}
		slide.forEach((elem) => {
			var thisSlide = elem;
			if (thisSlide.classList.contains('proactive')) {
				thisSlide.classList.remove('preactivede');
				thisSlide.classList.remove('preactive');
				thisSlide.classList.remove('active');
				thisSlide.classList.remove('proactive');
				thisSlide.classList.add('proactivede');
			}
			if (thisSlide.classList.contains('proactivede')) {
				thisSlide.classList.remove('preactive');
				thisSlide.classList.remove('active');
				thisSlide.classList.remove('proactive');
				thisSlide.classList.remove('proactivede');
				thisSlide.classList.add('preactivede');
			}
		});

		preactiveSlide.classList.remove('preactivede');
		preactiveSlide.classList.remove('active');
		preactiveSlide.classList.remove('proactive');
		preactiveSlide.classList.remove('proactivede');
		preactiveSlide.classList.add('preactive');

		activeSlide.classList.remove('preactivede');
		activeSlide.classList.remove('preactive');
		activeSlide.classList.remove('proactive');
		activeSlide.classList.remove('proactivede');
		activeSlide.classList.add('active');

		proactiveSlide.classList.remove('preactivede');
		proactiveSlide.classList.remove('preactive');
		proactiveSlide.classList.remove('active');
		proactiveSlide.classList.remove('proactivede');
		proactiveSlide.classList.add('proactive');

		updateBullet();
		playInterval();
	}

	function goToIndexSlide(index) {
		const sliding = slideCurrent > index ? () => slideRight() : () => slideLeft();
		while (slideCurrent !== index) {
			sliding();
		}
		pauseInterval();
	}

	function animation() {
		const bullets = document.querySelectorAll('.bullet');
		bullets.forEach((bullet) => {
			bullet.classList.remove('animate');
		});

		const progressBar = document.querySelector('.bullet.active');
		if (intervalControl) {
			setTimeout(() => {
				progressBar.classList.add('animate');
			}, 32);
		}
	}

	function timer() {
		clearInterval(interval);
		if (intervalControl) {
			interval = setInterval(() => {
				slideRight();
				animation();
			}, intervalTime);
		}
	}

	function playInterval() {
		intervalControlButton.innerHTML = `<img src="../assets/img/icon/icon_pause.svg" />`;
		intervalControl = true;
	}

	function pauseInterval() {
		intervalControlButton.innerHTML = `<img src="../assets/img/icon/icon_play.svg" />`;
		intervalControl = false;
	}

	function toggleInterval() {
		switch (intervalControl) {
			case true:
				pauseInterval();
				break;
			case false:
				playInterval();
				break;
		}
	}

	function refreshPage() {
		window.location.reload();
	}

	function eventBinder() {
		window.addEventListener('click', () => {
			timer();
			animation();
		});

		logoIcon.addEventListener('click', () => {
			refreshPage();
		});

		intervalControlButton.addEventListener('click', () => {
			toggleInterval();
		});
	}

	slideInitial();
});
