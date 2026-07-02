/**
 * Feriados e dias não úteis por localidade.
 * @type {{ br: typeof import('./br.json'), us: typeof import('./us.json') }}
 */
module.exports = {
    br: require('./br.json'),
    us: require('./us.json')
};
