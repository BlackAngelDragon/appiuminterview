import combosPage from '../pageObjects/combos.js';
describe('menu Suit', function () {
    const {height} = driver.getWindosSize(),
              anchorPercentage = 50,
              startpointPercentage = 90,
              endpointPercentage = 10,
              anchor = height * anchorPercentage /100,
              startpoint = height *startpointPercentage / 100,
              endpint = height * endpointPercentage;

    it('should display 4 categories', function () {
        expect(combosPage.combosEspeciales).toBeDisplayed();
        expect(combosPage.combo30CM).toBeDisplayed();
        expect(combosPage.promociones).toBeDisplayed();
        expect(combosPage.especialidades).toBeDisplayed();
    });

    it('should display 4 options in the combos especiales', function () {
        combosPage.combosEspeciales.click();
        expect(combosPage.comboAmigos).toBeDisplayed();
        expect(combosPage.comboAmigosCopia).toBeDisplayed();
        expect(combosPage.comboAmigosCopiaCopia).toBeDisplayed();
        expect(combosPage.footlongDuo).toBeDisplayed();
    });

    it('should swipe and recharge', function () {
        driver.touchPerform([
            {
            action: 'press',
            options: {
                x: anchor,
                y: startpoint
                }
            },
            {
            action: 'wait',
            options: {
                ms: 1000
                }
            },
            {
                action: 'moveTo',
                options: {
                    x: anchor,
                    y: endpint
                }
            },
            {
                action: 'release',
                options: {}
            }
        ])
        expect(combosPage.combosEspeciales).toBeDisplayed();
    });
    

})