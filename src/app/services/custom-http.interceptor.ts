import { HttpInterceptorFn } from '@angular/common/http';

export const customHttpInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
