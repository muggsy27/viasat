import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url1: '',
      url2: '',
      url3: '',
      url4: '',
      url5: '',
      url6: '',
      url7: '',
      url8: '',
      url9: '',
      url10: ''
    }
  }

  handleChangeFor = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    let urls = [];

    for (const key in this.state) {
      if (this.state[key] !== '') {
        urls.push(this.state[key]);
      }
    }

    console.log(urls);

    axios.post('/', { urls })
      .then(res => console.log(res));

    window.location.reload()
  };

  render() {
    return (
      <main className="container">

        <header>
          <h1>Enter Up To 10 Homepage URL's to scrape HTML & Add To "/homepage" Folder</h1>
        </header>

        <section>

          <form className="form" onSubmit={this.handleOnSubmit}>

            <fieldset>

              <legend>Website URL's</legend>
              <label htmlFor="url1">Website URL #1:</label>
              <input autoFocus type="url" pattern="https://.*" name="url1" id="url1" placeholder="https://example.com" value={this.state.url1} onChange={this.handleChangeFor} />
              <hr />

              <label htmlFor="url2">Website URL #2:</label>
              <input type="url" pattern="https://.*" name="url2" id="url2" placeholder="https://example.com" value={this.state.url2} onChange={this.handleChangeFor} />
              <hr />

              <label htmlFor="url3">Website URL #3:</label>
              <input type="url" pattern="https://.*" name="url3" id="url3" placeholder="https://example.com" value={this.state.url3} onChange={this.handleChangeFor} />
              <hr />

              <label htmlFor="url4">Website URL #4:</label>
              <input type="url" pattern="https://.*" name="url4" id="url4" placeholder="https://example.com" value={this.state.url4} onChange={this.handleChangeFor} />
              <hr />

              <label htmlFor="url5">Website URL #5:</label>
              <input type="url" pattern="https://.*" name="url5" id="url5" placeholder="https://example.com" value={this.state.url5} onChange={this.handleChangeFor} />
              <hr />

              <label htmlFor="url6">Website URL #6:</label>
              <input type="url" pattern="https://.*" name="url6" id="url6" placeholder="https://example.com" value={this.state.url6} onChange={this.handleChangeFor} />
              <hr />

              <label htmlFor="url7">Website URL #7:</label>
              <input type="url" pattern="https://.*" name="url7" id="url7" placeholder="https://example.com" value={this.state.url7} onChange={this.handleChangeFor} />
              <hr />

              <label htmlFor="url8">Website URL #8:</label>
              <input type="url" pattern="https://.*" name="url8" id="url8" placeholder="https://example.com" value={this.state.url8} onChange={this.handleChangeFor} />
              <hr />

              <label htmlFor="url9">Website URL #9:</label>
              <input type="url" pattern="https://.*" name="url9" id="url9" placeholder="https://example.com" value={this.state.url9} onChange={this.handleChangeFor} />
              <hr />

              <label htmlFor="url10">Website URL #10:</label>
              <input type="url" pattern="https://.*" name="url10" id="url10" placeholder="https://example.com" value={this.state.url10} onChange={this.handleChangeFor} />
              <hr />

              <input type="submit" />

            </fieldset>

          </form>

        </section>

      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));