const combosEspeciales = '//*[@text="Combos Especiales"]',
      combo30CM = '//*[@text="combo 30 cm"]',
      promociones = '//*[@text="promociones"]',
      especialidades = '//*[@text="especialidades"]',
      comboAmigos = '//*[@text="Combo Amigos"]',
      comboAmigosCopia = '//*[@text="Combo Amigos - COPIA"]',
      comboAmigosCopiaCopia = '//*[@text="Combo Amigos - COPIA - COPIA"]',
      footlongDuo = '//*[@text="Footlong Duo"]';

class login {
    get combosEspeciales() {
        $(combosEspeciales).waitForDisplay({timeout: 5000});
        return $(combosEspeciales);
    }
    get combosEcombo30CMspeciales() {
        $(combo30CM).waitForDisplay({timeout: 5000});
        return $(combo30CM);
    }
    get promociones() {
        $(promociones).waitForDisplay({timeout: 5000});
        return $(promociones);
    }
    get especialidades() {
        $(especialidades).waitForDisplay({timeout: 5000});
        return $(especialidades);
    }
    get comboAmigos() {
        $(comboAmigos).waitForDisplay({timeout: 5000});
        return $(comboAmigos);
    }
    get comboAmigosCopia() {
        $(comboAmigosCopia).waitForDisplay({timeout: 5000});
        return $(comboAmigosCopia);
    }
    get comboAmigosCopiaCopia() {
        $(comboAmigosCopiaCopia).waitForDisplay({timeout: 5000});
        return $(comboAmigosCopiaCopia);
    }
    get footlongDuo() {
        $(footlongDuo).waitForDisplay({timeout: 5000});
        return $(footlongDuo);
    }
}

export default new login()