Feature: Search for a Product on MercadoLibre Argentina

  Scenario: User searches for a product
    Given The user is on the MercadoLibre Argentina homepage
    When The user enters "camisetas" in the search bar
    Then The user clicks the search button
    Then The save product data for first 3 pages
