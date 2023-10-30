## Esercuzio
**Consegna**
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
****
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];
In seguito l'utente clicca su una cella: 
se il numero è presente nella lista dei numeri generati 
- abbiamo calpestato una bomba 
- la cella si colora di rosso e la partita termina, 
altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
**Bonus**
1 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
3- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

## Soluzione 
1. Generare 16 bombe usando un array di numeri casuali non ripetuti fare in modo che i numeri non superino il numero delle griglie
2. Definire un array dei numeri non bombe cliccati

**Funzione del click**
1. Leggere il numero della cella cliccata
2. Se il numero è presente nell' array delle bombe la cella diventa rossa e l' utente perde
3. Altrimenti la cella si colora di azzurro, il numero cliccato vine aggiunto all' array di numeri non bomba, se la lunghezza dell' array non bomba è uguale al numero delle non bombe l' utente ha vinto.


