import Counter from './Counter.svelte';
describe('Counter', function () {
    it('should mount', () => {
        cy.mount(Counter);
    })

    it('should start with default value 0', () => {
        cy.mount(Counter);
        cy.get('[data-test="ui-button"]').invoke('text').should('equals', 'count is 0')
    })

    it('should start with given value 4', () => {
        cy.mount(Counter, { props: { count: 4 } })
        cy.get('[data-test="ui-button"]').invoke('text').should('equals', 'count is 4')
    })

    it('should increment on click', () => {
        cy.mount(Counter);
        cy.get('[data-test="ui-button"]').invoke('text').should('equals', 'count is 0')
        cy.get('[data-test="ui-button"]').click()
        cy.get('[data-test="ui-button"]').click()
        cy.get('[data-test="ui-button"]').invoke('text').should('equals', 'count is 2') // should be 2
    })

});
