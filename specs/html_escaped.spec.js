const eno = require('enojs');
const { htmlEscaped } = require('../loaders.js');

const examples = {
  '<script>alert("boom");</script>' : '&lt;script&gt;alert(&quot;boom&quot;);&lt;&#x2F;script&gt;',
  '&<>"\'/': '&amp;&lt;&gt;&quot;&#39;&#x2F;',
  'eno lang' : 'eno lang',
  'enö läng' : 'enö läng'
};

describe('htmlEscaped loader', () => {
  for(let [value, result] of Object.entries(examples)) {
    describe(value, () => {
      const document = eno.parse(`value: ${value}`);

      it(`returns ${result}`, () => {
        expect(document.field('value', htmlEscaped)).toBe(result);
      });
    });
  }
});
