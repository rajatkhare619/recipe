import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
/**
 * Created by rajat.khare on 03/05/17.
 */
@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}
