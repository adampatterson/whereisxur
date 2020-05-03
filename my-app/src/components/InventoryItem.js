import React from 'react'
import { withManifestContext } from '../providers/ManifestProvider'

class InventoryItem extends React.Component
{
    render()
    {
        const manifest = this.props.manifestContext.data
        if (!manifest) {
            return ''
        }
        const itemDef = manifest.DestinyInventoryItemDefinition[this.props.data.itemHash]
        console.log(this.props.data, itemDef)
        return (
            <div className='inventory-item col-md-12 mb-2'>
                <span className='Icon'>
                    <img src={'https://www.bungie.net' + itemDef.displayProperties.icon}/>
                </span>
                <span className='Name'> {itemDef.displayProperties.name} </span>
                <span className='Type-Display-Name'> {itemDef.itemTypeAndTierDisplayName} </span>
            </div>
        )
    }
}

export default withManifestContext(InventoryItem)
