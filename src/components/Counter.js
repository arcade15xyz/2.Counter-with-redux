
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT , INCREASE, TOGGLE, DECREMENT } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  }
  const increseHandler = () => {
    dispatch( { type: INCREASE, amount: 5 })
  }
  const decrementHandler = () => {
    dispatch({ type: DECREMENT });
  }
  const toggleCounterHandler = () => {
    dispatch({ type: TOGGLE})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler}>Increse by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;