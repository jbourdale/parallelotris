// JavaScript Document
var canvas, stage, exportRoot,canvas2, stage2, exportRoot2,PieceA,PieceB,tableau_I,tableau_F,count,score;
score=0;
var fond=new createjs.Container();
var fond2=new createjs.Container();

function debug(t){
	var i,j
	var tableau_debug=Init_Tableau();
	for(i=0;i<10;i++){
		for(j=0;j<7;j++){
			if(t[i][j]!="X"){tableau_debug[i][j]="O"} else {tableau_debug[i][j]="X";}
		}
	}
console.log(tableau_debug);}

function init() {
    
	canvas = document.getElementById("canvas");
	exportRoot = new lib.Parallelotris();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
		
	stage.addChild(fond);
	stage.addChild(fond2);

	 createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.addListener(stage);
	
	canvas2 = document.getElementById("canvas2");
	exportRoot2 = new lib.Puzzle2D_Controle();
	stage2 = new createjs.Stage(canvas2);
	stage2.addChild(exportRoot2);
	stage2.update();
    createjs.Touch.enable(stage2);
    stage2.preventSelection = false;    
	exportRoot2.tourner.addEventListener("click",GOROT);
	exportRoot2.Gauche.addEventListener("click",GOG);
	exportRoot2.Droite.addEventListener("click",GOD);
	exportRoot2.Bas.addEventListener("click",GOB);
	function GOROT(){	if( (PieceA.C>0 && PieceA.C<6) || (PieceA.C==0 && PieceB.L<=PieceA.L) || (PieceA.C==6 && PieceB.L>=PieceA.L) ){
	Moove(PieceB,"rot");}}
	function GOG(){if(PieceA.C>0 && PieceB.C>0){
	Moove(PieceA,"left");Moove(PieceB,"left");}
    }
	function GOD(){if(PieceA.C<6 && PieceB.C<6){	
	Moove(PieceA,"right");Moove(PieceB,"right");}}
	function GOB(){Chute();}
	
	
	
	exportRoot.signature.addEventListener("click",mail);
	function mail(event){
		location.href="mailto:joly.poubelle@neuf.fr"}
	
	tableau_I=Init_Tableau();
	NewTirage();
	Init_Control();
	
	
}

function Init_Control(){
	var i,j,k
	
	$(document).keydown(function(event) {
//debug(tableau_I);		
if(event.which==37){
	if(PieceA.C>0 && PieceB.C>0){
	Moove(PieceA,"left");Moove(PieceB,"left");}
    }
	
	
if(event.which==39){
	if(PieceA.C<6 && PieceB.C<6){	
	Moove(PieceA,"right");Moove(PieceB,"right");}
    }
if(event.which==32){
	event.preventDefault();
	if( (PieceA.C>0 && PieceA.C<6) || (PieceA.C==0 && PieceB.L<=PieceA.L) || (PieceA.C==6 && PieceB.L>=PieceA.L) ){
	Moove(PieceB,"rot");}
	}
	
if(event.which==40){
	event.preventDefault();
	Chute();
	
	 
	}


});
}

function Chute(){
	var i,j;
	count=0;
		
	for(i=0;i<7;i++){		
	  for(j=0;j<10;j++){
		if(tableau_I[9-j][i]=="X"){
			for(k=j;k<10;k++)
			 {   
				 if(tableau_I[9-k][i]!="X"){tableau_I[9-k][i].tombe=true;}
			 }
			 break;
			}		
	  }
	}
	
	
	for(i=0;i<7;i++){		
	  for(j=0;j<10;j++){
		  if(tableau_I[9-j][i]!="X" && tableau_I[9-j][i].tombe==true)
		  {
			
			  
		  tableau_I[9-j][i].tombe=false;
		  count++;
		  Moove(tableau_I[9-j][i],"bas")
		   
		  }
	  }
	}
	if(count==0){Solve();//NewTirage();Init_Control();
	}
}

function Stop_Control(){
	$(document).off();
}

function Init_Tableau(){
	var i,j,res;
	res=new Array();
	for(i=0;i<10;i++){
		var C=new Array("X","X","X","X","X","X","X");
		res.push(C);
		}
		
	return(res);
}

