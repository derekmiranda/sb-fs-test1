// based on JSON API specification
function responseJSON({ data, errors = [] }) {
  // convert single error to array
  if (!Array.isArray(errors)) errors = [errors];
  return {
    data,
    errors,
  };
}

module.exports = responseJSON;
