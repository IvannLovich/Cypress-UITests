import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../page_objects/pages/HomePage';

Given('The user is on the MercadoLibre Argentina homepage', () => {
	HomePage.open();
});

When('The user enters {string} in the search bar', () => {
	HomePage.typeProduct('camisetas');
});

Then('The user clicks the search button', () => {
	HomePage.submitSearch();
});

Then('The save product data for first 3 pages', () => {
	const products = HomePage.getPagesProducts();

	for (let i = 0; i < 2; i++) {
		products.each($element => {
			const productTitle = $element.find('h2').text();
			const productPrice = $element.find('.andes-money-amount__fraction').text();
			const productLink = $element.find('a').attr('href');

			cy.writeFile('info.txt', `${productTitle} - ${productPrice} - ${productLink} \n`, {
				encoding: 'ascii',
				flag: 'a+',
			});
		});

		HomePage.pressNextPageButton();
	}
});
