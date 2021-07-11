import React, { Component } from "react";
import classes from "./App.module.css";
import ProductData from "./ProductData";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductPreview from "./ProductPreview/ProductPreview";
import Topbar from "./Topbar/Topbar";
class App extends Component {
  state = {
    ProductData: ProductData,
    CurrentPreviewImagePos: 0,
    ShowHeartBeatSection: false,
  };

  onColorOptionClick = (pos) => {
    this.setState({ CurrentPreviewImagePos: pos });
  };

  onFeatureItemClick = (pos) => {
    let updated = false;
    if (pos === 1) updated = true;
    this.setState({ ShowHeartBeatSection: updated });
  };
  render() {
    return (
      <div className="App">
        <Topbar />

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview
              SelectedPreviewImage={
                this.state.ProductData.colorOptions[
                  this.state.CurrentPreviewImagePos
                ].imageUrl
              }
              ShowHeartBeatSection={this.state.ShowHeartBeatSection}
            />
          </div>
          <div className={classes.ProductData}>
            <ProductDetails
              data={this.state.ProductData}
              onColorOptionClick={this.onColorOptionClick}
              Pos={this.Pos}
              CurrentPreviewImagePos={this.state.CurrentPreviewImagePos}
              onFeatureItemClick={this.onFeatureItemClick}
              ShowHeartBeatSection={this.state.ShowHeartBeatSection}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
