// JavaScript Document
var NextChute;

function Colision(p, dirx, diry, a, b) {
  p.f = 16;
  p.addEventListener("tick", Dep);
  fond.addChild(p);
  var boom = new lib.Tranforme();
  boom.x = p.x + dirx * 4;
  boom.y = p.y + diry * 4;
  fond2.addChild(boom);
  var boom2 = new lib.Tranforme();
  boom2.x = p.x + dirx * 4 - 30;
  boom2.y = p.y + diry * 4 - 30;
  fond2.addChild(boom2);
  var boom3 = new lib.Tranforme();
  boom3.x = p.x + dirx * 4 + 30;
  boom3.y = p.y + diry * 4 + 30;
  fond2.addChild(boom3);
  var boom4 = new lib.Tranforme();
  boom4.x = p.x + dirx * 4 + 30;
  boom4.y = p.y + diry * 4 - 30;
  fond2.addChild(boom4);
  var boom5 = new lib.Tranforme();
  boom5.x = p.x + dirx * 4 - 30;
  boom5.y = p.y + diry * 4 + 30;
  fond2.addChild(boom5);
  function Dep(event) {
    event.target.x = event.target.x + dirx / 4;
    event.target.y = event.target.y + diry / 4;
    event.target.alpha = event.target.alpha - 0.05;
    event.target.f--;
    //console.log(event.target.f);
    if (event.target.f < 1) {
      count--;
      tableau_I[a][b] = "X";
      score = score + 50;
      var sc = document.getElementById("score");
      sc.firstChild.nodeValue = score;
      if (count == 0) {
        //console.log("end");
        fond.removeAllChildren();
        Refresh_Tab();
        if (NextChute) {
          Chute();
        } else {
        }
      }
      event.target.removeEventListener("tick", Dep);
    }
  }
}

function Collapse(p, a, b) {
  p.f = 16;
  p.addEventListener("tick", Dep);
  fond.addChild(p);
  var boom = new lib.Tranforme();
  boom.x = p.x;
  boom.y = p.y;
  fond2.addChild(boom);
  function Dep(event) {
    event.target.alpha = event.target.alpha - 0.05;
    event.target.f--;
    //console.log(event.target.f);
    if (event.target.f < 1) {
      count--;
      tableau_I[a][b] = "X";
      score = score + 100;
      var sc = document.getElementById("score");
      sc.firstChild.nodeValue = score;
      if (count == 0) {
        console.log("end");
        fond.removeAllChildren();
        Refresh_Tab();
        if (NextChute) {
          Chute();
        } else {
        }
      }
      event.target.removeEventListener("tick", Dep);
    }
  }
}

function Doublon(s, t) {
  var i, j, k;
  for (i = 0; i < t.length; i++) {
    if (s[0] == t[i][0] && s[1] == t[i][1]) {
      return true;
    }
  }
  return false;
}

function Solve() {
  var i, j, k, dx, dy, temp, v;

  count = 0;
  NextChute = false;
  temp = new Array();
  tableau_F = Init_Tableau();

  for (i = 0; i < 10; i++) {
    for (j = 0; j < 7; j++) {
      if (
        tableau_I[9 - i][j] != "X" &&
        tableau_I[9 - i][j].type == "propriete"
      ) {
        tableau_F[9 - i][j] = Interact(9 - i, j);
      }
      if (
        tableau_I[9 - i][j] != "X" &&
        tableau_I[9 - i][j].type == "figure" &&
        tableau_I[9 - i][j].n == 4
      ) {
        tableau_F[9 - i][j] = InteractC(9 - i, j);
      }
    }
  }

  //console.log(tableau_F);
  for (i = 9; i >= 0; i--) {
    for (j = 0; j < 7; j++) {
      if (tableau_F[i][j] == "Z") {
        count++;
        NextChute = true;
        Collapse(tableau_I[i][j], i, j);
      } else {
        if (tableau_F[i][j] != "X") {
          dx = dy = 0;
          //console.log(tableau_F[i][j]);
          for (k = 0; k < tableau_F[i][j].length; k++) {
            if (tableau_F[i][j][k] != "X") {
              NextChute = true;
              var s = new Array(tableau_F[i][j][k][0], tableau_F[i][j][k][1]);
              if (Doublon(s, temp) == false) {
                temp.push(s);
                dy = tableau_F[i][j][k][0] - i;
                dx = tableau_F[i][j][k][1] - j;
                tableau_I[tableau_F[i][j][k][0]][tableau_F[i][j][k][1]].n =
                  tableau_F[i][j][k][2];
              }
              break;
            }
          }
          //console.log(dx+"/"+dy);
          if (dx != 0 || dy != 0) {
            count++;
            Colision(tableau_I[i][j], dx * 15, dy * 15, i, j);
          }
        }
      }
    }
  }
  //if(NextChute==true){Carre()}
  if (NextChute == false) {
    NewTirage();
  }
}

