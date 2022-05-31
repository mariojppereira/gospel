(**************************************************************************)
(*                                                                        *)
(*  GOSPEL -- A Specification Language for OCaml                          *)
(*                                                                        *)
(*  Copyright (c) 2018- The VOCaL Project                                 *)
(*                                                                        *)
(*  This software is free software, distributed under the MIT license     *)
(*  (as described in file LICENSE enclosed).                              *)
(**************************************************************************)

val f : int -> int -> int
(*@ r = f ~x y*)

(* ERROR:
   Line 12
   first parameter is not named
   remove ~ before x in line 12 *)

(* EXPECTED
   [125] File "t17.mli", line 12, characters 8-9:
         Error: Type checking error: parameter do not match with val type.
*)
