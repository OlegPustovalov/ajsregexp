test('validate login', () => {
    const Validator = require('../validator.js')
    const d = new Validator(`agh329hfg-j_kkljz`)

    const received = d.validateUsername()
    const expected = 'логин корректен'  
    expect(received).toBe(expected)
});

