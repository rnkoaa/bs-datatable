/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../utils/min';
import * as i2 from './pagination.component';
import * as i3 from '@angular/forms';
import * as i4 from './table.component';
const styles_DataTablePagination:any[] = ['.pagination-box[_ngcontent-%COMP%] {\n    position: relative;\n    margin-top: -10px;\n}\n.pagination-range[_ngcontent-%COMP%] {\n    margin-top: 7px;\n    margin-left: 3px;\n    display: inline-block;\n}\n.pagination-controllers[_ngcontent-%COMP%] {\n    float: right;\n}\n.pagination-controllers[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    min-width: 60px;\n    \n    text-align: right;\n}\n\n.pagination-limit[_ngcontent-%COMP%] {\n    margin-right: 25px;\n    display: inline-table;\n    width: 150px;\n}\n.pagination-pages[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n.pagination-page[_ngcontent-%COMP%] {\n    width: 110px;\n    display: inline-table;\n}\n.pagination-page[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n    display: inline;\n}\n.pagination-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    outline: none !important;\n}\n.pagination-prevpage[_ngcontent-%COMP%], .pagination-nextpage[_ngcontent-%COMP%], .pagination-firstpage[_ngcontent-%COMP%], .pagination-lastpage[_ngcontent-%COMP%] {\n    vertical-align: top;\n}\n.pagination-reload[_ngcontent-%COMP%] {\n    color: gray;\n    font-size: 12px;\n}'];
export const RenderType_DataTablePagination:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_DataTablePagination,data:{}});
export function View_DataTablePagination_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵpid(0,i1.MinPipe,([] as any[])),(_l()(),i0.ɵted((null as any),
      ['\n'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),69,'div',[['class','pagination-box']],
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      9,'div',[['class','pagination-range']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n        ',':\n        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'span',([] as any[]),[[8,'textContent',
          0]],(null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n        -\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          2,'span',([] as any[]),[[8,'textContent',0]],(null as any),(null as any),
          (null as any),(null as any))),i0.ɵpad(2),i0.ɵppd(1),(_l()(),i0.ɵted((null as any),
          ['\n        /\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'span',([] as any[]),[[8,'textContent',0]],(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n    '])),
      (_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          55,'div',[['class','pagination-controllers']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),15,'div',
          [['class','pagination-limit']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),12,'div',[['class','input-group']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'span',[['class','input-group-addon']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',':'])),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
          i0.ɵeld(0,[['limitInput',1]],(null as any),6,'input',[['class','form-control'],
              ['min','1'],['step','1'],['type','number']],[[2,'ng-untouched',(null as any)],
              [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
                  (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
              [2,'ng-pending',(null as any)]],[[(null as any),'blur'],[(null as any),
              'keyup.enter'],[(null as any),'keyup.esc'],[(null as any),'input'],[(null as any),
              'compositionstart'],[(null as any),'compositionend'],[(null as any),
              'change']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.DataTablePagination = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,25)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,25).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,25)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,25)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('change' === en)) {
              const pd_4:any = ((<any>i0.ɵnov(_v,26).onChange($event.target.value)) !== false);
              ad = (pd_4 && ad);
            }
            if (('input' === en)) {
              const pd_5:any = ((<any>i0.ɵnov(_v,26).onChange($event.target.value)) !== false);
              ad = (pd_5 && ad);
            }
            if (('blur' === en)) {
              const pd_6:any = ((<any>i0.ɵnov(_v,26).onTouched()) !== false);
              ad = (pd_6 && ad);
            }
            if (('blur' === en)) {
              const pd_7:any = ((<any>(_co.limit = i0.ɵnov(_v,24).value)) !== false);
              ad = (pd_7 && ad);
            }
            if (('keyup.enter' === en)) {
              const pd_8:any = ((<any>(_co.limit = i0.ɵnov(_v,24).value)) !== false);
              ad = (pd_8 && ad);
            }
            if (('keyup.esc' === en)) {
              const pd_9:any = ((<any>(i0.ɵnov(_v,24).value = _co.limit)) !== false);
              ad = (pd_9 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i3.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i3.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵdid(16384,(null as any),0,i3.ɵbc,[i0.Renderer2,i0.ElementRef],
          (null as any),(null as any)),i0.ɵprd(1024,(null as any),i3.NG_VALUE_ACCESSOR,
          (p0_0:any,p1_0:any) => {
            return [p0_0,p1_0];
          },[i3.DefaultValueAccessor,i3.ɵbc]),i0.ɵdid(671744,(null as any),0,i3.NgModel,
          [[8,(null as any)],[8,(null as any)],[8,(null as any)],[2,i3.NG_VALUE_ACCESSOR]],
          {model:[0,'model']},(null as any)),i0.ɵprd(2048,(null as any),i3.NgControl,
          (null as any),[i3.NgModel]),i0.ɵdid(16384,(null as any),0,i3.NgControlStatus,
          [i3.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          35,'div',[['class',' pagination-pages']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'button',[['class','btn btn-default pagination-firstpage']],
          [[8,'disabled',0]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.DataTablePagination = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.pageFirst()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['«'])),(_l()(),
          i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'button',[['class','btn btn-default pagination-prevpage']],
          [[8,'disabled',0]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.DataTablePagination = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.pageBack()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['‹'])),(_l()(),
          i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),20,'div',[['class','pagination-page']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),17,
          'div',[['class','input-group']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵeld(0,[['pageInput',1]],(null as any),6,'input',[['class','form-control'],
          ['min','1'],['step','1'],['type','number']],[[8,'max',0],[2,'ng-untouched',
          (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
          [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
              (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'blur'],
          [(null as any),'keyup.enter'],[(null as any),'keyup.esc'],[(null as any),
              'input'],[(null as any),'compositionstart'],[(null as any),'compositionend'],
          [(null as any),'change']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i2.DataTablePagination = _v.component;
        if (('input' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,47)._handleInput($event.target.value)) !== false);
          ad = (pd_0 && ad);
        }
        if (('blur' === en)) {
          const pd_1:any = ((<any>i0.ɵnov(_v,47).onTouched()) !== false);
          ad = (pd_1 && ad);
        }
        if (('compositionstart' === en)) {
          const pd_2:any = ((<any>i0.ɵnov(_v,47)._compositionStart()) !== false);
          ad = (pd_2 && ad);
        }
        if (('compositionend' === en)) {
          const pd_3:any = ((<any>i0.ɵnov(_v,47)._compositionEnd($event.target.value)) !== false);
          ad = (pd_3 && ad);
        }
        if (('change' === en)) {
          const pd_4:any = ((<any>i0.ɵnov(_v,48).onChange($event.target.value)) !== false);
          ad = (pd_4 && ad);
        }
        if (('input' === en)) {
          const pd_5:any = ((<any>i0.ɵnov(_v,48).onChange($event.target.value)) !== false);
          ad = (pd_5 && ad);
        }
        if (('blur' === en)) {
          const pd_6:any = ((<any>i0.ɵnov(_v,48).onTouched()) !== false);
          ad = (pd_6 && ad);
        }
        if (('blur' === en)) {
          const pd_7:any = ((<any>(_co.page = i0.ɵnov(_v,46).value)) !== false);
          ad = (pd_7 && ad);
        }
        if (('keyup.enter' === en)) {
          const pd_8:any = ((<any>(_co.page = i0.ɵnov(_v,46).value)) !== false);
          ad = (pd_8 && ad);
        }
        if (('keyup.esc' === en)) {
          const pd_9:any = ((<any>(i0.ɵnov(_v,46).value = _co.page)) !== false);
          ad = (pd_9 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i3.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i3.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵdid(16384,(null as any),0,i3.ɵbc,[i0.Renderer2,i0.ElementRef],
          (null as any),(null as any)),i0.ɵprd(1024,(null as any),i3.NG_VALUE_ACCESSOR,
          (p0_0:any,p1_0:any) => {
            return [p0_0,p1_0];
          },[i3.DefaultValueAccessor,i3.ɵbc]),i0.ɵdid(671744,(null as any),0,i3.NgModel,
          [[8,(null as any)],[8,(null as any)],[8,(null as any)],[2,i3.NG_VALUE_ACCESSOR]],
          {model:[0,'model']},(null as any)),i0.ɵprd(2048,(null as any),i3.NgControl,
          (null as any),[i3.NgModel]),i0.ɵdid(16384,(null as any),0,i3.NgControlStatus,
          [i3.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          6,'div',[['class','input-group-addon']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['/'])),(_l()(),i0.ɵted((null as any),['\n                        '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),0,'span',([] as any[]),[[8,'textContent',
              0]],(null as any),(null as any),(null as any),(null as any))),(_l()(),
          i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'button',[['class','btn btn-default pagination-nextpage']],
          [[8,'disabled',0]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.DataTablePagination = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.pageForward()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['›'])),(_l()(),
          i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'button',[['class','btn btn-default pagination-lastpage']],
          [[8,'disabled',0]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.DataTablePagination = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.pageLast()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['»'])),(_l()(),
          i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),['\n    '])),
      (_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵted((null as any),['\n']))],
      (_ck,_v) => {
        var _co:i2.DataTablePagination = _v.component;
        const currVal_12:any = _co.limit;
        _ck(_v,28,0,currVal_12);
        const currVal_23:any = _co.page;
        _ck(_v,50,0,currVal_23);
      },(_ck,_v) => {
        var _co:i2.DataTablePagination = _v.component;
        const currVal_0:any = _co.dataTable.translations.paginationRange;
        _ck(_v,5,0,currVal_0);
        const currVal_1:any = (_co.dataTable.offset + 1);
        _ck(_v,6,0,currVal_1);
        const currVal_2:any = i0.ɵunv(_v,8,0,_ck(_v,10,0,i0.ɵnov(_v,0),_ck(_v,9,0,
            (_co.dataTable.offset + _co.dataTable.limit),_co.dataTable.itemCount)));
        _ck(_v,8,0,currVal_2);
        const currVal_3:any = _co.dataTable.itemCount;
        _ck(_v,12,0,currVal_3);
        const currVal_4:any = _co.dataTable.translations.paginationLimit;
        _ck(_v,22,0,currVal_4);
        const currVal_5:any = i0.ɵnov(_v,30).ngClassUntouched;
        const currVal_6:any = i0.ɵnov(_v,30).ngClassTouched;
        const currVal_7:any = i0.ɵnov(_v,30).ngClassPristine;
        const currVal_8:any = i0.ɵnov(_v,30).ngClassDirty;
        const currVal_9:any = i0.ɵnov(_v,30).ngClassValid;
        const currVal_10:any = i0.ɵnov(_v,30).ngClassInvalid;
        const currVal_11:any = i0.ɵnov(_v,30).ngClassPending;
        _ck(_v,24,0,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11);
        const currVal_13:any = (_co.dataTable.offset <= 0);
        _ck(_v,36,0,currVal_13);
        const currVal_14:any = (_co.dataTable.offset <= 0);
        _ck(_v,39,0,currVal_14);
        const currVal_15:any = i0.ɵinlineInterpolate(1,'',_co.maxPage,'');
        const currVal_16:any = i0.ɵnov(_v,52).ngClassUntouched;
        const currVal_17:any = i0.ɵnov(_v,52).ngClassTouched;
        const currVal_18:any = i0.ɵnov(_v,52).ngClassPristine;
        const currVal_19:any = i0.ɵnov(_v,52).ngClassDirty;
        const currVal_20:any = i0.ɵnov(_v,52).ngClassValid;
        const currVal_21:any = i0.ɵnov(_v,52).ngClassInvalid;
        const currVal_22:any = i0.ɵnov(_v,52).ngClassPending;
        _ck(_v,46,0,currVal_15,currVal_16,currVal_17,currVal_18,currVal_19,currVal_20,
            currVal_21,currVal_22);
        const currVal_24:any = _co.dataTable.lastPage;
        _ck(_v,59,0,currVal_24);
        const currVal_25:any = ((_co.dataTable.offset + _co.dataTable.limit) >= _co.dataTable.itemCount);
        _ck(_v,64,0,currVal_25);
        const currVal_26:any = ((_co.dataTable.offset + _co.dataTable.limit) >= _co.dataTable.itemCount);
        _ck(_v,67,0,currVal_26);
      });
}
export function View_DataTablePagination_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'data-table-pagination',
      ([] as any[]),(null as any),(null as any),(null as any),View_DataTablePagination_0,
      RenderType_DataTablePagination)),i0.ɵdid(49152,(null as any),0,i2.DataTablePagination,
      [i4.DataTable],(null as any),(null as any))],(null as any),(null as any));
}
export const DataTablePaginationNgFactory:i0.ComponentFactory<i2.DataTablePagination> = i0.ɵccf('data-table-pagination',
    i2.DataTablePagination,View_DataTablePagination_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3owMDJyZ3Ivd29ya3NwYWNlL3Byb2plY3RzL2FuZ3VsYXItNC1kYXRhLXRhYmxlLWJvb3RzdHJhcC00L3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24uY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL3owMDJyZ3Ivd29ya3NwYWNlL3Byb2plY3RzL2FuZ3VsYXItNC1kYXRhLXRhYmxlLWJvb3RzdHJhcC00L3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvejAwMnJnci93b3Jrc3BhY2UvcHJvamVjdHMvYW5ndWxhci00LWRhdGEtdGFibGUtYm9vdHN0cmFwLTQvc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi5jb21wb25lbnQudHMuRGF0YVRhYmxlUGFnaW5hdGlvbi5odG1sIiwibmc6Ly8vVXNlcnMvejAwMnJnci93b3Jrc3BhY2UvcHJvamVjdHMvYW5ndWxhci00LWRhdGEtdGFibGUtYm9vdHN0cmFwLTQvc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi5jb21wb25lbnQudHMuRGF0YVRhYmxlUGFnaW5hdGlvbl9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tYm94XCI+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcmFuZ2VcIj5cbiAgICAgICAge3tkYXRhVGFibGUudHJhbnNsYXRpb25zLnBhZ2luYXRpb25SYW5nZX19OlxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLm9mZnNldCArIDFcIj48L3NwYW4+XG4gICAgICAgIC1cbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cIltkYXRhVGFibGUub2Zmc2V0ICsgZGF0YVRhYmxlLmxpbWl0ICwgZGF0YVRhYmxlLml0ZW1Db3VudF0gfCBtaW5cIj48L3NwYW4+XG4gICAgICAgIC9cbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5pdGVtQ291bnRcIj48L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tY29udHJvbGxlcnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tbGltaXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj57e2RhdGFUYWJsZS50cmFuc2xhdGlvbnMucGFnaW5hdGlvbkxpbWl0fX06PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dCAjbGltaXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBtaW49XCIxXCIgc3RlcD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbF09XCJsaW1pdFwiIChibHVyKT1cImxpbWl0ID0gbGltaXRJbnB1dC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJsaW1pdCA9IGxpbWl0SW5wdXQudmFsdWVcIiAoa2V5dXAuZXNjKT1cImxpbWl0SW5wdXQudmFsdWUgPSBsaW1pdFwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIiBwYWdpbmF0aW9uLXBhZ2VzXCI+XG4gICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJkYXRhVGFibGUub2Zmc2V0IDw9IDBcIiAoY2xpY2spPVwicGFnZUZpcnN0KClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwYWdpbmF0aW9uLWZpcnN0cGFnZVwiPiZsYXF1bzs8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImRhdGFUYWJsZS5vZmZzZXQgPD0gMFwiIChjbGljayk9XCJwYWdlQmFjaygpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcGFnaW5hdGlvbi1wcmV2cGFnZVwiPiZsc2FxdW87PC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wYWdlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjcGFnZUlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG1pbj1cIjFcIiBzdGVwPVwiMVwiIG1heD1cInt7bWF4UGFnZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cInBhZ2VcIiAoYmx1cik9XCJwYWdlID0gcGFnZUlucHV0LnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJwYWdlID0gcGFnZUlucHV0LnZhbHVlXCIgKGtleXVwLmVzYyk9XCJwYWdlSW5wdXQudmFsdWUgPSBwYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPi88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhc3RQYWdlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQpID49IGRhdGFUYWJsZS5pdGVtQ291bnRcIiAoY2xpY2spPVwicGFnZUZvcndhcmQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tbmV4dHBhZ2VcIj4mcnNhcXVvOzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiKGRhdGFUYWJsZS5vZmZzZXQgKyBkYXRhVGFibGUubGltaXQpID49IGRhdGFUYWJsZS5pdGVtQ291bnRcIiAoY2xpY2spPVwicGFnZUxhc3QoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHBhZ2luYXRpb24tbGFzdHBhZ2VcIj4mcmFxdW87PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iLCI8ZGF0YS10YWJsZS1wYWdpbmF0aW9uPjwvZGF0YS10YWJsZS1wYWdpbmF0aW9uPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3dEQ0FBO01BQUEsU0FDQTtNQUFBLHdFQUE0QjthQUFBLDRCQUN4QjtNQUFBO01BQUEsOEJBQThCO01BRTFCO1VBQUEsOERBQWtEO1VBQUEsNEJBRWxEO1VBQUE7VUFBQSxxQ0FBTSxlQUF3RjtVQUFBLDRCQUU5RjtVQUFBO1VBQUEsOEJBQWlEO01BQy9DLDJDQUNOO1VBQUE7VUFBQSw0Q0FBb0M7VUFBQSxpQkFDaEM7VUFBQTtVQUFBLDhCQUE4QjtNQUMxQjtVQUFBO01BQXlCLHVEQUNyQjtVQUFBO1VBQUEsNENBQWdDO1VBQUEsV0FBa0QsdURBQ2xGO2lCQUFBO2NBQUE7Y0FBQTtrQkFBQTtjQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQ3lCO2NBQUE7Y0FBQTtZQUFBO1lBQ2xCO2NBQUE7Y0FBQTtZQUFBO1lBQXlDO2NBQUE7Y0FBQTtZQUFBO1lBRmhEO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1VBQUEsb0NBQUE7VUFBQTtZQUFBO1VBQUEsMkNBQUE7VUFBQTtVQUFBLDBDQUFBO1VBQUEsbUNBQUE7VUFBQSw0Q0FFd0Y7VUFBQSxxQkFDdEYsK0NBQ0o7aUJBQUEsZ0NBQ047VUFBQTtVQUFBLDhCQUErQjtNQUMzQjtVQUFBO1lBQUE7WUFBQTtZQUEyQztjQUFBO2NBQUE7WUFBQTtZQUEzQztVQUFBLGdDQUE4RyxzQ0FBZ0I7aUJBQUEsb0NBQzlIO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBMkM7Y0FBQTtjQUFBO1lBQUE7WUFBM0M7VUFBQSxnQ0FBNEcsc0NBQWlCO2lCQUFBLG9DQUM3SDtVQUFBO1VBQUEsNENBQTZCO1VBQUEseUJBQ3pCO1VBQUE7VUFBQSw4QkFBeUI7TUFDckI7VUFBQTtVQUFBO1VBQUE7Y0FBQTtVQUFBO2NBQUE7VUFBQTtRQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUN3QjtVQUFBO1VBQUE7UUFBQTtRQUNqQjtVQUFBO1VBQUE7UUFBQTtRQUF1QztVQUFBO1VBQUE7UUFBQTtRQUY5QztNQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBQTtVQUFBLG9DQUFBO1VBQUE7WUFBQTtVQUFBLDJDQUFBO1VBQUE7VUFBQSwwQ0FBQTtVQUFBLG1DQUFBO1VBQUEsNENBRW9GO1VBQUEsNkJBQ3BGO1VBQUE7VUFBQSw4QkFBK0I7TUFDM0I7VUFBQSwwREFBTTtVQUFBLFFBQVEsK0RBQ2Q7aUJBQUE7Y0FBQSw4REFBZ0Q7aUJBQUEsNENBQzlDO1VBQUEseUJBQ0o7TUFDSixtREFDTjtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQWlGO2NBQUE7Y0FBQTtZQUFBO1lBQWpGO1VBQUEsZ0NBQXFKLHNDQUFpQjtpQkFBQSxvQ0FDdEs7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFpRjtjQUFBO2NBQUE7WUFBQTtZQUFqRjtVQUFBLGdDQUFrSixzQ0FBZ0I7aUJBQUEsZ0NBQ2hLO01BQ0osdUNBQ0o7OztRQXRCaUI7UUFEUCxZQUNPLFVBRFA7UUFXVztRQURQLFlBQ08sVUFEUDs7O1FBdEJjO1FBQUE7UUFFcEI7UUFBTixXQUFNLFNBQU47UUFFTTtZQUFBO1FBQU4sV0FBTSxTQUFOO1FBRU07UUFBTixZQUFNLFNBQU47UUFLd0M7UUFBQTtRQUNoQztRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBLFlBQUEsdUVBQUE7UUFNSTtRQUFSLFlBQVEsVUFBUjtRQUNRO1FBQVIsWUFBUSxVQUFSO1FBRzhFO1FBQXRFO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUEsWUFBc0UsV0FBdEU7WUFBQSxxQkFBQTtRQUtVO1FBQU4sWUFBTSxVQUFOO1FBSUo7UUFBUixZQUFRLFVBQVI7UUFDUTtRQUFSLFlBQVEsVUFBUjs7OztvQkNsQ1o7TUFBQTtvQ0FBQSxVQUFBO01BQUE7OzsifQ==
