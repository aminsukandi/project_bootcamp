class halamanLogin {

    kunjungiHalaman() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    masukanUsername(username) {
        cy.get('input[name="username"]').type(username)
    }

    masukanPassword(password) {
        cy.get('input[name="password"]').type(password)
    }

    klikTombolLogin() {
        cy.get('button[type="submit"]').click()
    }

    verifikasiLoginBerhasil() {
        cy.url().should('include', '/dashboard/index')
    }

    verifikasiLoginGagal() {
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
    }

    verifikasiRequired() {
        cy.contains('Required').should('be.visible')
    }

}

export default new halamanLogin()