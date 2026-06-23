import { useGameState } from './hooks/useGameState.ts';
import { GenderSelect } from './components/screens/GenderSelect.tsx';
import { GamePlay } from './components/screens/GamePlay.tsx';
import { Ending } from './components/screens/Ending.tsx';
import './App.css';

function App() {
  const { state, selectGender, applyChoice, advanceEvent, checkRandomEvent, restart } = useGameState();

  switch (state.phase) {
    case 'gender':
      return <GenderSelect onSelect={selectGender} />;

    case 'playing':
      return (
        <GamePlay
          state={state}
          onChoose={applyChoice}
          onAdvance={advanceEvent}
          onCheckRandom={checkRandomEvent}
        />
      );

    case 'ending':
      return <Ending state={state} onRestart={restart} />;

    default:
      return <GenderSelect onSelect={selectGender} />;
  }
}

export default App;
