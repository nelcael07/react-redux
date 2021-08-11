// o zero é passado só na primeira vez
export default function (state = 0, action) {
  switch (action.type) {
    case 'SUM':
      return action.payload[0]+action.payload[1]
    case 'SUBRACT':
      return action.payload[0]- action.payload[1]
      
    default:
      return state
  }
}