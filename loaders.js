const HTML_ESCAPE = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};

exports.enumFactory = choices => {
  return ({ name, value }) => {
    value = value.trim();

    if(!choices.includes(value)) {
      throw `'${name}' must be one of ${choices.map(choice => `'${choice}'`).join(', ')}.`;
    }

    return value;
  };
}

exports.htmlEscaped = ({ value }) => {
  return value.replace(/[&<>"'\/]/g, c => HTML_ESCAPE[c]);
};

exports.slug = ({ name, value }) => {
  if(!value.match(/^[0-9a-z\-_]+$/)) {
    throw `'${name}' must be a slug.`;
  }

  return value;
};
