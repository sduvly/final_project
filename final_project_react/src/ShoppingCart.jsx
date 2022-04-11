import { Button, Icon } from 'semantic-ui-react'

function ShoppingCart(){
    return(
      <>
      <div>
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
    <Button animated='fade'>
      <Button.Content visible>Sign-up for a Pro account</Button.Content>
      <Button.Content hidden>$12.99 a month</Button.Content>
    </Button>
  </div>
      </>
    )
}

export default ShoppingCart
<div><button class="ui animated button"><div class="visible content">Next</div><div class="hidden content"><i aria-hidden="true" class="arrow right icon"></i></div></button><button class="ui vertical animated button"><div class="hidden content">Shop</div><div class="visible content"><i aria-hidden="true" class="shop icon"></i></div></button><button class="ui fade animated button"><div class="visible content">Sign-up for a Pro account</div><div class="hidden content">$12.99 a month</div></button></div>