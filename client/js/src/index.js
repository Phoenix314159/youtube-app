import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './src/components/search-bar';
import VideoList from './src/components/video-list';
import VideoDetail from './src/components/video-detail';


const api_key = 'AIzaSyDmS34vdKqePIe__wiRzsvfQn_HMfXMo7k'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
       this.videoSearch('surfboards');
    }
    videoSearch(term) {
        YTSearch({key: api_key, term: term}, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        })
    }
    render() {
        const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));