export default function Log({ turns, players }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {players[turn.player - 1]?.name || `Player ${turn.player}`} selected
          square at row {turn.square.row}, column {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
