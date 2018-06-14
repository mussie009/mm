  import React, {Component} from 'react';
  import { BrowserRouter, Route} from 'react-router-dom';
  import { connect } from 'react-redux';
  import * as actions from '../actions';


  import Header from './Header';
  import Landing from './landing';
  import Contacts from './Contacts';
  // import ImageUpload from './FileUpLoad';
  import Footer from './Footer';
  // import ContactDetail from './contactDetail';
  // import ProfilePhotoes from './ImageDownloads';
  // import ImageDownloads from './ImageDownloads';
  // import Images from './Images';
  import Files from './Files';
  // <Route path="/contacts" component={ContactDetail} />


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
    this.props.fetchContacts();
    // this.props.selectContact();
    // this.props.downloadImage();
    //this.props.uploadFile();
    // this.props.downloadImage();
  }
  render(){
    return (
      <div className="container">
      <BrowserRouter>
        <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route path="/contacts" component={Contacts} />

        <Route path="/files" component={Files} />
        
        <Footer />
        </div>
      </BrowserRouter>
      </div>
    );
  }
};
  export default connect(null, actions)(App);
  // <Route path="/images" component={Images} />
