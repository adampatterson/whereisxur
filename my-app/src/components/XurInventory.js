import React from "react";
import { withManifestContext } from "../providers/ManifestProvider";
import InventoryItem from "./InventoryItem";
const XUR_HASH = "2190858386";

class XurInventory extends React.Component {
  
  items = [];
  render() {
    const manifest = this.props.manifestContext.data;
    if (!manifest) {
      return "";
    }
    const xurDef = manifest.DestinyVendorDefinition[XUR_HASH];
    const categories = this.props.categories;
    const items = this.props.items;

    console.log(categories, items, xurDef);
    return (
      <div className="Xur-Inventory">
        <div className="Left">
          {this.items.map((entry, index) => (
            <InventoryItem key={index} data={entry} />
          ))}
        </div>
      </div>
    );
  }
}
export default withManifestContext(XurInventory);


//const displayCategory = xurDef.displayCategories[entry.displayCategoryIndex];