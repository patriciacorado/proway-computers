"use strict";(self.webpackChunkprojeto_angular=self.webpackChunkprojeto_angular||[]).push([[582],{7582:(v,u,i)=>{i.r(u),i.d(u,{CarrinhoModule:()=>x});var l=i(6895),s=i(9541),n=(i(6684),i(1571)),p=i(5087),c=i(433);function C(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"li"),n._UZ(1,"img",6),n.TgZ(2,"p"),n._uU(3),n.qZA(),n.TgZ(4,"p"),n._uU(5),n.ALo(6,"currency"),n.qZA(),n.TgZ(7,"label"),n._uU(8," Quantidade: "),n.TgZ(9,"input",7),n.NdJ("ngModelChange",function(a){const h=n.CHM(t).$implicit;return n.KtG(h.quantidadeSelecionada=a)})("change",function(){n.CHM(t);const a=n.oxw(2);return n.KtG(a.calculaTotal())}),n.qZA()(),n.TgZ(10,"button",8),n.NdJ("click",function(){const d=n.CHM(t).$implicit,h=n.oxw(2);return n.KtG(h.removerProdutoCarrinho(d.id))}),n._UZ(11,"i",9),n.qZA()()}if(2&o){const t=e.$implicit;n.xp6(3),n.Oqu(t.descricao),n.xp6(2),n.hij("Pre\xe7o: ",n.xi3(6,3,t.preco,"BRL"),""),n.xp6(4),n.Q6J("ngModel",t.quantidadeSelecionada)}}function g(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"div")(1,"ul"),n.YNc(2,C,12,6,"li",3),n.qZA(),n.TgZ(3,"h2",4),n._uU(4),n.ALo(5,"currency"),n.qZA(),n.TgZ(6,"button",5),n.NdJ("click",function(){n.CHM(t);const a=n.oxw();return n.KtG(a.comprar())}),n._uU(7,"Comprar"),n.qZA()()}if(2&o){const t=n.oxw();n.xp6(2),n.Q6J("ngForOf",t.itensCarrinho),n.xp6(2),n.hij("Total: ",n.xi3(5,2,t.total,"BRL"),"")}}function m(o,e){1&o&&n._uU(0,"Nenhum Produto foi adicionado ao carrinho.")}const f=[{path:"",component:(()=>{class o{constructor(t,r){this.carrinhoService=t,this.router=r,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obtemCarrinho(),this.calculaTotal()}calculaTotal(){this.total=this.itensCarrinho.reduce((t,r)=>t+r.preco*r.quantidadeSelecionada,0)}removerProdutoCarrinho(t){this.itensCarrinho=this.itensCarrinho.filter(r=>r.id!==t),this.carrinhoService.removerItem(t),this.calculaTotal()}comprar(){alert("Compra finalizada"),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(p.e),n.Y36(s.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-carrinho"]],decls:5,vars:2,consts:[[1,"title"],[4,"ngIf","ngIfElse"],["semProduto",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],["src","itemCarrinho.imagem"],["type","number",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(t,r){if(1&t&&(n.TgZ(0,"h2",0),n._uU(1,"carrinho"),n.qZA(),n.YNc(2,g,8,5,"div",1),n.YNc(3,m,1,0,"ng-template",null,2,n.W1O)),2&t){const a=n.MAs(4);n.xp6(2),n.Q6J("ngIf",r.itensCarrinho.length>0)("ngIfElse",a)}},dependencies:[l.sg,l.O5,c.Fj,c.wV,c.JJ,c.On,l.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]}),o})()}];let _=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[s.Bz.forChild(f),s.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[l.ez,_,c.u5]}),o})()}}]);