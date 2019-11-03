import * as React from 'react'
import { Header } from './header/header'
import { Footer } from './footer/footer'
import Movies from './movies/movies'
import './app.css'

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Movies />
                <Footer />
            </div>
        )
    }
}

export default App
