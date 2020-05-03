import React from "react";
import { withManifestContext } from "../providers/ManifestProvider";
import InventoryItem from "./InventoryItem";
import "./XurInventory.css";
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

    console.log(categories, items, xurDef, "this is our initial array");
    return (
      <div className="Xur-Inventory container">
        {/* iterating through categories (the vendor categories), */}
        {categories.map((category, categoryKey) => {
          const displayCategory =
            xurDef.displayCategories[category.displayCategoryIndex];
          // outputting the category block
          return (
            <div key={categoryKey} className="inventory-category row">
              {/* grabbing the category display name from xur's definition */}
              <div className="col-md-12 mt-5">
                  <h3>{displayCategory.displayProperties.name}</h3>
              </div>
              {/* iterating through the itemIndex array and also gets the index position*/}
              {category.itemIndexes.map((itemIndex, itemKey) => {
                const item = xurDef.itemList[itemIndex];
                return <InventoryItem key={itemKey} data={item} />;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
export default withManifestContext(XurInventory);

//const displayCategory = xurDef.displayCategories[entry.displayCategoryIndex];
