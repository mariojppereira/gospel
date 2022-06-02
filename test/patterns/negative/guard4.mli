type t = A

val f : t -> int
(*@ r = f x
  requires match x with
           | A when 1 = 1 -> true
           | _ when true -> false
*)
(* {gospel_expected|
   [125] File "guard4.mli", line 5, characters 11-91:
         5 | ...........match x with
         6 |            | A when 1 = 1 -> true
         7 |            | _ when true -> false
         Error: This pattern-matching may not be exhaustive because of the guard.
                Here is an example of a case that may not be matched:
                  A.
   |gospel_expected} *)