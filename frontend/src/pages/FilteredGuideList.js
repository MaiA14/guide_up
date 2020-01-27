import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { Card, Icon, Image } from 'semantic-ui-react'

import GuidePreview from '../cmps/GuidePreview.js'
import { loadGuides, loadTags } from '../reducers/guide/actionGuide.js'
import MainSearch from '../cmps/MainSearch.js'
import Loading from '../cmps/Loading.js'
import Navbar from '../cmps/Navbar.js'
import Footer from '../cmps/Footer.js'

class FilteredGuideList extends Component {
    state = {
        filterGuides: [],
        coffe: '<i class="fas fa-mug-hot"></i>',
        outdoor: '<i class="fas fa-tree"></i>',
        shopping: '<i class="fas fa-shopping-cart"></i>',
        culture: '<i class="fas fa-university"></i>',
        sport: '<i class="fas fa-futbol"></i>',
        food: '<i class="fas fa-utensils"></i>',
        music: '<i class="fas fa-music"></i>',
        art: '<i class="fas fa-paint-brush"></i>',
        photos: '<i class="fas fa-camera"></i>',
        nightlife: '<i class="fas fa-cocktail"></i>',
    }

    componentDidMount() {
        document.body.style.paddingTop = '60px'
        const items = queryString.parse(this.props.location.search)
        debugger
        this.props.loadGuides(items.city);

        document.body.style.paddingTop = '60px'
    }

    componentDidUpdate(propPrev) {



        const items = queryString.parse(this.props.location.search)
        this.props.loadGuides(items.city);
    }

    onSearch = (city) => {
        const items = queryString.parse(this.props.location.search)
        this.props.loadGuides(city);
    }

    render() {
        const selectStyle = {
            border: '1px solid #ef8758'
        }

        const styleNavBar = {
            backgroundColor: '#161f24'
        }


 



        return (

            <div>
                <Navbar styleNavBar={styleNavBar} ></Navbar>
                {this.props.isLoading ? <Loading></Loading> :
                    <React.Fragment>
                        <h1 className="filtered-guides-header main-container">{this.props.guides[0].city + '\'s guides'}</h1>
                        <h2 className="guides-short-content main-container">Find your guides, let them share with you the insight on the city.  Enjoy from unforgatable trip</h2>
                        <div className="filtered-glist-container">
                            <MainSearch onSearch={this.onSearch} style={selectStyle} ></MainSearch>
                            {/* choose tags:<input type="checkbox" checked="checked"></input>
                    <span className="checkmark"></span>
                    <label className="container">Art</label>
                    <input type="checkbox" checked="checked"></input>
                    <span className="checkmark"></span>
                    <label className="container">Coffe</label>
                    <input type="checkbox" checked="checked"></input>
                    <span className="checkmark"></span>
                    <label className="container">Music</label>
                    <input type="checkbox" checked="checked"></input>
                    <span className="checkmark"></span>
                    <label className="container">Movies</label> */}
                        </div>
                        <section className="cards-list main-container">
                            {this.props.guides.map(guide => <GuidePreview key={guide._id} guide={guide}></GuidePreview>)}
                        </section>
                    </React.Fragment>
                }




                <section className="cards-list main-container">
                    {this.props.guides.map(guide => <GuidePreview key={guide._id} guide={guide}></GuidePreview>)}
                </section>
                <Footer ></Footer>
            </div >
        )
    }
}
const mappropsToProps = (state) => {
    return {
        guides: state.guides.guides,
        isLoading: state.system.isLoading,

    }
}
const mapDispatchToProps = {
    loadGuides,
    // loadTags
}
export default connect(
    mappropsToProps,
    mapDispatchToProps
)(FilteredGuideList)