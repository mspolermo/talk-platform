import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Auth } from "./auth";
import { catchError, switchMap } from "rxjs/operators";
import { throwError } from "rxjs";

let isRefreshing = false;

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(Auth)
  const token = authService.token

  if (!token) return next(req)

  if (isRefreshing) {
    refreshAndProceed(authService, req, next)
  }

  return next(addToken(req, token)).pipe(
    catchError(err => {
      if (err.status === 403) {
        return refreshAndProceed(authService, req, next)
      }
      return throwError(err);
    })
  )
}

const refreshAndProceed = (authService: Auth, req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  if (!isRefreshing) {
    isRefreshing = true

    return authService.refreshAuthToken().pipe(
      switchMap((res) => {
        isRefreshing = false
        return next(addToken(req, res.access_token))
      })
    )
  }

  return next(addToken(req, authService.token!))
}

const addToken = (req: HttpRequest<unknown>, token: string) => {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })
}
