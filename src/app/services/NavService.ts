import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class NavService{
    private emitChangeSource = new Subject<any>();
    
    changeEmitted$ = this.emitChangeSource.asObservable();

    emitChange(value: Command) {
        this.emitChangeSource.next(value);
    }
}