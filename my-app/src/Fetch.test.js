import React from 'react'
import fetchMock from 'fetch-mock'
import Enzyme from 'enzyme'
import {shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const DELAY_MS = 2000

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const fetchResponseJson = async (url) => {
  try {
    const response = await fetch(url)
    const responseJson = await response.json()
    // You can introduce here an artificial delay, both Promises and async/await will wait until the function returns
    // await sleep(DELAY_MS)
    return responseJson
  }
  catch (e) {
    console.log(`fetchResponseJson failed:`, e)
  }
}

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  render() {
    return(
      <span>{JSON.stringify(this.state.data)}</span>
    )
  }

  // By returning the promise (a call to an async function) we can await componentDidMount
  componentDidMount() {
    return fetchResponseJson(`http://foo.bar`).then((responseJson) => {
      this.setState({
        data: responseJson
      })
    })
  }
}