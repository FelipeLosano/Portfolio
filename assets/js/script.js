const typeWrite = (elemento) => {
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = ' ';
	elemento.innerHTML = '<';
	textoArray.forEach(function (letra, i) {
		setTimeout(function () {
			if (letra === ';') {
				elemento.innerHTML += '>';
			} else {
				elemento.innerHTML += letra;
			}
		}, 75 * i);
	});
};

window.onscroll = () => {
	scrollFunction();
};

const btnTop = document.querySelector('#back-to-top');

const scrollFunction = () => {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		btnTop.style.display = 'block';
	} else {
		btnTop.style.display = 'none';
	}
};

// When the user clicks on the button, scroll to the top of the document
btnTop.addEventListener('click', () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

$('.menu').on('click', () => {
	$('.div-menu').slideToggle();
});

if (window.screen.width <= 768) {
	$('.div-menu li').on('click', () => {
		$('.div-menu').slideUp();
	});
}

const titulo = document.querySelector('.apresentacao-name');
typeWrite(titulo);
