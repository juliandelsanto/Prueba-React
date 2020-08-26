const initialState = [
  {id: 1, desc: 'todo 1', completed: false},
  {id: 2, desc: 'todo 2', completed: false},
];
const COMPLETE = 'COMPLETE';
const SUBMIT = 'SUBMIT';
export const complete = (id) => ({
  type: COMPLETE,
  payload: id,
});

export const submit = (val) => ({
  type: SUBMIT,
  payload: val,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE:
      return state.map((x) =>
        x.id === action.payload ? {...x, complete: !x.completed} : x,
      );
    case SUBMIT: {
      const miArray = [...state];
      miArray.push({id: 3, desc: action.payload, completed: false});
      console.log(miArray);
      return miArray;
    }
    default:
      return state;
  }
};
