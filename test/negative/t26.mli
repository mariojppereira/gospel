(**************************************************************************)
(*                                                                        *)
(*  GOSPEL -- A Specification Language for OCaml                          *)
(*                                                                        *)
(*  Copyright (c) 2018- The VOCaL Project                                 *)
(*                                                                        *)
(*  This software is free software, distributed under the MIT license     *)
(*  (as described in file LICENSE enclosed).                              *)
(**************************************************************************)

val f : x:('a -> 'b -> 'c) -> y:'a -> 'b -> 'c
(*@ r = f ~x [z:int] ~y z *)

(* ERROR:
   Line 12
   duplicated names in function header
   change name of z in line 12 *)

(* EXPECTED
   [125] File "t26.mli", line 12, characters 21-22:
         Error: The variable `z' is duplicated in this pattern.
*)
