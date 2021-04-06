
type 'a t
(*@ model view: 'a seq *)

val f: unit -> 'b t
(*@ r = f ()
    ensures let x = r.view[0] in true *)
