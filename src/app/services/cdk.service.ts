import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdkService {

  constructor(
    private readonly breakpointObserver: BreakpointObserver
  ) { }

  get isHandset(): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(res => res.matches),
      shareReplay()
    )
  }
}
