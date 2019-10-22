'use strict';

module.exports.test = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Sample test'
      },
      null,
      2
    )
  };
};
