class halamanDirectory {

    kunjungiDirectory() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.contains('a', 'Directory').click()
    }

    masukanNama(nama) {
        cy.get('input[placeholder="Type for hints..."]').type(nama)
    }

    klikSearch() {
        cy.get('button[type="submit"]').click()
    }

    klikReset() {
        
        cy.get('button[type="reset"]').click()
    cy.get('input[placeholder="Type for hints..."]')
      .clear()
    }

    verifikasiDirectory() {
        cy.contains('h6', 'Directory').should('be.visible')
    }

    verifikasiHasil(nama) {
        cy.get('.orangehrm-directory-card').should('be.visible', nama)
    }

    verifikasiTidakAdaHasil() {
        cy.get('body').should('be.visible', 'No Records Found')
    }

}

export default new halamanDirectory()