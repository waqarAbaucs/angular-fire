"use strict";(self.webpackChunkemission_calculator=self.webpackChunkemission_calculator||[]).push([[371],{2371:(fe,T,d)=>{d.r(T),d.d(T,{EmissionFormsModule:()=>se});var f=d(6895),y=d(5349),q=d(8142),i=d(433),C=d(7001),e=d(4650);let F=(()=>{class t{constructor(){this.datePipe=new f.uU("en-US")}findObjectByKey(n,l){return n&&n.length>0?n.find(r=>r[l.key]===l.value):null}filterObjectsByKey(n,l){return n&&n.length>0?n.filter(r=>r[l.key]===l.value):[]}filterObjectsByMultipleKeys(n,l){return n&&n.length>0&&l&&l.length>0?n.filter(r=>l.every(a=>r[a.key]===a.value)):[]}filterObjectsByAnyKey(n,l){return n&&n.length>0&&l&&l.length>0?n.filter(r=>l.some(a=>r[a.key]===a.value)):[]}updateObject(n,l,r){const a=n.findIndex(u=>u[l.key]===l.value);return-1!==a&&(n[a]={...n[a],...r},!0)}deleteObject(n,l){const r=n.findIndex(a=>a[l.key]===l.value);return-1!==r&&(n.splice(r,1),!0)}filterObjectsByDateRange(n,l,r,a){return n&&n.length>0&&l&&r&&a?n.filter(u=>{const m=this.datePipe.transform(u[a],"yyyy-MM-dd"),p=this.datePipe.transform(l,"yyyy-MM-dd"),c=this.datePipe.transform(r,"yyyy-MM-dd");return null!=m&&null!=c&&null!=p&&m>=p&&m<=c}):[]}markAllFieldsAsDirtyAndTouched(n){for(const l in n.controls)if(n.controls.hasOwnProperty(l)){const r=n.get(l);r?.markAsDirty(),r?.markAsTouched()}}hasDuplicateValue(n,l,r,a=!1,u){let m=null;return a&&u?(r=r.filter(s=>s[u]!=n[u]),m="string"==typeof n?n.toLowerCase():n[l]):m="string"==typeof n?n.toLowerCase():n,r.map(s=>s[l]).filter(s=>s==m).length>0}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var A=d(8676),U=d(1236);function I(t,o){1&t&&(e.TgZ(0,"small",16),e._uU(1,"Fuel Type Required"),e.qZA())}function x(t,o){1&t&&(e.TgZ(0,"small",16),e._uU(1,"Fuel Required"),e.qZA())}function J(t,o){if(1&t&&(e.TgZ(0,"option",17),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",n," ")}}function Q(t,o){1&t&&(e.TgZ(0,"small",16),e._uU(1,"Unit Required"),e.qZA())}function M(t,o){1&t&&(e.TgZ(0,"small",16),e._uU(1,"Quantity Required"),e.qZA())}function S(t,o){1&t&&(e.TgZ(0,"small",16),e._uU(1," Image Required "),e.qZA())}const v=function(t){return{"is-invalid":t}};let N=(()=>{class t{constructor(){this.unitList=[]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["form-1-1"]],inputs:{form:"form",unitList:"unitList"},decls:38,vars:22,consts:[[1,"form-group",3,"formGroup"],[1,"row","my-3","gap-3","small-font"],[1,"col-md-6","col-lg-3","col-sm-12"],["for","fuel-type",1,"form-label"],[1,"text-danger"],["formControlName","fuelType","id","fuel-type","name","fuel-type",1,"form-control",3,"ngClass"],["class","text text-danger",4,"ngIf"],["for","fuel",1,"form-label"],["formControlName","fuel","id","fuel","name","fuel",1,"form-control",3,"ngClass"],["for","unit",1,"form-label"],["id","unit","formControlName","unit",1,"form-select",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],["for","quantity",1,"form-label"],["formControlName","quantity","type","number","id","quantity","name","quantity",1,"form-control",3,"ngClass"],["for","image",1,"form-label"],["formControlName","attachedImage","type","file","id","image","name","image",1,"form-control",3,"ngClass"],[1,"text","text-danger"],[3,"value"]],template:function(n,l){if(1&n&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Fuel Type "),e.TgZ(5,"span",4),e._uU(6,"*"),e.qZA()(),e._UZ(7,"input",5),e.YNc(8,I,2,0,"small",6),e.qZA(),e.TgZ(9,"div",2)(10,"label",7),e._uU(11,"Fuel "),e.TgZ(12,"span",4),e._uU(13,"*"),e.qZA()(),e._UZ(14,"input",8),e.YNc(15,x,2,0,"small",6),e.qZA(),e.TgZ(16,"div",2)(17,"label",9),e._uU(18,"Unit "),e.TgZ(19,"span",4),e._uU(20,"*"),e.qZA()(),e.TgZ(21,"select",10),e.YNc(22,J,2,2,"option",11),e.qZA(),e.YNc(23,Q,2,0,"small",6),e.qZA(),e.TgZ(24,"div",2)(25,"label",12),e._uU(26,"Quantity "),e.TgZ(27,"span",4),e._uU(28,"*"),e.qZA()(),e._UZ(29,"input",13),e.YNc(30,M,2,0,"small",6),e.qZA(),e.TgZ(31,"div",2)(32,"label",14),e._uU(33,"Attach Image "),e.TgZ(34,"span",4),e._uU(35,"*"),e.qZA()(),e._UZ(36,"input",15),e.YNc(37,S,2,0,"small",6),e.qZA()()()),2&n){let r,a,u,m,p,c,s,g,_,h;e.Q6J("formGroup",l.form),e.xp6(7),e.Q6J("ngClass",e.VKq(12,v,(null==(r=l.form.get("fuelType"))?null:r.touched)&&(null==(r=l.form.get("fuelType"))?null:r.invalid))),e.xp6(1),e.Q6J("ngIf",(null==(a=l.form.get("fuelType"))?null:a.touched)&&(null==(a=l.form.get("fuelType"))?null:a.invalid)),e.xp6(6),e.Q6J("ngClass",e.VKq(14,v,(null==(u=l.form.get("fuel"))?null:u.touched)&&(null==(u=l.form.get("fuel"))?null:u.invalid))),e.xp6(1),e.Q6J("ngIf",(null==(m=l.form.get("fuel"))?null:m.touched)&&(null==(m=l.form.get("fuel"))?null:m.invalid)),e.xp6(6),e.Q6J("ngClass",e.VKq(16,v,(null==(p=l.form.get("unit"))?null:p.touched)&&(null==(p=l.form.get("unit"))?null:p.invalid))),e.xp6(1),e.Q6J("ngForOf",l.unitList),e.xp6(1),e.Q6J("ngIf",(null==(c=l.form.get("unit"))?null:c.touched)&&(null==(c=l.form.get("unit"))?null:c.invalid)),e.xp6(6),e.Q6J("ngClass",e.VKq(18,v,(null==(s=l.form.get("quantity"))?null:s.touched)&&(null==(s=l.form.get("quantity"))?null:s.invalid))),e.xp6(1),e.Q6J("ngIf",(null==(g=l.form.get("quantity"))?null:g.touched)&&(null==(g=l.form.get("quantity"))?null:g.invalid)),e.xp6(6),e.Q6J("ngClass",e.VKq(20,v,(null==(_=l.form.get("attachedImage"))?null:_.touched)&&(null==(_=l.form.get("attachedImage"))?null:_.invalid))),e.xp6(1),e.Q6J("ngIf",(null==(h=l.form.get("attachedImage"))?null:h.touched)&&(null==(h=l.form.get("attachedImage"))?null:h.invalid))}},dependencies:[f.mk,f.sg,f.O5,i._Y,i.YN,i.Kr,i.Fj,i.wV,i.EJ,i.JJ,i.JL,i.sg,i.u]}),t})();function k(t,o){1&t&&(e.TgZ(0,"small",16),e._uU(1,"Transportation Vehicle Required"),e.qZA())}function G(t,o){1&t&&(e.TgZ(0,"small",16),e._uU(1,"Fuel Required"),e.qZA())}function O(t,o){if(1&t&&(e.TgZ(0,"option",17),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",n," ")}}function w(t,o){1&t&&(e.TgZ(0,"small",16),e._uU(1,"Unit Required"),e.qZA())}function Y(t,o){1&t&&(e.TgZ(0,"small",16),e._uU(1,"Quantity Required"),e.qZA())}function L(t,o){1&t&&(e.TgZ(0,"small",16),e._uU(1," Image Required "),e.qZA())}const Z=function(t){return{"is-invalid":t}};let V=(()=>{class t{constructor(){this.unitList=[]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["form-1-2"]],inputs:{form:"form",unitList:"unitList"},decls:36,vars:22,consts:[[1,"form-group",3,"formGroup"],[1,"row","my-3","gap-3","small-font"],[1,"col-md-6","col-lg-3","col-sm-12"],["for","fuel-type",1,"form-label"],["formControlName","transportationVehicle","id","transportation-vehicle","name","transportation-vehicle",1,"form-control",3,"ngClass"],["class","text text-danger",4,"ngIf"],["for","fuel",1,"form-label"],[1,"text-danger"],["formControlName","fuel","id","fuel","name","fuel",1,"form-control",3,"ngClass"],["for","unit",1,"form-label"],["id","unit","formControlName","unit",1,"form-select",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],["for","quantity",1,"form-label"],["formControlName","quantity","type","number","id","quantity","name","quantity",1,"form-control",3,"ngClass"],["for","image",1,"form-label"],["formControlName","attachedImage","type","file","id","image","name","image",1,"form-control",3,"ngClass"],[1,"text","text-danger"],[3,"value"]],template:function(n,l){if(1&n&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Transportation Vehicle"),e.qZA(),e._UZ(5,"input",4),e.YNc(6,k,2,0,"small",5),e.qZA(),e.TgZ(7,"div",2)(8,"label",6),e._uU(9,"Fuel "),e.TgZ(10,"span",7),e._uU(11,"*"),e.qZA()(),e._UZ(12,"input",8),e.YNc(13,G,2,0,"small",5),e.qZA(),e.TgZ(14,"div",2)(15,"label",9),e._uU(16,"Unit "),e.TgZ(17,"span",7),e._uU(18,"*"),e.qZA()(),e.TgZ(19,"select",10),e.YNc(20,O,2,2,"option",11),e.qZA(),e.YNc(21,w,2,0,"small",5),e.qZA(),e.TgZ(22,"div",2)(23,"label",12),e._uU(24,"Quantity "),e.TgZ(25,"span",7),e._uU(26,"*"),e.qZA()(),e._UZ(27,"input",13),e.YNc(28,Y,2,0,"small",5),e.qZA(),e.TgZ(29,"div",2)(30,"label",14),e._uU(31,"Attach Image "),e.TgZ(32,"span",7),e._uU(33,"*"),e.qZA()(),e._UZ(34,"input",15),e.YNc(35,L,2,0,"small",5),e.qZA()()()),2&n){let r,a,u,m,p,c,s,g,_,h;e.Q6J("formGroup",l.form),e.xp6(5),e.Q6J("ngClass",e.VKq(12,Z,(null==(r=l.form.get("fuel"))?null:r.touched)&&(null==(r=l.form.get("fuel"))?null:r.invalid))),e.xp6(1),e.Q6J("ngIf",(null==(a=l.form.get("transportationVehicle"))?null:a.touched)&&(null==(a=l.form.get("transportationVehicle"))?null:a.invalid)),e.xp6(6),e.Q6J("ngClass",e.VKq(14,Z,(null==(u=l.form.get("fuel"))?null:u.touched)&&(null==(u=l.form.get("fuel"))?null:u.invalid))),e.xp6(1),e.Q6J("ngIf",(null==(m=l.form.get("fuel"))?null:m.touched)&&(null==(m=l.form.get("fuel"))?null:m.invalid)),e.xp6(6),e.Q6J("ngClass",e.VKq(16,Z,(null==(p=l.form.get("unit"))?null:p.touched)&&(null==(p=l.form.get("unit"))?null:p.invalid))),e.xp6(1),e.Q6J("ngForOf",l.unitList),e.xp6(1),e.Q6J("ngIf",(null==(c=l.form.get("unit"))?null:c.touched)&&(null==(c=l.form.get("unit"))?null:c.invalid)),e.xp6(6),e.Q6J("ngClass",e.VKq(18,Z,(null==(s=l.form.get("quantity"))?null:s.touched)&&(null==(s=l.form.get("quantity"))?null:s.invalid))),e.xp6(1),e.Q6J("ngIf",(null==(g=l.form.get("quantity"))?null:g.touched)&&(null==(g=l.form.get("quantity"))?null:g.invalid)),e.xp6(6),e.Q6J("ngClass",e.VKq(20,Z,(null==(_=l.form.get("attachedImage"))?null:_.touched)&&(null==(_=l.form.get("attachedImage"))?null:_.invalid))),e.xp6(1),e.Q6J("ngIf",(null==(h=l.form.get("attachedImage"))?null:h.touched)&&(null==(h=l.form.get("attachedImage"))?null:h.invalid))}},dependencies:[f.mk,f.sg,f.O5,i._Y,i.YN,i.Kr,i.Fj,i.wV,i.EJ,i.JJ,i.JL,i.sg,i.u]}),t})();function R(t,o){if(1&t&&(e.TgZ(0,"option",14),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n.value),e.xp6(1),e.hij(" ",n.label," ")}}let P=(()=>{class t{constructor(){this.unitList=[]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["form-1-3"]],inputs:{form:"form",unitList:"unitList"},decls:23,vars:2,consts:[[1,"form-group",3,"formGroup"],[1,"row","my-3","gap-3","small-font"],[1,"col-md-6","col-lg-3","col-sm-12"],["for","fuel-type",1,"form-label"],["formControlName","gasGHG","id","ghg-gas","name","ghg-gas",1,"form-control"],["for","fuel",1,"form-label"],["formControlName","gasQuantity","id","gas-quantity","name","gas-quantity",1,"form-control"],["for","unit",1,"form-label"],["formControlName","unit","id","unit",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],["for","image",1,"form-label"],["formControlName","attachedImage","type","file","id","image","name","image",1,"form-control"],["for","process-type",1,"form-label"],["formControlName","processType","type","text","id","process-type","name","process-type",1,"form-control"],[3,"value"]],template:function(n,l){1&n&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"GHG Gas"),e.qZA(),e._UZ(5,"input",4),e.qZA(),e.TgZ(6,"div",2)(7,"label",5),e._uU(8,"Gas Quantity"),e.qZA(),e._UZ(9,"input",6),e.qZA(),e.TgZ(10,"div",2)(11,"label",7),e._uU(12,"Unit"),e.qZA(),e.TgZ(13,"select",8),e.YNc(14,R,2,2,"option",9),e.qZA()(),e.TgZ(15,"div",2)(16,"label",10),e._uU(17,"Attach Image"),e.qZA(),e._UZ(18,"input",11),e.qZA(),e.TgZ(19,"div",2)(20,"label",12),e._uU(21,"Process Type"),e.qZA(),e._UZ(22,"input",13),e.qZA()()()),2&n&&(e.Q6J("formGroup",l.form),e.xp6(14),e.Q6J("ngForOf",l.unitList))},dependencies:[f.sg,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u]}),t})();function E(t,o){if(1&t&&(e.TgZ(0,"option",12),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n.value),e.xp6(1),e.hij(" ",n.label," ")}}let K=(()=>{class t{constructor(){this.unitList=[]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["form-1-4"]],inputs:{form:"form",unitList:"unitList"},decls:19,vars:2,consts:[[1,"form-group",3,"formGroup"],[1,"row","my-3","gap-3","small-font"],[1,"col-md-6","col-lg-3","col-sm-12"],["for","refrigerant-gas",1,"form-label"],["formControlName","refrigerantGas","id","refrigerant-gas","name","refrigerant-gas",1,"form-control"],["for","gas-quantity",1,"form-label"],["formControlName","gasQuantity","id","gas-quantity","name","gas-quantity",1,"form-control"],["for","unit",1,"form-label"],["formControlName","unit","id","unit",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],["for","image",1,"form-label"],["formControlName","attachedImage","type","file","id","image","name","image",1,"form-control"],[3,"value"]],template:function(n,l){1&n&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Refrigerant Gas"),e.qZA(),e._UZ(5,"input",4),e.qZA(),e.TgZ(6,"div",2)(7,"label",5),e._uU(8,"Gas Quantity"),e.qZA(),e._UZ(9,"input",6),e.qZA(),e.TgZ(10,"div",2)(11,"label",7),e._uU(12,"Unit"),e.qZA(),e.TgZ(13,"select",8),e.YNc(14,E,2,2,"option",9),e.qZA()(),e.TgZ(15,"div",2)(16,"label",10),e._uU(17,"Attach Image"),e.qZA(),e._UZ(18,"input",11),e.qZA()()()),2&n&&(e.Q6J("formGroup",l.form),e.xp6(14),e.Q6J("ngForOf",l.unitList))},dependencies:[f.sg,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u]}),t})();var b=d(4555);let j=(()=>{class t{constructor(){this.cols=[{field:"field1",header:"Sr#"},{field:"field2",header:"Fuel Type"},{field:"field3",header:"Fuel"},{field:"field4",header:"Unit"},{field:"field5",header:"Fuel Quantity"},{field:"field6",header:"GHG Emission Factor"},{field:"field7",header:"GHG Emission"},{field:"field8",header:"Attached Image"},{field:"",header:"Action"}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-table1-1"]],decls:1,vars:2,consts:[[3,"cols","value"]],template:function(n,l){1&n&&e._UZ(0,"app-table",0),2&n&&e.Q6J("cols",l.cols)("value",l.list)},dependencies:[b.a]}),t})(),H=(()=>{class t{constructor(){this.cols=[{field:"field1",header:"Sr#"},{field:"field2",header:"Transportation Vehicle"},{field:"field3",header:"Fuel"},{field:"field4",header:"Unit"},{field:"field5",header:"Fuel Quantity"},{field:"field6",header:"GHG Emission Factor"},{field:"field7",header:"GHG Emission"},{field:"field8",header:"Attached Image"},{field:"",header:"Action"}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-table1-2"]],decls:1,vars:2,consts:[[3,"cols","value"]],template:function(n,l){1&n&&e._UZ(0,"app-table",0),2&n&&e.Q6J("cols",l.cols)("value",l.list)},dependencies:[b.a]}),t})(),B=(()=>{class t{constructor(){this.cols=[{field:"field1",header:"Sr#"},{field:"field2",header:"GHG Gas"},{field:"field4",header:"Unit"},{field:"field5",header:"Gas Quantity"},{field:"field6",header:"GHG Emission Factor"},{field:"field7",header:"GHG Emission"},{field:"field8",header:"Attached Image"},{field:"",header:"Action"}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-table1-3"]],decls:1,vars:2,consts:[[3,"cols","value"]],template:function(n,l){1&n&&e._UZ(0,"app-table",0),2&n&&e.Q6J("cols",l.cols)("value",l.list)},dependencies:[b.a]}),t})(),D=(()=>{class t{constructor(){this.cols=[{field:"field1",header:"Sr#"},{field:"field2",header:"Refrigerant Gas"},{field:"field4",header:"Unit"},{field:"field5",header:"Gas Quantity"},{field:"field6",header:"GHG Emission Factor"},{field:"field7",header:"GHG Emission"},{field:"field8",header:"Attached Image"},{field:"",header:"Action"}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-table1-4"]],decls:1,vars:2,consts:[[3,"cols","value"]],template:function(n,l){1&n&&e._UZ(0,"app-table",0),2&n&&e.Q6J("cols",l.cols)("value",l.list)},dependencies:[b.a]}),t})();function X(t,o){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"form-1-1",17),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("form",n.form1)("unitList",n.unitList)}}function z(t,o){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"form-1-2",17),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("form",n.form2)("unitList",n.unitList)}}function $(t,o){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"form-1-3",17),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("form",n.form3)("unitList",n.unitList)}}function W(t,o){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"form-1-4",17),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("form",n.form4)("unitList",n.unitList)}}function ee(t,o){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"form-1-1",17),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("form",n.form1)("unitList",n.unitList)}}function te(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.prevStep())}),e._uU(1," Previous "),e.qZA()}}function ne(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.nextStep())}),e._uU(1," Next "),e.qZA()}}function le(t,o){1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-table1-1"),e.qZA())}function oe(t,o){1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-table1-2"),e.qZA())}function ie(t,o){1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-table1-3"),e.qZA())}function re(t,o){1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-table1-4"),e.qZA())}function ae(t,o){1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-table1-1"),e.qZA())}const me=[{path:"",component:(()=>{class t{constructor(n,l){this._fb=n,this._utilityService=l,this.activeStepIndex=0,this.formTitle="Form 1.",this.items=[],this.steps=[],this.unitList=["kg","Ltr","mmBtu","HM3"]}ngOnInit(){this.items=[{label:"My Record"},{label:"Create New Record"}],this.steps=[{label:"Step 1",icon:"pi pi-check",command:n=>{}},{label:"Step 2",command:n=>{}},{label:"Step 3",command:n=>{}},{label:"Step 4",command:n=>{}}],this.formsInit()}jumpToStep(n){this.activeStepIndex=n}nextStep(){0==this.activeStepIndex&&this.form1.invalid?this._utilityService.markAllFieldsAsDirtyAndTouched(this.form1):1==this.activeStepIndex&&this.form2.invalid?this._utilityService.markAllFieldsAsDirtyAndTouched(this.form2):2==this.activeStepIndex&&this.form3.invalid?this._utilityService.markAllFieldsAsDirtyAndTouched(this.form3):3==this.activeStepIndex&&this.form4.invalid?this._utilityService.markAllFieldsAsDirtyAndTouched(this.form4):this.activeStepIndex<this.steps.length-1&&this.activeStepIndex++}prevStep(){this.activeStepIndex>0&&this.activeStepIndex--}onSubmit(){console.log("form 1:",this.form1.getRawValue()),console.log("form 2:",this.form2.getRawValue()),console.log("form 3:",this.form3.getRawValue()),console.log("form 4:",this.form4.getRawValue())}formsInit(){this.form1=this._fb.group({fuelType:[null,i.kI.required],fuel:[null,i.kI.required],unit:[null,i.kI.required],quantity:[0,i.kI.required],attachedImage:[null,i.kI.required]}),this.form2=this._fb.group({transportationVehicle:[null,i.kI.required],fuel:[null,i.kI.required],unit:[null,i.kI.required],quantity:[0,i.kI.required],attachedImage:[null,i.kI.required]}),this.form3=this._fb.group({gasGHG:[null,i.kI.required],gasQuantity:[null,i.kI.required],unit:[null,i.kI.required],attachedImage:[null,i.kI.required],processType:[null,i.kI.required]}),this.form4=this._fb.group({refrigerantGas:[null,i.kI.required],gasQuantity:[null,i.kI.required],unit:[null,i.kI.required],attachedImage:[null,i.kI.required]})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(i.qu),e.Y36(F))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-main-form"]],decls:30,vars:16,consts:[[1,"m-4"],[1,"card","p-4"],[1,"flex"],[1,"",3,"model"],[1,"stepper"],[3,"model","activeIndex"],[1,"form-group","pb-4"],[1,"title"],[1,"btn","btn-primary"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"flex","gap-2","justify-content-end","bottom-btn"],[1,"btn","btn-success",3,"click"],["class","btn btn-outline-primary",3,"click",4,"ngIf"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"card","p-4","mt-4"],[3,"form","unitList"],[1,"btn","btn-outline-primary",3,"click"],[1,"btn","btn-primary",3,"click"]],template:function(n,l){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"p-breadcrumb",3),e.qZA(),e.TgZ(4,"div",4),e._UZ(5,"p-steps",5),e.qZA(),e.TgZ(6,"div",6)(7,"div",2)(8,"p",7),e._uU(9),e.qZA(),e.TgZ(10,"button",8),e._uU(11,"Add Record"),e.qZA()(),e.TgZ(12,"div",9),e.YNc(13,X,2,2,"div",10),e.YNc(14,z,2,2,"div",10),e.YNc(15,$,2,2,"div",10),e.YNc(16,W,2,2,"div",10),e.YNc(17,ee,2,2,"div",11),e.qZA(),e.TgZ(18,"div",12)(19,"button",13),e.NdJ("click",function(){return l.onSubmit()}),e._uU(20,"Save"),e.qZA(),e.YNc(21,te,2,0,"button",14),e.YNc(22,ne,2,0,"button",15),e.qZA()()(),e.TgZ(23,"div",16)(24,"div",9),e.YNc(25,le,2,0,"div",10),e.YNc(26,oe,2,0,"div",10),e.YNc(27,ie,2,0,"div",10),e.YNc(28,re,2,0,"div",10),e.YNc(29,ae,2,0,"div",11),e.qZA()()()),2&n&&(e.xp6(3),e.Q6J("model",l.items),e.xp6(2),e.Q6J("model",l.steps)("activeIndex",l.activeStepIndex),e.xp6(4),e.Oqu(l.formTitle+(l.activeStepIndex+1)),e.xp6(3),e.Q6J("ngSwitch",l.activeStepIndex),e.xp6(1),e.Q6J("ngSwitchCase",0),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2),e.xp6(1),e.Q6J("ngSwitchCase",3),e.xp6(5),e.Q6J("ngIf",l.activeStepIndex>0),e.xp6(1),e.Q6J("ngIf",l.activeStepIndex<l.steps.length-1),e.xp6(2),e.Q6J("ngSwitch",l.activeStepIndex),e.xp6(1),e.Q6J("ngSwitchCase",0),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2),e.xp6(1),e.Q6J("ngSwitchCase",3))},dependencies:[f.O5,f.RF,f.n9,f.ED,A.a,U.R,N,V,P,K,j,H,B,D],styles:['.small-font[_ngcontent-%COMP%]{font-size:small}input[_ngcontent-%COMP%]{border-radius:8px}.is-invalid[_ngcontent-%COMP%]{border-color:#dc3545}.card[_ngcontent-%COMP%]{border-radius:0;padding:1rem;margin-top:.5rem}[_nghost-%COMP%]     .title{font-size:24px;font-weight:700;line-height:32.68px;text-align:left;color:#1e1e1e;margin:0}[_nghost-%COMP%]     .flex{display:flex;justify-content:space-between;align-items:center}.bottom-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:3px 30px}[_nghost-%COMP%]     .btn{height:41px;width:146px;top:200px;border-radius:100px;opacity:0px}[_nghost-%COMP%]     .btn-primary{background-color:#0b4ea2;border-color:#0b4ea2}[_nghost-%COMP%]     .btn-success{background-color:#28a745;border-color:#28a745}[_nghost-%COMP%]     .p-breadcrumb .p-menuitem-text{line-height:1;font-size:.6rem}[_nghost-%COMP%]     .pi-chevron-right:before{content:"\\bb"}[_nghost-%COMP%]     .p-breadcrumb ul li .p-menuitem-link .p-menuitem-text:hover{color:#00f;text-decoration:underline}[_nghost-%COMP%]     .p-breadcrumb{background:#ffffff;border:#dee2e6;border-radius:6px;padding:0rem}[_nghost-%COMP%]     .p-steps{text-align:center}[_nghost-%COMP%]     .p-steps .p-steps-item{display:inline-block;position:relative}[_nghost-%COMP%]     .p-steps .p-steps-item:before{content:"";border-top:8px solid #dee2e6}[_nghost-%COMP%]     .p-steps .p-steps-item.p-highlight .p-steps-number{background:#50AE31;color:#fff}']}),t})()}];let ue=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[C.Bz.forChild(me),C.Bz]}),t})(),se=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[f.ez,ue,y.m,q.W,i.UX,i.u5]}),t})()}}]);