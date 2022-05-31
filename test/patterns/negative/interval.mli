type t12 = P of char * int

(*@ function f (a : t12) : bool =
      match a with
      | P ('\000'..'b', 0i) -> true
      | P ('b'..'\255', x) -> false
*)

(* EXPECTED
   [125] File "interval.mli", line 4, characters 6-90:
         Error: This pattern-matching is not exhaustive.
                Here is an example of a case that is not matched:
                  P ('\000', 1i).
*)
