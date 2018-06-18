const eno = require('enojs');
const loaders = require('../index.js');

describe('boolean', () => {

  let document;

  describe('true/false', () => {
    it("converts 'true' to true", () => {
      document = eno.parse('boolean: true');
      expect(document.field('boolean', loaders.boolean)).toBe(true);
    });

    it("converts 'false' to false", () => {
      document = eno.parse('boolean: false');
      expect(document.field('boolean', loaders.boolean)).toBe(false);
    });
  });

  describe('true/false', () => {
    it("converts 'yes' to true", () => {
      document = eno.parse('boolean: yes');
      expect(document.field('boolean', loaders.boolean)).toBe(true);
    });

    it("converts 'no' to false", () => {
      document = eno.parse('boolean: no');
      expect(document.field('boolean', loaders.boolean)).toBe(false);
    });
  });
});
