const eno = require('enojs');
const { enumFactory } = require('../loaders.js');

const examples = {
  'eno'  : 'eno',
  'json' : 'json',
  'yaml' : 'yaml',
  'YAML' : false,
  'car'  : false,
  '13'   : false
};

const language = enumFactory(['eno', 'json', 'yaml']);

describe('enum loader', () => {
  for(let [value, result] of Object.entries(examples)) {
    describe(value, () => {
      const document = eno.parse(`value: ${value}`);

      if(result === false) {
        it('throws an error', () => {
          expect(() => document.field('value', language)).toThrowErrorMatchingSnapshot();
        });
      } else {
        it(`returns ${result}`, () => {
          expect(document.field('value', language)).toBe(result);
        });
      }
    });
  }
});
