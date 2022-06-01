(**************************************************************************)
(*                                                                        *)
(*  GOSPEL -- A Specification Language for OCaml                          *)
(*                                                                        *)
(*  Copyright (c) 2018- The VOCaL Project                                 *)
(*                                                                        *)
(*  This software is free software, distributed under the MIT license     *)
(*  (as described in file LICENSE enclosed).                              *)
(**************************************************************************)

(*@ predicate pred (x:int) = x *)

(* ERROR: the term in predicates must have type prop or bool *)

(* {gospel_expected|
   [125] File "t4.mli", line 11, characters 26-27:
         Error: This term has type `int' but a term was expected of type `bool'.
   |gospel_expected} *)
