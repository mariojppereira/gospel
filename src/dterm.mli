open Ppxlib
open Identifier
open Tterm
open Ttypes

type dty = Tvar of dtvar | Tapp of tysymbol * dty list | Tty of ty

and dtvar = { dtv_id : int; mutable dtv_def : dty option }

module Mstr : Map.S with type key = string

type dpattern = {
  dp_node : dpattern_node;
  dp_dty : dty;
  dp_vars : dty Mstr.t;
  dp_loc : Location.t;
}

and dpattern_node =
  | DPwild
  | DPvar of Preid.t
  | DPapp of lsymbol * dpattern list
  | DPor of dpattern * dpattern
  | DPas of dpattern * Preid.t
  | DPcast of dpattern * dty

type dbinder = Preid.t * dty

type dterm = { dt_node : dterm_node; dt_dty : dty option; dt_loc : Location.t }

and dterm_node =
  | DTattr of dterm * string list
  | DTvar of Preid.t
  | DTconst of Parsetree.constant
  | DTapp of lsymbol * dterm list
  | DTif of dterm * dterm * dterm
  | DTlet of Preid.t * dterm * dterm
  | DTcase of dterm * (dpattern * dterm) list
  | DTquant of quant * dbinder list * dterm
  | DTbinop of binop * dterm * dterm
  | DTnot of dterm
  | DTold of dterm
  | DTtrue
  | DTfalse

type denv = dty Mstr.t

val dty_bool : dty
val dty_char : dty
val dty_float : dty
val dty_string : dty
val dty_integer : dty
val dty_of_dterm : dterm -> dty
val dty_of_ty : Ttypes.ty -> dty
val dty_fresh : unit -> dty
val max_dty : Coercion.t -> dterm list -> dty option
val specialize_ls : lsymbol -> dty list * dty option
val specialize_cs : loc:Location.t -> lsymbol -> dty list * dty
val dty_unify : loc:Location.t -> dty -> dty -> unit
val dterm_unify : dterm -> dty -> unit

val app_unify :
  loc:Location.t -> lsymbol -> ('a -> 'b -> unit) -> 'a list -> 'b list -> unit

val app_unify_map :
  loc:Location.t -> lsymbol -> ('a -> 'b -> 'c) -> 'a list -> 'b list -> 'c list

val dfmla_unify : dterm -> unit
val dpattern_unify : dpattern -> dty -> unit
val unify : dterm -> dty option -> unit
val dterm_expected : Coercion.t -> dterm -> dty -> dterm
val dfmla_expected : Coercion.t -> dterm -> dterm
val dterm_expected_op : Coercion.t -> dterm -> dty option -> dterm
val denv_get_opt : 'a Mstr.t -> string -> 'a option
val denv_find : loc:Location.t -> string -> denv -> dty
val is_in_denv : denv -> string -> bool
val denv_add_var : denv -> string -> dty -> denv
val denv_add_var_quant : denv -> (Identifier.Preid.t * dty) list -> denv
val term : vsymbol Mstr.t -> dterm -> term
val fmla : vsymbol Mstr.t -> dterm -> term
val pattern : dpattern -> Tterm.pattern * vsymbol Mstr.t

exception DuplicatedVar of string
exception UnboundVar of string