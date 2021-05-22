import React from 'react';
import Painting from './Painting';

// we need to specify which material-ui
// component we want to use
import { TextField } from '@material-ui/core'
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core'


class PaintingsList extends React.Component{
  constructor(props) {
    // super() enables us to access the parent
    // class' properties, methods, etc.

    // it enables to use methods like setState()
    super(props);
    this.state = {
      filteredList: this.props.paintings
    }
  }
  
  handleSearch = (e) => {
    // both originalList and filteredList are
    // arrays
    let originalList = this.props.paintings;
    let filteredList = [];

    // use conditional to determine
    // which paintings to add to
    // filteredList
    if (e.target.value !== "") {
      // run our search
      filteredList = originalList.filter(painting => {
        const title = painting.title.toLowerCase();

        const query = e.target.value.toLowerCase();

        return title.includes(query)
      })
      
      this.setState({
        filteredList: filteredList
      })
    } else {
      this.setState({
        filteredList: originalList
      })
    }
  }

  render(){
    return (
      <Container align="center">
        <TextField 
          label="Enter title here..." 
          variant="filled"
          onChange={this.handleSearch}
        />
        <h1>Paintings</h1>
        <Box m={5}>
          <Grid
            container 
            spacing={10} 
            direction="row"
          >
            {
              this.state.filteredList.map(painting => (
                <Grid item xs={3}>
                  <Painting
                    key={painting.id}
                    painting={painting}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Container>
      
    )
  }
}

export default PaintingsList;