function InteractC(i, j) {
  var res = "";

  var k;
  if (j == 0 && i == 9) {
    if (NearCarre(i, j, -1, 0)) {
      res = "Z";
      return res;
    }
    if (NearCarre(i, j, 0, 1)) {
      res = "Z";
      return res;
    }
  } else {
    if (j == 6 && i == 9) {
      if (NearCarre(i, j, -1, 0)) {
        res = "Z";
        return res;
      }
      if (NearCarre(i, j, 0, -1)) {
        res = "Z";
        return res;
      }
    } else {
      if (j == 0) {
        if (NearCarre(i, j, -1, 0)) {
          res = "Z";
          return res;
        }
        if (NearCarre(i, j, 1, 0)) {
          res = "Z";
          return res;
        }
        if (NearCarre(i, j, 0, 1)) {
          res = "Z";
          return res;
        }
      } else {
        if (j == 6) {
          if (NearCarre(i, j, -1, 0)) {
            res = "Z";
            return res;
          }
          if (NearCarre(i, j, 1, 0)) {
            res = "Z";
            return res;
          }
          if (NearCarre(i, j, 0, -1)) {
            res = "Z";
            return res;
          }
        } else {
          if (i == 9) {
            // alert("ok");
            if (NearCarre(i, j, -1, 0)) {
              res = "Z";
              return res;
            }
            if (NearCarre(i, j, 0, -1)) {
              res = "Z";
              return res;
            }
            if (NearCarre(i, j, 0, 1)) {
              res = "Z";
              return res;
            }
          } else {
            if (NearCarre(i, j, -1, 0)) {
              res = "Z";
              return res;
            }
            if (NearCarre(i, j, 1, 0)) {
              res = "Z";
              return res;
            }
            if (NearCarre(i, j, 0, 1)) {
              res = "Z";
              return res;
            }
            if (NearCarre(i, j, 0, -1)) {
              res = "Z";
              return res;
            }
          }
        }
      }
    }
  }

  //res.reverse();
  return res;
}

function Interact(i, j) {
  var res = new Array();

  var k;
  if (j == 0 && i == 9) {
    res.push(IsProp(9, 0, 0, 1));
    res.push(IsProp(9, 0, -1, 0));
  } else {
    if (j == 6 && i == 9) {
      res.push(IsProp(9, 6, 0, -1));
      res.push(IsProp(9, 6, -1, 0));
    } else {
      if (j == 0) {
        res.push(IsProp(i, 0, 1, 0));
        res.push(IsProp(i, 0, 0, 1));
        res.push(IsProp(i, 0, -1, 0));
      } else {
        if (j == 6) {
          res.push(IsProp(i, 6, 1, 0));
          res.push(IsProp(i, 6, 0, -1));
          res.push(IsProp(i, 6, -1, 0));
        } else {
          if (i == 9) {
            // alert("ok");
            res.push(IsProp(9, j, 0, -1));
            res.push(IsProp(9, j, 0, 1));
            res.push(IsProp(9, j, -1, 0));
          } else {
            res.push(IsProp(i, j, 1, 0));
            res.push(IsProp(i, j, 0, -1));
            res.push(IsProp(i, j, 0, 1));
            res.push(IsProp(i, j, -1, 0));
          }
        }
      }
    }
  }

  //res.reverse();
  return res;
}

function NearCarre(i, j, dx, dy) {
  if (
    tableau_I[i + dx][j + dy].type == "figure" &&
    tableau_I[i + dx][j + dy].n == 4
  ) {
    return true;
  } else {
    return false;
  }
}

function IsProp(i, j, dirx, diry) {
  //alert((i+dirx)+"/"+(j+diry))
  //console.log(i+","+j+"///"+(i+dirx)+","+(j+diry));
  if (tableau_I[i + dirx][j + diry].type == "figure") {
    var res = new Array(i + dirx, j + diry);
    var q = tableau_I[i + dirx][j + diry].n;
    var p = tableau_I[i][j].n;
    //alert(dirx+"/"+diry);
    //alert(p+"/"+q);
    if ((p == 0 || p == 1) && q == 0) {
      res.push(1);
      return res;
    }
    if ((p == 2 || p == 7) && q == 1) {
      res.push(2);
      return res;
    }
    if ((p == 3 || p == 4) && q == 1) {
      res.push(3);
      return res;
    }
    if (p == 5 && q == 0) {
      res.push(3);
      return res;
    }
    if (p == 6 && q == 0) {
      res.push(2);
      return res;
    }
    if (p == 3 && q == 2) {
      res.push(4);
      return res;
    }
    if ((p == 3 || p == 4) && q == 2) {
      res.push(4);
      return res;
    }
    if ((p == 2 || p == 7) && q == 3) {
      res.push(4);
      return res;
    }
  }
  return "X";
}

function Recommencer() {
  window.location.reload(true);
}
