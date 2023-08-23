export default class HomePage {
	static open() {
		cy.visit('https://www.mercadolibre.com.ar/');
	}

	static typeProduct(product) {
		cy.get('#cb1-edit').type(product, { force: true });
	}

	static submitSearch() {
		cy.get('.nav-search-btn').click();
	}

	static getPagesProducts() {
		return cy.get('.ui-search-layout__item.shops__layout-item').should('be.visible');
	}

	static pressNextPageButton() {
		cy.get('a[title="Siguiente"]').click();
	}
}
