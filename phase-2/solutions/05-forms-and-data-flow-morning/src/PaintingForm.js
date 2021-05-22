import React from 'react'

class PaintingForm extends React.Component{
    constructor() {
        super()

        this.state = {
            title: '',
            imgUrl: '',
            artistName: ''
        }
    }    

    // handleTitleChange = (event) => {
    //     this.setState({
    //         title: event.target.value                        
    //     })

    //     console.log(this.state.title);
    // }

    handleChange = (e) => {
        this.setState({
            // we use square brackets
            // because we're handling
            // a dynamic key
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
        <div>
            <h1> Add a new Painting</h1>
            <form>
                <input 
                    type="text" 
                    placeholder="Title"
                    name="title"
                    onChange={this.handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder="ImgURL"
                    name="imgUrl"
                    onChange={this.handleChange}
                /> 
                <br/>
                <input type="text" placeholder="Artist Name"/><br/>
                <input type="text" placeholder="date"/><br/>
                <input type="text" placeholder="width"/><br/>
                <input type="text" placeholder="height"/><br/>

                <input type="submit" value="add new painting"/>
            </form>

        </div>)
    }
}

export default PaintingForm
