const converter = require('./mainProgram');

test('Correct Conversion', () => {
    expect(converter.hexToRgb('#734588')).toEqual(
        expect.objectContaining([
            115, 
            69, 
            136 
        ])
    );
});

test('Correct Length', () => {
    expect(converter.hexToRgb('#734588')).toHaveLength(3)
});

test('', () => {
});

