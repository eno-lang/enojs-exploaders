const enumFactory = choices => {
  return ({ name, value }) => {
    value = value.trim();

    if(!choices.includes(value)) {
      throw `'${name}' must be one of ${choices.map(choice => `'${choice}'`).join(', ')}.`;
    }

    return value;
  };
}

const slug = ({ name, value }) => {
  if(!value.match(/^[0-9a-z\-_]+$/)) {
    throw `'${name}' must be a slug.`;
  }

  return value;
};

module.exports = {
  enumFactory,
  slug
};
