const boolean = ({ name, value }) => {
  const lower = value.trim().toLowerCase();

  if(lower === 'true') return true;
  if(lower === 'false') return false;
  if(lower === 'yes') return true;
  if(lower === 'no') return false;

  throw `${name} can only be true/false or yes/no.`;
};

module.exports = {
  boolean
};
