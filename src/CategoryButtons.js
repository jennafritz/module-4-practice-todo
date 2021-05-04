import React, {Component} from 'react'
// import CategoryButton from './CategoryButton'

class CategoryButtonsContainer extends Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         selected: false
    //     }
    // }

    render() {
        return(
            <div className="categories">
                <h5>Category Filters</h5>
                {this.props.categories.map(category => <button name={category} className={category === this.props.selectedCategory ? "selected" : undefined} onClick={(event) => {this.props.changeCategory(event)}}>{category}</button>)}
            </div>
        )
    }
}

export default CategoryButtonsContainer