function NewTirage(){
	var p,i,j;
	for(i=0;i<3;i++){
		for(j=0;j<7;j++){
			//console.log(i+"/"+j+":"+tableau_I[i][j]);
		if(tableau_I[i][j]!="X"){
			var sc=score+";0";
			Envoyer_Score(sc);
			document.getElementById("gameover").style.display='block';
			Stop_Control();
			console.log("stop");
			return(true);
		} else{Init_Control();}
	}
	}
	var a=new Array("0","0","0","0","0","0","1","1","1","2","3")
	var b=new Array("0","1","2","3","4","5","6","7","0","1","2","3","4","5")
	var c,d;
	
	if(Math.random()<0.7){
	p=new lib.Piece();
	p.type="figure";
	c=Math.round(Math.random()*10);
	d=parseInt(a[c]);
	p.n=d;
	p.gotoAndStop(d);
	
	} else {
		p=new lib.Prop();
	p.type="propriete";
	c=Math.round(Math.random()*13);
	d=parseInt(b[c]);
	p.n=d;
	p.gotoAndStop(d);
		
	}	
	
	p.x=210;
	p.y=90;
	p.scaleX=p.scaleY=0.9;
	stage.addChildAt(p,0);
	p.cache(-30,-30,60,60);
	PieceA=p;
	tableau_I[1][3]=p;
	PieceA.L=1;
	PieceA.C=3;
	var p2=new lib.Prop();
	p2.type="propriete";
	p2.x=210;
	p2.y=30;
	c=Math.round(Math.random()*13);
	d=parseInt(b[c]);
	p2.n=d;
	p2.gotoAndStop(d);
	
	//p.gotoAndStop(3);p.n=3;	
	//p2.gotoAndStop(7);p2.n=7;
	
	p2.scaleX=p2.scaleY=0.9;
	stage.addChildAt(p2,0);
	p2.cache(-30,-30,60,60);
	PieceB=p2;
	tableau_I[0][3]=p2;
	PieceB.L=0;
	PieceB.C=3
	tableau_I[PieceA.L][PieceA.C]=PieceA;
	tableau_I[PieceB.L][PieceB.C]=PieceB;
	
	
}

function gauche(event){
		event.target.x=event.target.x-30;
		event.target.f--;
		if(event.target.f<1){
			event.target.C--;
			count--
			if(count==0){Refresh_Tab();Init_Control();}			
						
			event.target.removeEventListener("tick",gauche)
			
		}
	}
function droite(event){
		event.target.x=event.target.x+30;
		event.target.f--;
		if(event.target.f<1){
			event.target.C++;
			count--
			if(count==0){Refresh_Tab();Init_Control();}
						
			event.target.removeEventListener("tick",droite)	;
			
		}
	}
function rot(event){
	  
	   if(PieceB.L<PieceA.L){
		event.target.x=event.target.x+30;
		event.target.y=event.target.y+30;
		event.target.f--;
		if(event.target.f<1){
			event.target.C++;
			event.target.L++;
			Init_Control();
			event.target.removeEventListener("tick",rot);
			
		}Refresh_Tab(); return}
	    if(PieceB.C>PieceA.C){
		event.target.x=event.target.x-30;
		event.target.y=event.target.y+30;
		event.target.f--;
		if(event.target.f<1){
			event.target.C--;
			event.target.L++;
			Init_Control();
			event.target.removeEventListener("tick",rot);
		}Refresh_Tab();return}
		 if(PieceB.L>PieceA.L){
		event.target.x=event.target.x-30;
		event.target.y=event.target.y-30;
		event.target.f--;
		if(event.target.f<1){
			event.target.C--;
			event.target.L--;
			Init_Control();
			event.target.removeEventListener("tick",rot);
		}Refresh_Tab();return}
			 if(PieceB.C<PieceA.C){
		event.target.x=event.target.x+30;
		event.target.y=event.target.y-30;
		event.target.f--;
		if(event.target.f<1){
			event.target.C++;
			event.target.L--;
			Init_Control();
			event.target.removeEventListener("tick",rot);
		}Refresh_Tab();return}
	}

function bas(event){
	    var i,j,l,c;
		event.target.y=event.target.y+30;
		event.target.f--;
		if(event.target.f<1){
			event.target.L++;			
			count--;
			//console.log(count);
			event.target.removeEventListener("tick",bas);
			
			//console.log(count)
			if(count==0){Refresh_Tab();Chute();}
			
			
			
		}
	}

function Refresh_Tab(){
	var i,j;
	
	tableau_F=Init_Tableau();
			for(i=0;i<10;i++){
				for(j=0;j<7;j++){					
					if(tableau_I[i][j]!="X"){
					l=tableau_I[i][j].L;
					c=tableau_I[i][j].C;
					tableau_F[l][c]=tableau_I[i][j];}
			}
			}
			for(i=0;i<10;i++){
				for(j=0;j<7;j++){	
				tableau_I[i][j]=tableau_F[i][j];
				if(tableau_I[i][j]!="X"){
				tableau_I[i][j].gotoAndStop(tableau_I[i][j].n)
				tableau_I[i][j].updateCache();}
				
				}
			}
	
}
	
function Moove(p,dir){
	Stop_Control();
	if(dir=="left"){
		count=2;		
	p.addEventListener("tick",gauche);
	p.f=2;	
	}
	if(dir=="right"){
		count=2;		
	p.addEventListener("tick",droite);
	p.f=2;	
	}
	if(dir=="rot"){		
	p.addEventListener("tick",rot);
	p.f=2;	
	}
	if(dir=="bas"){		
	p.addEventListener("tick",bas);
	p.f=2;	
	}

}
function Regle(){
	if(document.getElementById("reg").style.display=='none'){
	document.getElementById("reg").style.display='block';
	document.getElementById("tab1").style.display='block';
	document.getElementById("tab2").style.display='block';
	document.getElementById("tab3").style.display='block';} else {
		document.getElementById("reg").style.display='none';
	document.getElementById("tab1").style.display='none';
	document.getElementById("tab2").style.display='none';
	document.getElementById("tab3").style.display='none';
		
	}
	}