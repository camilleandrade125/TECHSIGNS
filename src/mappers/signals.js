import A from "../assets/Alfabetoemlibras/A.png";
import B from "../assets/Alfabetoemlibras/B.png";
import C from "../assets/Alfabetoemlibras/C.png";
import Ccedil from "../assets/Alfabetoemlibras/Ccedil.png";
import D from "../assets/Alfabetoemlibras/D.png";
import E from "../assets/Alfabetoemlibras/E.png";
import F from "../assets/Alfabetoemlibras/F.png";
import G from "../assets/Alfabetoemlibras/G.png";
import H from "../assets/Alfabetoemlibras/H.png";
import I from "../assets/Alfabetoemlibras/I.png";
import J from "../assets/Alfabetoemlibras/J.png";
import K from "../assets/Alfabetoemlibras/K.png";
import L from "../assets/Alfabetoemlibras/L.png";
import M from "../assets/Alfabetoemlibras/M.png";
import N from "../assets/Alfabetoemlibras/N.png";
import O from "../assets/Alfabetoemlibras/O.png";
import P from "../assets/Alfabetoemlibras/P.png";
import Q from "../assets/Alfabetoemlibras/Q.png";
import R from "../assets/Alfabetoemlibras/R.png";
import S from "../assets/Alfabetoemlibras/S.png";
import T from "../assets/Alfabetoemlibras/T.png";
import U from "../assets/Alfabetoemlibras/U.png";
import V from "../assets/Alfabetoemlibras/V.png";
import W from "../assets/Alfabetoemlibras/W.png";
import X from "../assets/Alfabetoemlibras/X.png";
import Y from "../assets/Alfabetoemlibras/Y.png";
import Z from "../assets/Alfabetoemlibras/Z.png";

const letters = [A, B, C, Ccedil, D, E, F, G, I, H, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]

export const signals = Array.from({ length: 28 }, (_, index) => {
   return {
     id: index,
     image: letters[index]
   } 
})