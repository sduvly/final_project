import { Button, Icon } from 'semantic-ui-react'
import React from 'react'

function ShoppingCart(){
    return(
      <div className="shopCart">
      <div className="shopping">
    
    <Button animated='vertical'>
      <Button.Content hidden>🛒</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>

  </div>
      </div>
    )
}

export default ShoppingCart
