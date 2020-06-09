import $ from 'jquery'
export default function InputCount() {
  const [count, setCount] = React.useState(0)
  console.log( 'fn');
  React.useEffect(() => {
    console.log('effect');
    
    $('#count').css('color', '#1890ff')
  }, [])
  return <div id="count">
    'input count'
    <button onClick={() => setCount(count + 1)}>+</button>
    <span>{count}</span>
    <button onClick={() => setCount(count - 1)}>-</button>
  </div>
}