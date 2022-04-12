import { Button, Icon } from 'semantic-ui-react'

function ShoppingCart(){
    return(
      <>
      <div>
    
    <Button animated='vertical'>
      <Button.Content hidden>🛒</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>

  </div>
      </>
    )
}

export default ShoppingCart
