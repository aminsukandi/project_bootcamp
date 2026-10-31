import halamanRecruitment from '../support/recruitmentPage'

describe('Scenario Verifikasi Fungsi Recruitment', () => {

    //ok
    it('TC01 - Membuka menu Recruitment', () => {
        halamanRecruitment.kunjungiRecruitment()

        halamanRecruitment.verifikasiCandidates()
        // cy.screenshot()
    })

    //ok
    it('TC02 - Membuka menu Candidates', () => {
        halamanRecruitment.kunjungiRecruitment()
        halamanRecruitment.bukaCandidates()

        halamanRecruitment.verifikasiCandidates()
        // cy.screenshot()
    })

    //ok
    it('TC03 - Membuka menu Vacancies', () => {
        halamanRecruitment.kunjungiRecruitment()
        halamanRecruitment.bukaVacancies()

        halamanRecruitment.verifikasiVacancies()
        // cy.screenshot()
    })

    //ok
    it('TC04 - Search kandidat', () => {
        halamanRecruitment.kunjungiRecruitment()
        halamanRecruitment.bukaCandidates()
        halamanRecruitment.masukanNama('Gautham Raj R')

        cy.intercept('GET', '**/api/v2/recruitment/candidates*').as('candidates')
        halamanRecruitment.klikSearch()

        cy.wait('@candidates')
        halamanRecruitment.verifikasiHasil('Gautham Raj R')
        // cy.screenshot()
    })

    //ok
    it('TC05 - Search kandidat tidak ditemukan', () => {
        halamanRecruitment.kunjungiRecruitment()
        halamanRecruitment.bukaCandidates()
        halamanRecruitment.masukanNama('TestingXYZ')

        cy.intercept('GET', '**/api/v2/recruitment/candidates*').as('candidates')
        halamanRecruitment.klikSearch()

        cy.wait('@candidates')
        halamanRecruitment.verifikasiTidakAdaHasil()
        // cy.screenshot()
    })

    //ok
    it('TC06 - Search kandidat kosong', () => {
        halamanRecruitment.kunjungiRecruitment()
        halamanRecruitment.bukaCandidates()

        cy.intercept('GET', '**/api/v2/recruitment/candidates*').as('candidates')
        halamanRecruitment.klikSearch()

        cy.wait('@candidates')
        halamanRecruitment.verifikasiCandidates()
        // cy.screenshot()
    })

    //ok
    it('TC07 - Reset pencarian kandidat', () => {
        halamanRecruitment.kunjungiRecruitment()
        halamanRecruitment.bukaCandidates()
        halamanRecruitment.masukanNama('Tanmay sree Dachu')

        cy.intercept('GET', '**/api/v2/recruitment/candidates*').as('candidates')
        halamanRecruitment.klikReset()

        cy.get('input[placeholder="Type for hints..."]').should('have.value', '')
        // cy.screenshot()
    })

    //ok
    it('TC08 - Memeriksa tombol Add kandidat', () => {
        halamanRecruitment.kunjungiRecruitment()
        halamanRecruitment.bukaCandidates()

        cy.intercept('GET', '**/api/v2/recruitment/candidates*').as('candidates')

        cy.contains('button', 'Add').should('be.visible')
        cy.contains('button', 'Add').should('be.enabled')
        // cy.screenshot()
    })

})
