const eno = require('enojs');
const { slug } = require('../loaders.js');

const examples = {
  'eno-lang-article' : 'eno-lang-article',
  'eno_lang_article' : 'eno_lang_article',
  'eno-lang-article!': false,
  '%eno-lang-article': false,
  'eno lang article' : false,
  'enö-läng-ärticle' : false,
  'énó-láng-ártíclé' : false
};

describe('slug loader', () => {
  for(let [value, result] of Object.entries(examples)) {
    describe(value, () => {
      const document = eno.parse(`value: ${value}`);

      if(result === false) {
        it('throws an error', () => {
          expect(() => document.field('value', slug)).toThrowErrorMatchingSnapshot();
        });
      } else {
        it(`returns ${result}`, () => {
          expect(document.field('value', slug)).toBe(result);
        });
      }
    });
  }
});
