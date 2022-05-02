import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";

import "./App.css";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

const  App =()=> {
  const [robots, setRobots] = useState([])
  const [ searchfield, setSearchfield] = useState('')
  

  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobots(users) );
  }, [])

  const onSearchChange = (event) => {
    setSearchfield( event.target.value );
  };

 
    
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchfield.toLocaleLowerCase());
    });
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }


export default App;
