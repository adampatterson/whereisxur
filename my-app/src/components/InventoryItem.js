import React from "react";
import { withManifestContext } from "../providers/ManifestProvider";

class InventoryItem extends React.Component {
  render() {
    const manifest = this.props.manifestContext.data;
    if (!manifest) {
      return "";
    }
    const itemDef =
      manifest.DestinyInventoryItemDefinition[this.props.data.itemHash];
    console.log(this.props.data, itemDef);
    return (
      <div className="inventory-item">
        <span className="Icon">
          <img
            src={"https://www.bungie.net" + itemDef.displayProperties.icon}
          />
        </span>
        <span className="Name">{itemDef.displayProperties.name}</span>
        <span className="Type-Display-Name">
          {itemDef.itemTypeAndTierDisplayName}
        </span>
      </div>
    );
  }
}

// return (
//     <div className="Xur-Countdown">
//       <span className="Day Block">
//         <span className="Number">{this.formatNumber(day, 1)}</span>
//         <span className="Label">Day(s)</span>
//       </span>
//       <span className="Separator">:</span>
//       <span className="Hour Block">
//         <span className="Number">{this.formatNumber(hour, 2)}</span>
//         <span className="Label">Hour(s)</span>
//       </span>
//       <span className="Separator">:</span>
//       <span className="Minute Block">
//         <span className="Number">{this.formatNumber(min, 2)}</span>
//         <span className="Label">Minute(s)</span>
//       </span>
//       <span className="Separator">:</span>
//       <span className="Second Block">
//         <span className="Number">{this.formatNumber(sec, 2)}</span>
//         <span className="Label">Second(s)</span>
//       </span>
//     </div>
//   );
export default withManifestContext(InventoryItem);
