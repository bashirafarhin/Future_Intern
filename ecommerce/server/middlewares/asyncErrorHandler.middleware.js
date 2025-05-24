export const asyncErrorHandler = (errorFunction) => (req, res, next) => {
  Promise.resolve(errorFunction(req, res, next)).catch((error) => {
    next(error);
  });
};
