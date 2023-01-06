'use strict';

const content_01 = {
	element: 'content_01',
	loginPage: 'http://112.164.14.246:48322/toc/login.do',
	movePage: 'http://112.164.14.246:48322/opening/main.do?bigMgIdx=BGM00000001',
	id_target: 'login_id',
	pw_target: 'login_pwd',
	id: 'dev',
	pw: '1234',
	title: 'EMS',
	summary: '계통도',
};

const content_02 = {
	element: 'content_02',
	loginPage: 'http://222.102.213.48:8081/',
	movePage: 'http://222.102.213.48:8081/main/main.do',
	id_target: 'usrId',
	pw_target: 'usrPwd',
	id: 'elsys',
	pw: 'elsys123!@#',
	title: 'ELIS',
	summary: '전력중개시장',
};

const content_03 = {
	element: 'content_03',
	loginPage: 'http://nj2022.iptime.org:13380/3d/main3.do',
	movePage: 'http://nj2022.iptime.org:13380/3d/main3.do',
	id_target: 'login_id',
	pw_target: 'login_pwd',
	id: 'dev',
	pw: '1234',
	title: 'WatchDog TOC',
	summary: '3D',
};

const content_04 = {
	element: 'content_04',
	loginPage: 'https://i-check-cable.com/sys/login.do',
	movePage: 'https://i-check-cable.com/s/dashBoard/home.do',
	id_target: 'login_id',
	pw_target: 'login_pwd',
	id: 'admin',
	pw: 'admin123',
	title: 'i-CHECK',
	summary: '선로유지보수',
};

const content_05 = {
	element: 'content_05',
	loginPage: 'http://xraymng.neufgen.com/',
	movePage: 'http://xraymng.neufgen.com/w/en/business/animal.do',
	id_target: null,
	pw_target: null,
	id: null,
	pw: null,
	title: 'NEUF',
	summary: 'X-ray',
};

const content_06 = {
	element: 'content_06',
	loginPage: 'http://recycle.elsys.info/sys/login.do',
	movePage: 'http://recycle.elsys.info/s/dashboard/main1.do',
	id_target: 'login_id',
	pw_target: 'login_pwd',
	id: 'admin',
	pw: 'admin123',
	title: '굴뚝폐열',
	summary: '선로유지보수',
};

const content_07 = {
	element: 'content_07',
	loginPage: 'http://renfarm.elsys.info/sys/login.do',
	movePage: 'http://renfarm.elsys.info/farm/solar.do?farmCode=1&tableCode=gy',
	id_target: 'login_id',
	pw_target: 'login_pwd',
	id: 'admin',
	pw: 'elsysdev@66^^',
	title: '농작물재생에너지',
	summary: '재생에너지',
};

const contentArray = [content_01, content_02, content_03, content_04, content_05, content_06, content_07];

function openPage(object) {
	console.log('RUN');

	const slider = document.getElementById('slider-content');

	const single = document.createElement('div');
	single.classList.add('slider-single');

	const content = document.createElement('iframe');
	content.id = object.id;
	content.classList.add('slider-single-image');
	content.name = object.title;
	content.src = object.loginPage;
	content.setAttribute('frameborder', 0);

	const title = document.createElement('h1');
	title.classList.add('slider-single-title');
	title.innerHTML = object.title;

	const summary = document.createElement('p');
	summary.classList.add('slider-single-likes');
	summary.innerHTML = object.summary;

	single.appendChild(content);
	single.appendChild(title);
	single.appendChild(summary);

	slider.appendChild(single);

	document.addEventListener('DOMContentLoaded', () => {
		console.log(content);
		const iframe = content.contentDocument;
		console.log(iframe);
		const id = iframe.getElementById(object.id_target);
		const pw = iframe.getElementById(object.pw_target);
		console.log(id);
		console.log(pw);
	});
}

contentArray.forEach((content) => {
	openPage(content);
});
