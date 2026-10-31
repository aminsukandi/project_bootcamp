import halamanLogin from '../support/loginPage'

describe('Scenario Verifikasi Fungsi Login', () => {

    //ok
    it('TC01 - Login dengan username dan password valid', () => {
        halamanLogin.kunjungiHalaman()
        halamanLogin.masukanUsername('Admin')
        halamanLogin.masukanPassword('admin123')

        cy.intercept('POST', '**/auth/validate').as('login')
        halamanLogin.klikTombolLogin()

        cy.wait('@login')
        halamanLogin.verifikasiLoginBerhasil()
        // cy.screenshot()
    })

    //ok
    it('TC02 - Login dengan username salah', () => {
        halamanLogin.kunjungiHalaman()
        halamanLogin.masukanUsername('Amin')
        halamanLogin.masukanPassword('admin123')

        cy.intercept('POST', '**/auth/validate').as('login')
        halamanLogin.klikTombolLogin()

        cy.wait('@login')
        halamanLogin.verifikasiLoginGagal()
        // cy.screenshot()
    })

    //ok
    it('TC03 - Login dengan password salah', () => {
        halamanLogin.kunjungiHalaman()
        halamanLogin.masukanUsername('Admin')
        halamanLogin.masukanPassword('123456')

        cy.intercept('POST', '**/auth/validate').as('login')
        halamanLogin.klikTombolLogin()

        cy.wait('@login')
        halamanLogin.verifikasiLoginGagal()
        // cy.screenshot()
    })

    //ok
    it('TC04 - Login dengan username dan password salah', () => {
        halamanLogin.kunjungiHalaman()
        halamanLogin.masukanUsername('Amin')
        halamanLogin.masukanPassword('123456')

        cy.intercept('POST', '**/auth/validate').as('login')
        halamanLogin.klikTombolLogin()

        cy.wait('@login')
        halamanLogin.verifikasiLoginGagal()
        // cy.screenshot()
    })

    //ok
    it('TC05 - Login dengan username kosong', () => {
        halamanLogin.kunjungiHalaman()
        halamanLogin.masukanPassword('admin123')

        cy.intercept('POST', '**/auth/validate').as('login')
        halamanLogin.klikTombolLogin()

        halamanLogin.verifikasiRequired()
        // cy.screenshot()
    })

    //ok
    it('TC06 - Login dengan password kosong', () => {
        halamanLogin.kunjungiHalaman()
        halamanLogin.masukanUsername('Admin')

        cy.intercept('POST', '**/auth/validate').as('login')
        halamanLogin.klikTombolLogin()

        halamanLogin.verifikasiRequired()
        // cy.screenshot()
    })

    //ok
    it('TC07 - Login dengan semua field kosong', () => {
        halamanLogin.kunjungiHalaman()

        cy.intercept('POST', '**/auth/validate').as('login')
        halamanLogin.klikTombolLogin()

        halamanLogin.verifikasiRequired()
        // cy.screenshot()
    })

    //ok
    it('TC08 - Login dengan username tidak terdaftar', () => {
        halamanLogin.kunjungiHalaman()
        halamanLogin.masukanUsername('Admin123')
        halamanLogin.masukanPassword('admin123')

        cy.intercept('POST', '**/auth/validate').as('login')
        halamanLogin.klikTombolLogin()

        cy.wait('@login')
        halamanLogin.verifikasiLoginGagal()
        // cy.screenshot()
    })

})