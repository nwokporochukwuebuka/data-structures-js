var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie']

beasts.indexOf('Godzilla');

// another method of doing linear search
beasts.findIndex(function (item) {
    return item === 'Godzilla';
})

// another method
beasts.find(function (item) {
    return item === 'Godzilla';
})

// another method
beasts.includes('Godzilla');