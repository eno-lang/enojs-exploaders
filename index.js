const boolean = ({ name, value }) => {
  const lower = value.trim().toLowerCase();

  if(lower === 'true') return true;
  if(lower === 'false') return false;
  if(lower === 'yes') return true;
  if(lower === 'no') return false;

  throw `'${name}' can only be true/false or yes/no.`;
};

const email = ({ name, value }) => {
  if(!value.match(/^\s*[^@\s]+@[^@\s]+\.[^@\s]+\s*$/)) {
    throw `'${name}' must be an email adress.`;
  }

  return value;
};

const float = ({ name, value }) => {
  if(!value.match(/^\s*-?\d+(\.\d+)?\s*$/)) {
    throw `'${name}' must be a float.`;
  }

  return parseFloat(value);
};

const integer = ({ name, value }) => {
  if(!value.match(/^\s*-?\d+\s*$/)) {
    throw `'${name}' must be an integer.`;
  }

  return parseInt(value);
};

const latLng = ({ name, value }) => {
  const match = /(\d+\.\d+),\s*(\d+\.\d+)/.exec(value);

  if(!match) {
    throw `'${name}' must contain lat/lng coordinates formatted xx.xxxxxx, xx.xxxxxx`;
  }

  return { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };
};

module.exports = {
  boolean,
  email,
  float,
  integer,
  latLng,
  number: integer
};
