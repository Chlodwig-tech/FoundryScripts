function chudy_change_roll(result){
    if(result >= 90 && result < 100){
        result -= 80;
    }
    if(result % 10 === 1){
        result = parseInt(8) + parseInt(result);
    }
    return result;
}


function chudy_hook(testData, cardOptions){
    var target = testData.result.target;
    var roll = chudy_change_roll(testData.result.roll);
    var SL = Math.floor(target / 10) - Math.floor(roll / 10) + testData.result.slBonus;

    testData.result.roll = roll;
    testData.result.SL = SL;

    const descriptions = [
        { min: 6, description: 'Zdumiewający Sukces. "Tak! Idealnie!"' },
        { min: 4, description: 'Imponujący Sukces. "Tak, i..."' },
        { min: 2, description: 'Sukces. "Tak."' },
        { min: 0, description: 'Znikomy Sukces. "Tak, ale..."' },
        { min: -1, description: 'Znikoma Porażka. "Nie, ale..."' },
        { min: -3, description: 'Porażka. "Nie."' },
        { min: -5, description: 'Krytyczna Porażka. "Nie, i..."' },
        { min: -Infinity, description: 'Zdumiewająca Porażka. "Nie, nie ma mowy!"' }
    ];
    
    testData.result.description = descriptions.find(d => SL >= d.min).description;
    
}

Hooks.on('wfrp4e:rollTest', chudy_hook);
alert('Szczęśliwe kości Chudegoo zainstalowano pomyślnie');
