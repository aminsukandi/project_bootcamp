import halamanDirectory from '../support/directoryPage'

describe('Scenario Verifikasi Fungsi Directory', () => {

    //ok
    it('TC01 - Membuka menu Directory', () => {
        halamanDirectory.kunjungiDirectory()

        halamanDirectory.verifikasiDirectory()
        // cy.screenshot()
    })

    //ok
    it('TC02 - Search nama karyawan', () => {
        halamanDirectory.kunjungiDirectory()
        halamanDirectory.masukanNama('Linda Anderson')

        cy.intercept('GET', '**/web/index.php/api/v2/directory/employees*').as('directory')
        halamanDirectory.klikSearch()

        cy.wait('@directory')
        halamanDirectory.verifikasiHasil('Linda Anderson')
        // cy.screenshot()
    })

    //ok
    it('TC03 - Search nama tidak ditemukan', () => {
        halamanDirectory.kunjungiDirectory()
        halamanDirectory.masukanNama('TestingXYZ')

        cy.intercept('GET', '**/web/index.php/api/v2/directory/employees*').as('directory')
        halamanDirectory.klikSearch()

        cy.wait('@directory')
        halamanDirectory.verifikasiTidakAdaHasil()
        // cy.screenshot()
    })

    //ok
    it('TC04 - Search dengan nama kosong', () => {
        halamanDirectory.kunjungiDirectory()

        cy.intercept('GET', '**/web/index.php/api/v2/directory/employees*').as('directory')
        halamanDirectory.klikSearch()

        cy.wait('@directory')
        halamanDirectory.verifikasiDirectory()
        // cy.screenshot()
    })

    //ok
    it('TC05 - Reset pencarian', () => {
        halamanDirectory.kunjungiDirectory()
        halamanDirectory.masukanNama('James Butler')

        cy.intercept('GET', '**/web/index.php/api/v2/directory/employees*').as('directory')
        halamanDirectory.klikReset()

        cy.get('input[placeholder="Type for hints..."]').should('have.value', '')
        // cy.screenshot()
    })

    //ok
    it('TC06 - Search nama sebagian', () => {
        halamanDirectory.kunjungiDirectory()
        halamanDirectory.masukanNama('Linda')

        cy.intercept('GET', '**/web/index.php/api/v2/directory/employees*').as('directory')
        halamanDirectory.klikSearch()

        cy.wait('@directory')
        halamanDirectory.verifikasiDirectory()
        // cy.screenshot()
    })

    //ok
    it('TC07 - Filter Job Title', () => {
        halamanDirectory.kunjungiDirectory()

        cy.get('.oxd-select-text').first().click()
        cy.contains('.oxd-select-option', 'Chief Financial Officer').click()

        cy.intercept('GET', '**/web/index.php/api/v2/directory/employees*').as('directory')
        halamanDirectory.klikSearch()

        cy.wait('@directory')
        halamanDirectory.verifikasiDirectory()
        // cy.screenshot()
    })

    //ok
    it('TC08 - Filter Location', () => {
        halamanDirectory.kunjungiDirectory()

        cy.get('.oxd-select-text').last().click()
        cy.contains('.oxd-select-option', 'New York Sales Office').click()

        cy.intercept('GET', '**/web/index.php/api/v2/directory/employees*').as('directory')
        halamanDirectory.klikSearch()

        cy.wait('@directory')
        halamanDirectory.verifikasiDirectory()
        // cy.screenshot()
    })

})
