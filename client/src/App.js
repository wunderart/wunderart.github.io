import React, { Component } from 'react'
import axios from 'axios'
import MasonryLayout from './MasonryLayout'
import Header from './Header'

class App extends Component {
  state = { fileNames: [] }

  componentDidMount = async () => {
    const { data } = await axios.get('http://localhost:3050')
    this.setState({ fileNames: data })
  }

  render() {
    const images = []
    const fileNames = this.state.fileNames || []

    fileNames.forEach(fileName =>
      images.push(`${process.env.PUBLIC_URL}/images/${fileName}`)
    )

    return (
      <div>
        <Header />
        <div className="home-container">
          <MasonryLayout columns={3} gap={3}>
            {images.map(image => {
              return <img key="key" src={image} />
            })}
          </MasonryLayout>
        </div>
      </div>
    )
  }
}

export default App
