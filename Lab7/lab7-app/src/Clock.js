import {useState, useEffect} from 'react'

const Clock = () => {

  const [date, setDate] = useState(1)
  let [timerID, setTimerID] = useState(1)



  const tick = () => {
    setDate(new Date().toLocaleTimeString())
  }

  // component mount
  useEffect(() => {
    console.log("ComponentDidMount")

    // run the clock
    tick()
    setTimerID(setInterval(
      () => tick(),
      1000
    ))
    
    // component unmount
    return () => {
      console.log(`clearing interval`)
      clearInterval(timerID)
    }
  }, [])


  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date}</h2>
    </div>
  )
}

export default Clock