import React, { Component, useState, useEffect } from 'react';

const App = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((v) => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        {/* <ClassCounter value={value} /> */}
        {/* <HookCounter value={value} /> */}
        {/* <Notification /> */}
        <PlanetInfo id={value} />
      </div>
    )
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
}

class ClassCounter extends Component {

  componentDidMount() {
    console.log('class: mount');
  }

  componentDidUpdate(props) {
    console.log('class: update');
  }

  componentWillUnmount() {
    console.log('class: unmount');
  }

  render() {
    return <p>{ this.props.value }</p>
  }
}

const HookCounter = ({ value }) => {

  useEffect(() => {
    console.log('mount');
    return () => console.log('unmount');
  }, []);

  useEffect(() => console.log('update'));

  return <p>{ value }</p>
}

const Notification = () => {

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 1500);

    return () => clearTimeout(timeout);
  }, [])

  return (
    <div>
      { visible && <p>Hello!!!</p>}
    </div>
  )
}

const PlanetInfo = ({ id }) => {
  const name = usePlanetInfo(id);

  return (
    <div>
      { id } - { name }
    </div>
  )
}

const usePlanetInfo = (id) => {
  const [ name, setName ] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://swapi.dev/api/planets/${id}`)
    .then(res => res.json())
    .then(data => !cancelled && setName(data.name))

    return () => cancelled = true;
  }, [id])

  return name;
}

export default App;