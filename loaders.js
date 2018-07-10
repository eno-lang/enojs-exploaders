const slug = ({ name, value }) => {
  if(!value.match(/^[0-9a-z\-_]+$/)) {
    throw `'${name}' must be a slug.`;
  }

  return value;
};

module.exports = {
  slug
};
