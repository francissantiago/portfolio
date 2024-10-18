import{b as pt,c as K,d as $t,f as tt,h as et,i as it,j as ot,k as qt,l as ut,n as Jt,p as gt,q as Ut,r as Yt,s as j,t as R,u as Qt,v as nt,w as A,x as y,y as at,z as ft}from"./chunk-RNF7ASRI.js";import{$ as W,$a as S,Aa as St,D as N,Ga as J,Ha as M,Ia as wt,La as U,M as z,Na as jt,Qa as O,R as V,Ra as I,S as H,Sa as Rt,Ta as Y,U as f,Ua as Q,Va as X,W as c,Wa as h,X as g,Xa as m,Ya as E,Z as _,Za as Ft,_ as G,_a as mt,a as p,ab as Lt,b as At,bb as Bt,cb as Nt,db as zt,eb as w,fa as kt,fb as Vt,ga as Tt,gb as Ht,ha as Mt,hb as b,i as u,ia as C,ka as It,la as $,m as Pt,na as T,ob as Gt,sa as ht,u as B,ua as Et,ub as Z,va as q,vb as Wt,w as xt,x as k,xa as v,ya as l}from"./chunk-FIDHC2BD.js";function le(o,n){}var D=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}};var bt=(()=>{class o extends Yt{constructor(t,e,i,a,r,s,d,x){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=a,this._interactivityChecker=r,this._ngZone=s,this._overlayRef=d,this._focusMonitor=x,this._platform=g($t),this._focusTrap=null,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this._changeDetectorRef=g(Gt),this._injector=g(C),this._isDestroyed=!1,this.attachDomPortal=dt=>{this._portalOutlet.hasAttached();let ae=this._portalOutlet.attachDomPortal(dt);return this._contentAttached(),ae},this._document=i,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{t.removeEventListener("blur",i),t.removeEventListener("mousedown",i),t.removeAttribute("tabindex")};t.addEventListener("blur",i),t.addEventListener("mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_trapFocus(){this._isDestroyed||jt(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement()||this._focusDialogContainer();break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus);break}},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let i=tt(),a=this._elementRef.nativeElement;(!i||i===this._document.body||i===a||a.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){let t=this._elementRef.nativeElement,e=tt();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=tt()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}static{this.\u0275fac=function(e){return new(e||o)(l(T),l(it),l(Z,8),l(D),l(et),l($),l(A),l(ot))}}static{this.\u0275cmp=_({type:o,selectors:[["cdk-dialog-container"]],viewQuery:function(e,i){if(e&1&&Bt(j,7),e&2){let a;Nt(a=zt())&&(i._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,i){e&2&&O("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},standalone:!0,features:[M,b],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,i){e&1&&U(0,le,0,0,"ng-template",0)},dependencies:[j],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2})}}return o})(),F=class{constructor(n,t){this.overlayRef=n,this.config=t,this.closed=new u,this.disableClose=t.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!K(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=n.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(n,t){if(this.containerInstance){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(n),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",t=""){return this.overlayRef.updateSize({width:n,height:t}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}},ce=new f("DialogScrollStrategy",{providedIn:"root",factory:()=>{let o=g(y);return()=>o.scrollStrategies.block()}}),de=new f("DialogData"),he=new f("DefaultDialogConfig");var me=0,yt=(()=>{class o{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(t,e,i,a,r,s){this._overlay=t,this._injector=e,this._defaultOptions=i,this._parentDialog=a,this._overlayContainer=r,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new u,this._afterOpenedAtThisLevel=new u,this._ariaHiddenElements=new Map,this.afterAllClosed=B(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(z(void 0))),this._scrollStrategy=s}open(t,e){let i=this._defaultOptions||new D;e=p(p({},i),e),e.id=e.id||`cdk-dialog-${me++}`,e.id&&this.getDialogById(e.id);let a=this._getOverlayConfig(e),r=this._overlay.create(a),s=new F(r,e),d=this._attachContainer(r,s,e);return s.containerInstance=d,this._attachDialogContent(t,s,d,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){_t(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){_t(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),_t(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new Qt({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,i){let a=i.injector||i.viewContainerRef?.injector,r=[{provide:D,useValue:i},{provide:F,useValue:e},{provide:A,useValue:t}],s;i.container?typeof i.container=="function"?s=i.container:(s=i.container.type,r.push(...i.container.providers(i))):s=bt;let d=new gt(s,i.viewContainerRef,C.create({parent:a||this._injector,providers:r}),i.componentFactoryResolver);return t.attach(d).instance}_attachDialogContent(t,e,i,a){if(t instanceof St){let r=this._createInjector(a,e,i,void 0),s={$implicit:a.data,dialogRef:e};a.templateContext&&(s=p(p({},s),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),i.attachTemplatePortal(new Ut(t,null,s,r))}else{let r=this._createInjector(a,e,i,this._injector),s=i.attachComponentPortal(new gt(t,a.viewContainerRef,r,a.componentFactoryResolver));e.componentRef=s,e.componentInstance=s.instance}}_createInjector(t,e,i,a){let r=t.injector||t.viewContainerRef?.injector,s=[{provide:de,useValue:t.data},{provide:F,useValue:e}];return t.providers&&(typeof t.providers=="function"?s.push(...t.providers(e,t,i)):s.push(...t.providers)),t.direction&&(!r||!r.get(ut,null,{optional:!0}))&&s.push({provide:ut,useValue:{value:t.direction,change:Pt()}}),C.create({parent:r||a,providers:s})}_removeOpenDialog(t,e){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,r)=>{a?r.setAttribute("aria-hidden",a):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){let t=this._overlayContainer.getContainerElement();if(t.parentElement){let e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let a=e[i];a!==t&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static{this.\u0275fac=function(e){return new(e||o)(c(y),c(C),c(he,8),c(o,12),c(nt),c(ce))}}static{this.\u0275prov=V({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();function _t(o,n){let t=o.length;for(;t--;)n(o[t])}var Xt=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=G({type:o})}static{this.\u0275inj=H({providers:[yt],imports:[at,R,qt,R]})}}return o})();function pe(o,n){}var L=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}},Dt="mdc-dialog--open",Zt="mdc-dialog--opening",Kt="mdc-dialog--closing",ue=150,ge=75,fe=(()=>{class o extends bt{constructor(t,e,i,a,r,s,d,x,dt){super(t,e,i,a,r,s,d,dt),this._animationMode=x,this._animationStateChanged=new It,this._animationsEnabled=this._animationMode!=="NoopAnimations",this._actionSectionCount=0,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?ee(this._config.enterAnimationDuration)??ue:0,this._exitAnimationDuration=this._animationsEnabled?ee(this._config.exitAnimationDuration)??ge:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(te,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Zt,Dt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Dt),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Dt),this._animationsEnabled?(this._hostElement.style.setProperty(te,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Kt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(Zt,Kt)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static{this.\u0275fac=function(e){return new(e||o)(l(T),l(it),l(Z,8),l(L),l(et),l($),l(A),l(ht,8),l(ot))}}static{this.\u0275cmp=_({type:o,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,i){e&2&&(mt("id",i._config.id),O("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),Rt("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},standalone:!0,features:[M,b],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,i){e&1&&(h(0,"div",0)(1,"div",1),U(2,pe,0,0,"ng-template",2),m()())},dependencies:[j],styles:['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],encapsulation:2})}}return o})(),te="--mat-dialog-transition-duration";function ee(o){return o==null?null:typeof o=="number"?o:o.endsWith("ms")?pt(o.substring(0,o.length-2)):o.endsWith("s")?pt(o.substring(0,o.length-1))*1e3:o==="0"?0:null}var st=function(o){return o[o.OPEN=0]="OPEN",o[o.CLOSING=1]="CLOSING",o[o.CLOSED=2]="CLOSED",o}(st||{}),P=class{constructor(n,t,e){this._ref=n,this._containerInstance=e,this._afterOpened=new u,this._beforeClosed=new u,this._state=st.OPEN,this.disableClose=t.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(k(i=>i.state==="opened"),N(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(k(i=>i.state==="closed"),N(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),xt(this.backdropClick(),this.keydownEvents().pipe(k(i=>i.keyCode===27&&!this.disableClose&&!K(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),_e(this,i.type==="keydown"?"keyboard":"mouse"))})}close(n){this._result=n,this._containerInstance._animationStateChanged.pipe(k(t=>t.state==="closing"),N(1)).subscribe(t=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=st.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let t=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?t.left(n.left):t.right(n.right):t.centerHorizontally(),n&&(n.top||n.bottom)?n.top?t.top(n.top):t.bottom(n.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",t=""){return this._ref.updateSize(n,t),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=st.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function _e(o,n,t){return o._closeInteractionType=n,o.close(t)}var Ot=new f("MatMdcDialogData"),Ce=new f("mat-mdc-dialog-default-options"),ve=new f("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let o=g(y);return()=>o.scrollStrategies.block()}});var be=0,rt=(()=>{class o{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(t,e,i,a,r,s,d,x){this._overlay=t,this._defaultOptions=a,this._scrollStrategy=r,this._parentDialog=s,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new u,this._afterOpenedAtThisLevel=new u,this.dialogConfigClass=L,this.afterAllClosed=B(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(z(void 0))),this._dialog=e.get(yt),this._dialogRefConstructor=P,this._dialogContainerType=fe,this._dialogDataToken=Ot}open(t,e){let i;e=p(p({},this._defaultOptions||new L),e),e.id=e.id||`mat-mdc-dialog-${be++}`,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(t,At(p({},e),{positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:D,useValue:e}]},templateContext:()=>({dialogRef:i}),providers:(r,s,d)=>(i=new this._dialogRefConstructor(r,e,d),i.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:d},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=a.componentRef,i.componentInstance=a.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(i);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static{this.\u0275fac=function(e){return new(e||o)(c(y),c(C),c(Wt,8),c(Ce,8),c(ve),c(o,12),c(nt),c(ht,8))}}static{this.\u0275prov=V({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})(),ye=0;var De=(()=>{class o{constructor(t,e,i){this._dialogRef=t,this._elementRef=e,this._dialog=i}ngOnInit(){this._dialogRef||(this._dialogRef=Oe(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static{this.\u0275fac=function(e){return new(e||o)(l(P,8),l(T),l(rt))}}static{this.\u0275dir=W({type:o,standalone:!0})}}return o})(),ie=(()=>{class o extends De{constructor(){super(...arguments),this.id=`mat-mdc-dialog-title-${ye++}`}_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static{this.\u0275fac=(()=>{let t;return function(i){return(t||(t=Mt(o)))(i||o)}})()}static{this.\u0275dir=W({type:o,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,i){e&2&&mt("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],standalone:!0,features:[M]})}}return o})(),oe=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275dir=W({type:o,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],standalone:!0,features:[wt([Jt])]})}}return o})();function Oe(o,n){let t=o.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?n.find(e=>e.id===t.id):null}var lt=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=G({type:o})}static{this.\u0275inj=H({providers:[rt],imports:[Xt,at,R,ft,ft]})}}return o})();function xe(o,n){if(o&1&&(h(0,"a",4),w(1),m()),o&2){let t=n.$implicit;I("href",t.href,q),v(),Ht(" ",t.name," ")}}var ct=class o{constructor(n,t){this._dialogRef=n;this._data=t}getData=J(null);ngOnInit(){this.getData.set(this._data)}closeModal(){return this._dialogRef.close()}static \u0275fac=function(t){return new(t||o)(l(P),l(Ot))};static \u0275cmp=_({type:o,selectors:[["app-dialog-projects"]],standalone:!0,features:[b],decls:10,vars:2,consts:[["mat-dialog-title",""],[3,"click"],["src","assets/icons/dialog/close.svg","alt","Bot\xE3o para fechar o dialog"],[3,"innerHTML"],["target","_blank",1,"btn","btn-primary",3,"href"]],template:function(t,e){if(t&1&&(h(0,"header")(1,"h2",0),w(2),m(),h(3,"button",1),S("click",function(){return e.closeModal()}),E(4,"img",2),m()(),h(5,"mat-dialog-content"),E(6,"article",3),h(7,"nav"),Q(8,xe,2,2,"a",4,Y),m()()),t&2){let i,a,r;v(2),Vt((i=e.getData())==null?null:i.title),v(4),I("innerHTML",(a=e.getData())==null?null:a.description,Et),v(2),X((r=e.getData())==null?null:r.links)}},dependencies:[lt,ie,oe],styles:[".dialog-container-projects .mdc-dialog__container{width:900px!important}[_nghost-%COMP%]{padding:10px 30px;display:flex;flex-direction:column}[_nghost-%COMP%]   header[_ngcontent-%COMP%], [_nghost-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]{padding:0;margin:0 0 15px}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px!important;padding:0;margin:0;color:var(--black-010);font-weight:600}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;padding:0;cursor:pointer}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px!important;color:var(--black-010)}[_nghost-%COMP%]   article[_ngcontent-%COMP%]{margin-bottom:15px}[_nghost-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px!important}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding-top:10px}"]})};function ke(o,n){if(o&1){let t=Ft();h(0,"li")(1,"button",1),S("click",function(){let i=kt(t).$implicit,a=Lt();return Tt(a.openDialog(i))}),E(2,"img",2),m()()}if(o&2){let t=n.$implicit;v(2),I("src",t.src,q)("alt",t.alt),O("width",t.width)("height",t.height)}}var ne=class o{#t=g(rt);arrayProjects=J([{src:"assets/img/projects/sperocoin.png",alt:"SperoCoin",title:"SperoCoin",width:"100px",height:"51px",description:"A <b>SperoCoin</b> \xE9 um projeto de criptomoeda com algoritmo x13 com blockchain pr\xF3pria.<br>        O projeto foi lan\xE7ado em 2017, sendo mantido at\xE9 os dias atuais.<br>        A inten\xE7\xE3o deste projeto \xE9 reduzir diferen\xE7as econ\xF4micas e sociais entre a popula\xE7\xE3o, sendo que, ao mesmo tempo,        elas s\xE3o expostas ao aprendizado de utiliza\xE7\xE3o de uma criptomoeda e seu sistema descentralizado.",links:[{name:"ACESSAR PROJETO",href:"https://github.com/LightBurdenOfficial/SperoCoin/"}]},{src:"assets/img/projects/blackfineburguer.png",alt:"BlackFine Burguer",title:"BlackFine Burguer",width:"100px",height:"51px",description:"Primeira aplica\xE7\xE3o de delivery desenvolvida em PHP/PWA em 2022 de forma comercial.<br>        O projeto envolve m\xFAltiplas \xE1reas de conhecimento como banco de dados, sistema de notitfica\xE7\xF5es, gerenciamento de perfis de usu\xE1rio, cupons de desconto,        dentre outras funcionalidades.",links:[{name:"ACESSAR PROJETO",href:"https://app.blackfineburguer.com.br/"}]},{src:"assets/img/projects/ekklesia.png",alt:"Ekklesia",title:"Ekklesia",width:"100px",height:"51px",description:"Aplica\xE7\xE3o para gerenciamento de igrejas desenvolvida em PHP/PWA, onde a finalidade da aplica\xE7\xE3o \xE9 reunir informa\xE7\xF5es de membros e compartilhamento entre        as igrejas.<br>        A finalidade \xE9 reduzir os golpes e falsos membros dentro dos minist\xE9rios em comum.",links:[{name:"ACESSAR PROJETO",href:"https://app-ekklesia.lightburden.net/"}]},{src:"assets/img/projects/pagseguro.png",alt:"Checkout Transparente PagSeguro - Cart\xE3o de Cr\xE9dito",title:"Checkout Transparente PagSeguro - Cart\xE3o de Cr\xE9dito",width:"100px",height:"51px",description:"Biblioteca PHP para aceita\xE7\xE3o de pagamentos via PagSeguro na fun\xE7\xE3o Cr\xE9dito",links:[{name:"ACESSAR PROJETO",href:"https://github.com/francissantiago/Checkout_Transparente_Credito/"}]},{src:"assets/img/projects/pagseguro.png",alt:"Checkout Transparente PagSeguro - Cart\xE3o de D\xE9bito",title:"Checkout Transparente PagSeguro - Cart\xE3o de D\xE9bito",width:"100px",height:"51px",description:"Biblioteca PHP para aceita\xE7\xE3o de pagamentos via PagSeguro na fun\xE7\xE3o D\xE9bito",links:[{name:"ACESSAR PROJETO",href:"https://github.com/francissantiago/Checkout_Transparente_Debito/"}]},{src:"assets/img/projects/pagseguro.png",alt:"Checkout Transparente PagSeguro - PIX",title:"Checkout Transparente PagSeguro - PIX",width:"100px",height:"51px",description:"Biblioteca PHP para aceita\xE7\xE3o de pagamentos via PagSeguro na fun\xE7\xE3o PIX",links:[{name:"ACESSAR PROJETO",href:"https://github.com/francissantiago/Checkout_Transparente_PIX/"}]},{src:"assets/img/projects/bitcoin.png",alt:"Premia\xE7\xE3o de participa\xE7\xE3o no projeto Bitcoin",title:"Premia\xE7\xE3o de participa\xE7\xE3o no projeto Bitcoin",width:"100px",height:"51px",description:"Participa\xE7\xE3o, sendo destaque no m\xEAs de Fevereiro de 2022, nas tradu\xE7\xF5es de trechos na documenta\xE7\xE3o oficial do Bitcoin.",links:[{name:"VER PREMIA\xC7\xC3O",href:"https://drive.google.com/drive/folders/1vHb-FglGxAVtNtnK3XhNzlu04WeDLrH1/"}]},{src:"assets/img/projects/fanaticos.png",alt:"Fan\xE1ticos Cash",title:"Fan\xE1ticos Cash",width:"100px",height:"51px",description:"Desenvolvimento de criptomoeda com blockchain pr\xF3pria.",links:[{name:"ACESSAR PROJETO",href:"https://github.com/fanaticoscriptosoficial/Fanaticos_Cash"}]},{src:"assets/img/projects/mousecoin.png",alt:"MouseCoin",title:"MouseCoin",width:"100px",height:"51px",description:"Desenvolvimento de criptomoeda com blockchain pr\xF3pria.",links:[{name:"ACESSAR PROJETO",href:"https://github.com/Mousecoin-Network/Mousecoin-2.0/commits?author=LightBurdenOfficial&since=2022-03-01&until=2022-04-01"}]},{src:"assets/img/projects/radiomemory.png",alt:"XWork Connect PHP",title:"XWork Connect PHP",width:"100px",height:"51px",description:"Uma biblioteca para gerenciar conex\xF5es com banco de dados XWF e Firebird na aplica\xE7\xE3o Gest\xE3o Profissional da empresa Radio Memory.",links:[{name:"ACESSAR PROJETO",href:"https://github.com/francissantiago/xWorkConnect-PHP"}]}]);openDialog(n){this.#t.open(ct,{data:n,panelClass:"dialog-container-projects"})}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=_({type:o,selectors:[["app-projects"]],standalone:!0,features:[b],decls:6,vars:0,consts:[[1,"container"],[3,"click"],["loading","lazy",3,"src","alt"]],template:function(t,e){t&1&&(h(0,"div",0)(1,"h2"),w(2,"PROJETOS DESENVOLVIDOS"),m(),h(3,"ul"),Q(4,ke,3,4,"li",null,Y),m()()),t&2&&(v(4),X(e.arrayProjects()))},dependencies:[lt],styles:["[_nghost-%COMP%]{margin-top:25px;padding:25px 0;display:flex;justify-content:center;align-items:center;flex-direction:column;background:var(--black-010)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;margin:0 0 25px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:20px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:20%;width:140px;height:110px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:100%;cursor:pointer;background:var(--black-010);border:2px solid var(--primary);border-radius:7px;transition:.5s}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--primary-010)}@media (max-width: 750px){[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:100%}}"]})};export{ne as ProjectsComponent};