class halamanRecruitment {

    kunjungiRecruitment() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.contains('a', 'Recruitment').click()
    }

    bukaCandidates() {
        cy.contains('a', 'Candidates').click()
    }

    bukaVacancies() {
        cy.contains('a', 'Vacancies').click()
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

    verifikasiCandidates() {
        cy.contains('Candidates').should('be.visible')
    }

    verifikasiVacancies() {
        cy.contains('Vacancies').should('be.visible')
    }

    verifikasiHasil(nama) {
        cy.get('.oxd-table-body').should('contain', nama)
    }

    verifikasiTidakAdaHasil() {
        cy.get('body').should('be.visible')
    }

}

export default new halamanRecruitment()