import { DOCUMENT } from "@angular/common";
import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output } from "@angular/core";
import { filter, fromEvent, Subscription } from "rxjs";

@Directive({
 selector:'[clickedOutside]'   
})
export class clickedOutsideDirective implements AfterViewInit, OnDestroy{
    @Output() clickOutSide = new EventEmitter<void>();
    documentClickSubscription: Subscription | undefined;
    constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document){}
     
    ngAfterViewInit(): void{
        this.documentClickSubscription =fromEvent(this.document, 'click')
        .pipe(filter((event)=> {
            return !this.isInside(event.target as HTMLElement)
         }))
    
     .subscribe(()=>{
       this.clickOutSide.emit()
     });
     } 

     ngOnDestroy(): void {
         this.documentClickSubscription?.unsubscribe();
     }
     isInside(elementTocheck: HTMLElement):boolean{
        return (elementTocheck === this.element.nativeElement || this.element.nativeElement.contains(elementTocheck));
     }
    }
