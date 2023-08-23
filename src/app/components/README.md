## Dynamic Table
La tabella utilizza 3 input: 
  -> DynTable Header è una string[], viene usata per definire il numero delle colonne E il titolo di ogni colonna, 
  -> DynTableBody    è una any[], dove any è un dato qualunque purchè abbia tutti i campi definiti da DynTableHeader
  -> DynTableHeader  è una string, Viene utilizzata per creare un istanza personale in 'Session Storage'

# Utilizzo
La tabella è composta da 3 loop totali, è strettamente necessario che tutti i campi di DynTableHeader e tutte le key da renderizzare siano uguali ( fatta 
    eccezione per la maiuscola iniziale o eventuali '_'), di DynTableHeader DEVE avere lo stesso ordine dell'interfaccia degli oggetti di DynTableBody

# Aggiornamento
  23/08/2023 -> Devono essere implementati "display di un numero definito di elementi", "la ricerca di componenti della tabella"